import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X, Home, User, Code2, Briefcase, Award, Mail, FileText, Sparkles, ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { name: 'Home', id: 'home', icon: Home },
  { name: 'About', id: 'about', icon: User },
  { name: 'Skills', id: 'skills', icon: Code2 },
  { name: 'Projects', id: 'projects', icon: Briefcase },
  { name: 'Experience', id: 'experience', icon: Sparkles },
  { name: 'Certifications', id: 'certifications', icon: Award },
  { name: 'Contact', id: 'contact', icon: Mail },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Determine active section based on scroll position
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
    const scrollPos = window.scrollY + window.innerHeight / 3;
    
    sections.forEach((sec, idx) => {
      if (sec) {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(NAV_ITEMS[idx].id);
        }
      }
    });
  });

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Floating Glass Brand Bar (Mobile & Desktop) */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-between items-center px-4 sm:px-8 max-w-7xl mx-auto pointer-events-none">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] group hover:border-white/20 transition-all"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="font-display text-xs sm:text-sm font-bold tracking-wider text-white/90 group-hover:text-white transition-colors">
            JEGATHEESWARAN<span className="text-[#38BDF8]">.AI</span>
          </span>
        </a>

        <div className="pointer-events-auto flex items-center gap-2">
          <a
            href="/resume.pdf"
            download="Jegatheeswaran_R_Resume.pdf"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-[#38BDF8]/20 border border-white/10 hover:border-[#38BDF8]/40 backdrop-blur-xl text-white/90 hover:text-white text-xs font-mono transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <FileText className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          {/* Mobile hamburger button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white/80 hover:text-white transition-all"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Desktop Floating Bottom Dock */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1, scale: 1 },
          hidden: { y: 60, opacity: 0, scale: 0.95 }
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 inset-x-0 z-50 hidden md:flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center gap-1 p-1.5 bg-black/70 backdrop-blur-2xl border border-white/[0.12] rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.15)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
          
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)} 
                className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-sans text-xs tracking-wide ${
                  isActive 
                    ? 'text-white bg-white/[0.15] shadow-[0_0_20px_rgba(56,189,248,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] font-medium' 
                    : 'text-white/70 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#38BDF8]' : 'text-white/50'}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Glass Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/90 flex flex-col justify-between p-6 pt-24 pb-8 md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex flex-col gap-3 max-w-sm mx-auto w-full" onClick={(e) => e.stopPropagation()}>
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest px-2 mb-1">Navigation</p>
              {NAV_ITEMS.map((item, i) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all text-left ${
                      isActive 
                        ? 'bg-[#38BDF8]/10 border-[#38BDF8]/40 text-white' 
                        : 'bg-white/[0.03] border-white/10 text-white/70 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${isActive ? 'bg-[#38BDF8]/20 text-[#38BDF8]' : 'bg-white/[0.05] text-white/60'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-display font-medium text-base">{item.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/30" />
                  </motion.button>
                );
              })}
            </div>

            <div className="max-w-sm mx-auto w-full pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                download="Jegatheeswaran_R_Resume.pdf"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#38BDF8]/20 to-[#8B5CF6]/20 border border-[#38BDF8]/40 text-white text-center font-mono text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#38BDF8]" />
                Download Resume (PDF)
              </a>
              <p className="text-center text-white/30 text-xs font-mono mt-2">© {new Date().getFullYear()} Jegatheeswaran R</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
