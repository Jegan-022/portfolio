import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavClick = (item: string) => {
    setMobileOpen(false);
    const id = item.toLowerCase();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1, scale: 1 },
          hidden: { y: 50, opacity: 0, scale: 0.95 }
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-8 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <nav className="pointer-events-auto flex items-center gap-1 p-2 bg-white/[0.03] backdrop-blur-[50px] border border-white/[0.15] rounded-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-transparent to-transparent pointer-events-none mix-blend-overlay" />
          
          {/* Animated edge sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.2] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out pointer-events-none mix-blend-overlay" />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button key={item} onClick={() => handleNavClick(item)} className="relative z-10 px-5 py-2.5 rounded-full text-white/70 hover:text-white transition-all duration-300 font-sans text-sm tracking-wide hover:shadow-[0_0_30px_rgba(255,255,255,0.1),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:bg-white/[0.1] active:scale-95 group/link">
                 <span className="relative z-10">{item}</span>
                 <div className="absolute inset-0 opacity-0 group-hover/link:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full transition-opacity duration-300 pointer-events-none" />
              </button>
            ))}
          </div>

          {/* Resume Button */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="hidden md:flex relative z-10 px-5 py-2.5 rounded-full text-[#38BDF8] hover:text-white transition-all duration-300 font-sans text-sm tracking-wide hover:bg-[#38BDF8]/20 border border-[#38BDF8]/30 hover:border-[#38BDF8]/50 ml-1">
            Resume
          </a>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="md:hidden relative z-10 p-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/[0.1] transition-all"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[49] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          onClick={() => setMobileOpen(false)}
        >
          {NAV_ITEMS.map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => handleNavClick(item)}
              className="text-2xl font-display font-bold text-white/80 hover:text-white transition-colors"
            >
              {item}
            </motion.button>
          ))}
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: NAV_ITEMS.length * 0.05 }}
            className="text-xl font-display font-bold text-[#38BDF8] hover:text-white transition-colors mt-4 px-6 py-3 border border-[#38BDF8]/30 rounded-full"
          >
            Resume
          </motion.a>
        </motion.div>
      )}
    </>
  );
}
