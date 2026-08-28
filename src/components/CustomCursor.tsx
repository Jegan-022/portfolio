import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Ultra-fast and snappy cursor response
  const springConfig = { damping: 28, stiffness: 1200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const auraXSpring = useSpring(cursorX, { damping: 30, stiffness: 500 });
  const auraYSpring = useSpring(cursorY, { damping: 30, stiffness: 500 });

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".uiverse-btn-icon") ||
        target.closest(".about-flip-card")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Center sharp dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform"
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Target ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-white/30 rounded-full pointer-events-none z-[9998] flex items-center justify-center backdrop-invert-[0.1]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform"
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0)",
          border: isHovered ? "1.5px solid rgba(56,189,248,0.8)" : "1px solid rgba(255,255,255,0.3)"
        }}
        transition={{ type: "spring", stiffness: 600, damping: 25 }}
      >
        <div className="w-full h-full rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)]" />
      </motion.div>
      
      {/* Cursor ambient glow */}
      <motion.div
        className="fixed top-0 left-0 w-48 h-48 rounded-full pointer-events-none z-[9997]"
        style={{
          x: auraXSpring,
          y: auraYSpring,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
          background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(139,92,246,0.12) 40%, transparent 70%)"
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.9 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
    </>
  );
}
