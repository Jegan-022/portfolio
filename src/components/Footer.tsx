import GlassCard from "./GlassCard";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-24 pb-28 px-4 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-t from-[#38BDF8]/15 via-[#8B5CF6]/10 to-transparent blur-[90px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <GlassCard tilt={false} className="w-full py-16 px-6 sm:px-10 flex flex-col items-center text-center justify-center relative overflow-hidden group">
          
          {/* Back to top Button */}
          <button
            onClick={scrollToTop}
            className="mb-8 p-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-all hover:scale-110 shadow-lg group/top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover/top:-translate-y-0.5 transition-transform" />
          </button>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
            Let's build something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#a78bfa] to-[#38BDF8]">
              extraordinary.
            </span>
          </h2>

          <p className="text-white/50 text-xs sm:text-sm font-light max-w-md mb-8">
            Open for software engineering and AI/ML opportunities. Let's discuss how I can contribute to your team.
          </p>
          
          {/* Email button */}
          <a 
            href="mailto:priyajegan1222@gmail.com" 
            className="group/mail relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.12] hover:border-[#38BDF8]/40 rounded-full text-white/80 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] mb-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-[150%] group-hover/mail:translate-x-[150%] transition-transform duration-1000 ease-out" />
            <Mail className="w-4 h-4 text-[#38BDF8]" />
            <span className="font-mono text-xs sm:text-sm">priyajegan1222@gmail.com</span>
          </a>
          
          {/* 3D Flipping Cube Social Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            {/* GitHub 3D Cube Button */}
            <a 
              href="https://github.com/Jegan-022" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="uiverse-btn-icon uiverse-btn-github"
              aria-label="Visit GitHub Profile"
            >
              <div className="icon-box">
                <Github className="w-5 h-5" />
              </div>
              <div className="cube-box">
                <span className="cube-side cube-front">GitHub</span>
                <span className="cube-side cube-top">View Profile</span>
              </div>
            </a>

            {/* LinkedIn 3D Cube Button */}
            <a 
              href="https://www.linkedin.com/in/jegatheeswaran-r-9a122633b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="uiverse-btn-icon uiverse-btn-linkedin"
              aria-label="Connect on LinkedIn"
            >
              <div className="icon-box">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="cube-box">
                <span className="cube-side cube-front">LinkedIn</span>
                <span className="cube-side cube-top">Connect</span>
              </div>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-widest">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/60 font-semibold">JEGATHEESWARAN R</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>AI & ML ASPIRANT</span>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
}
