import GlassCard from "./GlassCard";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-32 pb-32 px-4 relative z-10 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#38BDF8]/20 via-[#8B5CF6]/10 to-transparent blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
         <GlassCard tilt={false} className="w-full py-20 px-8 flex flex-col items-center text-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Let's build something <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6]">intelligent.</span>
            </h2>
            
            <a href="mailto:priyajegan1222@gmail.com" className="group/mail relative inline-flex items-center gap-3 px-8 py-4 bg-white/[0.03] backdrop-blur-[40px] border border-white/[0.1] rounded-full text-white/80 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] mb-16 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-[150%] group-hover/mail:translate-x-[150%] transition-transform duration-1000 ease-out" />
               <Mail className="w-5 h-5" />
               <span className="font-mono text-sm">priyajegan1222@gmail.com</span>
            </a>
            
            {/* Glass Dock for Socials */}
            <div className="flex items-center justify-center gap-4 px-8 py-4 w-full max-w-[280px] mx-auto rounded-full bg-white/[0.02] border border-white/[0.1] backdrop-blur-[40px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <a href="https://github.com/Jegan-022" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/[0.1] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/jegatheeswaran-r-9a122633b/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/[0.1] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mt-16 flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()}</span> 
              <span className="w-1 h-1 rounded-full bg-white/30" /> 
              <span>JEGATHEESWARAN R</span>
              <span className="w-1 h-1 rounded-full bg-white/30" /> 
              <span>ALL RIGHTS RESERVED</span>
            </p>
         </GlassCard>
      </div>
    </footer>
  );
}
