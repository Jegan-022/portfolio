import { motion, useScroll, useTransform } from "motion/react";
import GlassButton from "./GlassButton";
import { useRef } from "react";
import { Beams } from "./ui/ethereal-beams-hero";
import { Github, Linkedin, ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
      
      {/* Beams Background */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={2.5}
          beamHeight={18}
          beamNumber={15}
          lightColor="#ffffff"
          speed={2.5}
          noiseIntensity={2}
          scale={0.15}
          rotation={43}
        />
      </div>

      <motion.div style={{ y, opacity, willChange: "transform, opacity" }} className="z-10 text-center max-w-6xl mx-auto flex flex-col items-center w-full px-4 relative mt-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 px-6 py-2 rounded-full border border-white/[0.15] bg-white/[0.03] backdrop-blur-[50px] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent pointer-events-none mix-blend-overlay" />
          <span className="bg-gradient-to-r from-white via-[#e2e8f0] to-[#94a3b8] bg-clip-text text-transparent uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold font-mono relative z-10">
            AI & ML Aspirant • CSE Student • Problem Solver
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          <h1 className="font-display text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold tracking-tighter leading-none text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] mix-blend-plus-lighter pb-4">
            JEGATHEESWARAN
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          {["AI Engineer", "Machine Learning", "Data Analytics"].map((role) => (
            <div key={role} className="px-6 py-2 rounded-full bg-white/[0.02] border border-white/[0.1] backdrop-blur-[40px] text-white/80 font-mono text-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              {role}
            </div>
          ))}
        </motion.div>

        {/* Short intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-white/50 text-base sm:text-lg font-light leading-relaxed mb-10"
        >
          I'm a Computer Science and Engineering student specializing in AI/ML, passionate about building practical solutions using data-driven approaches, intelligent systems, and efficient algorithms.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-12 w-full"
        >
          <GlassButton primary className="w-full sm:w-auto" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
            <ArrowRight className="w-4 h-4 ml-1" />
          </GlassButton>
          <GlassButton className="w-full sm:w-auto" onClick={() => window.open('#', '_blank')}>
            <Download className="w-4 h-4 mr-1" />
            Download Resume
          </GlassButton>
          <GlassButton className="w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <Mail className="w-4 h-4 mr-1" />
            Contact Me
          </GlassButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex gap-4 justify-center"
        >
          <a href="https://github.com/Jegan-022" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-[40px] text-white/70 hover:text-white hover:bg-white/[0.08] transition-all hover:scale-110">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/jegatheeswaran-r-9a122633b/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-[40px] text-white/70 hover:text-white hover:bg-white/[0.08] transition-all hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
      
      {/* Gradient Overlay for blending into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
