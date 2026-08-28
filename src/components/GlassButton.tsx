import { motion, HTMLMotionProps } from "motion/react";
import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface GlassButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  primary?: boolean;
}

export default function GlassButton({ children, className, primary, ...props }: GlassButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative overflow-hidden rounded-full px-8 py-4 font-medium tracking-wide transition-all duration-500",
        "backdrop-blur-[50px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] group flex items-center justify-center gap-2",
        primary 
          ? "bg-white/[0.08] text-white border border-white/[0.2] hover:bg-white/[0.15] hover:border-white/[0.3] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1),inset_0_1px_1px_rgba(255,255,255,0.4)]" 
          : "bg-white/[0.02] text-white/90 border border-white/[0.1] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.25] hover:shadow-[0_0_20px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.2)]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.2] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/[0.4] to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none mix-blend-overlay" />
      <span className="relative z-10 flex items-center gap-2 drop-shadow-md">{children}</span>
    </motion.button>
  );
}
