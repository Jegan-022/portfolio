import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { MouseEvent, ReactNode, useRef } from "react";
import { cn } from "../utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

export default function GlassCard({ children, className, tilt = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const x = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(y, [-0.5, 0.5], tilt ? [5, -5] : [0, 0]);
  const rotateY = useTransform(x, [-0.5, 0.5], tilt ? [-5, 5] : [0, 0]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Normalize coordinates for tilt (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
    
    // Set variables for the glow effect
    ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={cn(
        "relative rounded-[2.5rem] bg-white/[0.03] backdrop-blur-[30px] backface-hidden transform-gpu",
        "border border-white/[0.15] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(255,255,255,0.05)]",
        "overflow-hidden group",
        className
      )}
    >
      {/* Dynamic reflections */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
      
      {/* Prismatic edge highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent opacity-30" />
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      
      {/* Deep inner shadow to create thickness */}
      <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.02)] rounded-[inherit] pointer-events-none" />
      
      {/* Holographic glow on hover */}
      <div 
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[inherit]"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 40%),
                       radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(56,189,248,0.05), transparent 50%)`,
          zIndex: 1,
        }}
      />
      
      {/* Premium glowing glass edge tracking mouse */}
      <div 
        className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[inherit]"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.3), transparent 40%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
          zIndex: 2,
        }}
      />
      
      {/* Content wrapper with floating effect */}
      <div className="relative z-10 w-full h-full" style={{ transform: tilt ? "translateZ(30px)" : "none" }}>
        {children}
      </div>
    </motion.div>
  );
}
