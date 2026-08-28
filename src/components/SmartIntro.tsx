import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function SmartIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020202] text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-4xl font-mono text-white/50 mb-4 tracking-widest uppercase">
              {greeting}
            </h1>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Welcome to Manideep's<br/>Digital Universe
            </motion.h2>
          </motion.div>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#38BDF8] via-[#8B5CF6] to-[#06B6D4] origin-left w-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
