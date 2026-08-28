import { motion, useScroll, useTransform } from "motion/react";
import GlassButton from "./GlassButton";
import { useRef } from "react";
import { Beams } from "./ui/ethereal-beams-hero";
import { Github, Linkedin, ArrowRight, Download, Mail, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-24 pb-16 px-4">
      
      {/* 3D Beams Shader Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Beams
          beamWidth={2.2}
          beamHeight={18}
          beamNumber={14}
          lightColor="#ffffff"
          speed={2.2}
          noiseIntensity={1.8}
          scale={0.16}
          rotation={42}
        />
      </div>

      {/* Radial Gradient Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-[#38BDF8]/15 via-[#8B5CF6]/15 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      <motion.div style={{ y, opacity, willChange: "transform, opacity" }} className="z-10 text-center max-w-5xl mx-auto flex flex-col items-center w-full relative">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 px-4 sm:px-6 py-2 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] relative overflow-hidden inline-flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
          <span className="bg-gradient-to-r from-white via-[#e2e8f0] to-[#94a3b8] bg-clip-text text-transparent uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold font-mono">
            AI & ML Aspirant • CSE Student
          </span>
        </motion.div>
        
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl mb-4"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.25)]">
            JEGATHEESWARAN
          </h1>
          <div className="mt-2 text-lg sm:text-2xl md:text-3xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#a78bfa] to-[#38BDF8] tracking-wide">
            ENGINEERING INTELLIGENT SYSTEMS
          </div>
        </motion.div>
        
        {/* Skill Tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 max-w-2xl px-2"
        >
          {["Machine Learning", "Deep Learning", "NLP & LLMs", "Data Analytics", "IoT & Embedded"].map((role) => (
            <div 
              key={role} 
              className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-white/80 font-mono text-xs shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] hover:border-white/20 hover:text-white transition-all"
            >
              {role}
            </div>
          ))}
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-white/60 text-sm sm:text-base font-light leading-relaxed mb-8 px-4"
        >
          Computer Science & Engineering student at Kalasalingam University specializing in AI/ML. Passionate about turning real-world challenges into high-performance software, data architectures, and smart automation systems.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center items-center mb-8 w-full max-w-md sm:max-w-none px-4"
        >
          <GlassButton primary className="w-full sm:w-auto" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </GlassButton>
          
          <a
            href="/resume.pdf"
            download="Jegatheeswaran_R_Resume.pdf"
            className="w-full sm:w-auto"
          >
            <GlassButton className="w-full sm:w-auto">
              <Download className="w-4 h-4 mr-1 text-[#38BDF8]" />
              <span>Download Resume</span>
            </GlassButton>
          </a>

          <GlassButton className="w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <Mail className="w-4 h-4 mr-1 text-[#a78bfa]" />
            <span>Contact Me</span>
          </GlassButton>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-3 justify-center"
        >
          <a 
            href="https://github.com/Jegan-022" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="p-3 rounded-full bg-white/[0.03] border border-white/[0.1] backdrop-blur-xl text-white/70 hover:text-white hover:bg-white/[0.1] hover:border-white/30 transition-all hover:scale-110 shadow-lg"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/jegatheeswaran-r-9a122633b/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full bg-white/[0.03] border border-white/[0.1] backdrop-blur-xl text-white/70 hover:text-white hover:bg-white/[0.1] hover:border-white/30 transition-all hover:scale-110 shadow-lg"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/30 cursor-pointer hover:text-white/70 transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
      
      {/* Subtle blend bottom overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020202] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
