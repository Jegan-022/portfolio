import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const auraXSpring = useSpring(cursorX, { damping: 40, stiffness: 100 });
  const auraYSpring = useSpring(cursorY, { damping: 40, stiffness: 100 });

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
        target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
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
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[9998] flex items-center justify-center backdrop-invert-[0.1]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform"
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)",
          border: isHovered ? "1px solid rgba(255,255,255,0.5)" : "1px solid rgba(255,255,255,0.2)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-full h-full rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)]" />
      </motion.div>
      
      {/* Premium cursor bloom / lighting */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-[9997]"
        style={{
          x: auraXSpring,
          y: auraYSpring,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%)"
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 1 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
    </>
  );
}
