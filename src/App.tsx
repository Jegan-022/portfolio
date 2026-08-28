/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import BackgroundEffect from './components/BackgroundEffect';
import { AdaptiveQualityProvider } from './components/AdaptiveQualityManager';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Achievements = lazy(() => import('./components/Achievements'));
const Certificates = lazy(() => import('./components/Certificates'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

const LazySection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    style={{ willChange: "transform, opacity" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  // Respect reduced motion preferences
  useEffect(() => {
    const savedPrefs = localStorage.getItem('portfolio_prefs');
    if (!savedPrefs) {
      localStorage.setItem('portfolio_prefs', JSON.stringify({
        theme: 'dark',
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        language: navigator.language || 'en',
        lastVisited: Date.now()
      }));
    } else {
      const prefs = JSON.parse(savedPrefs);
      prefs.lastVisited = Date.now();
      localStorage.setItem('portfolio_prefs', JSON.stringify(prefs));
    }
  }, []);

  return (
    <AdaptiveQualityProvider>
      <SmoothScroll>
        <CustomCursor />
        <BackgroundEffect />
        <Header />
        <main className="min-h-screen bg-transparent relative z-10 selection:bg-white/20 selection:text-white">
          <Hero />
          <Suspense fallback={<div className="h-screen w-full" />}>
            <LazySection><About /></LazySection>
            <LazySection><Skills /></LazySection>
            <LazySection><Projects /></LazySection>
            <LazySection><Experience /></LazySection>
            <LazySection><Achievements /></LazySection>
            <LazySection><Certificates /></LazySection>
            <LazySection><ContactSection /></LazySection>
            <LazySection><Footer /></LazySection>
          </Suspense>
        </main>
      </SmoothScroll>
    </AdaptiveQualityProvider>
  );
}
