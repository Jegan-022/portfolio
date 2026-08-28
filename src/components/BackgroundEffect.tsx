import { memo } from "react";
import { motion } from "motion/react";
import Scene3D from "./Scene3D";

const BackgroundEffect = memo(function BackgroundEffect() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202] overflow-hidden">
      
      {/* Layer 1: Dark gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-[#050505] to-[#020202]" />

      {/* Layer 2: Aurora Holographic Blobs */}
      <motion.div
        style={{ willChange: "transform", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%)" }}
        animate={{
          x: ["-20%", "30%", "-20%"],
          y: ["-20%", "30%", "-20%"],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full"
      />
      <motion.div
        style={{ willChange: "transform", background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 60%)" }}
        animate={{
          x: ["30%", "-30%", "30%"],
          y: ["20%", "-20%", "20%"],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full"
      />
      <motion.div
        style={{ willChange: "transform", background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 60%)" }}
        animate={{
          x: ["0%", "40%", "0%"],
          y: ["40%", "0%", "40%"],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full"
      />
      
      {/* Extra holographic accent */}
      <motion.div
        style={{ willChange: "transform", background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.05), transparent)" }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] right-[30%] w-[40vw] h-[40vw] rounded-full"
      />
      
      {/* Layer 3: Moving particles & Floating glass shapes (Via Scene3D) */}
      <div className="absolute inset-0 opacity-40">
         <Scene3D />
      </div>

      {/* Layer 4: Light beams & grid */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      {/* Layer 5: Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/50 to-[#020202] pointer-events-none" />

      {/* Layer 6: Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
});

export default BackgroundEffect;
