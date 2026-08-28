import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import GlassCard from "./GlassCard";
import { GraduationCap, Brain, Code2, Cpu, MapPin, BookOpen, Sparkles, Compass, Layers, RotateCw, Mail, Github, User, CheckCircle2 } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section id="about" ref={containerRef} className="py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-md mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
            System Overview
          </span>
        </motion.div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Profile / 3D Flipping Card Panel */}
        <motion.div style={{ y: y1 }} className="lg:col-span-5 w-full">
          <GlassCard className="w-full p-4 sm:p-6 flex flex-col group relative overflow-hidden">
            {/* Animated Aura Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-[#38BDF8]/20 to-[#8B5CF6]/20 rounded-full blur-[70px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            
            {/* 3D Flipping Card (Front: Photo, Back: Name & Details) */}
            <div 
              className={`about-flip-card mb-6 ${isFlipped ? 'is-flipped' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="about-flip-inner">
                
                {/* FRONT FACE: Photo & Monogram */}
                <div className="about-card-face about-card-front flex flex-col justify-between">
                  <div className="flex justify-between items-center z-10">
                    <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-[11px] font-mono text-[#38BDF8] flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Available for Roles
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] font-mono text-white/50">
                      <RotateCw className="w-3 h-3 text-[#38BDF8] animate-spin" style={{ animationDuration: '6s' }} />
                      Hover / Tap
                    </span>
                  </div>

                  {/* Photo Frame Container */}
                  <div className="my-auto flex flex-col items-center justify-center relative z-10">
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#38BDF8] via-[#8B5CF6] to-[#06B6D4] shadow-[0_0_35px_rgba(56,189,248,0.35)] group-hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full rounded-full bg-zinc-950 flex flex-col items-center justify-center overflow-hidden border-2 border-black">
                        <div className="text-4xl sm:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-tr from-white via-slate-200 to-slate-400">
                          JR
                        </div>
                      </div>
                    </div>
                    <p className="text-white/40 text-[11px] font-mono mt-3 uppercase tracking-wider">Photo / Avatar</p>
                  </div>

                  {/* Front Footer */}
                  <div className="z-10 flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="text-xs font-mono text-white/60">Madurai, TN, India</span>
                    <span className="text-xs font-mono text-[#38BDF8] font-bold tracking-wider">FLIP FOR INFO →</span>
                  </div>
                </div>

                {/* BACK FACE: Name, Title, and Credentials */}
                <div className="about-card-face about-card-back flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
                      Identity Profile
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
                  </div>

                  <div className="my-auto space-y-3">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                        JEGATHEESWARAN R
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#a78bfa] font-bold uppercase tracking-wider mt-0.5">
                        AI & ML Aspirant
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs text-white/80 font-mono pt-2 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>B.Tech CSE (AIML) - 3rd Year</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>CGPA: 9.47 / 10.0 (KARE University)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#a78bfa]" />
                        <span>Madurai, Tamil Nadu, India</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
                    <span className="text-white/40">priyajegan1222@gmail.com</span>
                    <span className="text-[#38BDF8] font-bold">← FLIP</span>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl flex flex-col items-center justify-center p-3 sm:p-4 hover:bg-white/[0.06] transition-colors shadow-inner">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-0.5">9.47</div>
                <div className="text-[10px] sm:text-xs text-[#38BDF8] font-mono uppercase tracking-wider font-semibold">CGPA</div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl flex flex-col items-center justify-center p-3 sm:p-4 hover:bg-white/[0.06] transition-colors shadow-inner">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-0.5">3+</div>
                <div className="text-[10px] sm:text-xs text-[#a78bfa] font-mono uppercase tracking-wider font-semibold">Projects</div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl flex flex-col items-center justify-center p-3 sm:p-4 hover:bg-white/[0.06] transition-colors shadow-inner">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-0.5">2</div>
                <div className="text-[10px] sm:text-xs text-emerald-400 font-mono uppercase tracking-wider font-semibold">Certs</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Story & Education Panel */}
        <motion.div style={{ y: y2 }} className="lg:col-span-7 flex flex-col gap-6 w-full">
          
          {/* Education Timeline Card */}
          <GlassCard className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-6 flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-[#38BDF8]" />
              Academic Background
            </h3>
            
            <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.12] bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] transition-all group">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#38BDF8]" />
                  <h4 className="font-display font-bold text-white text-base sm:text-lg">B.Tech Computer Science & Engineering (AIML)</h4>
                </div>
                <span className="text-xs font-mono text-white/70 bg-white/[0.08] border border-white/[0.1] px-2.5 py-1 rounded-full">
                  3rd Year
                </span>
              </div>
              
              <p className="text-white/70 text-sm font-medium mb-3">
                Kalasalingam Academy of Research and Education (KARE)
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/[0.06]">
                <span className="inline-flex items-center gap-1 text-xs font-mono text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-2.5 py-1 rounded-md">
                  CGPA: 9.47 / 10.0
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-white/50 font-mono">
                  <MapPin className="w-3.5 h-3.5" /> Tamil Nadu, India
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Bio Story Card */}
          <GlassCard className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-[#a78bfa]" />
              Philosophy & Focus
            </h3>
            <div className="space-y-4 text-white/70 text-sm sm:text-base font-light leading-relaxed">
              <p>
                I am a Computer Science student dedicated to Artificial Intelligence and Machine Learning. I specialize in turning complex data and algorithmic theory into production-ready software, responsive dashboards, and smart automated systems.
              </p>
              <p>
                My foundation spans Python, Data Structures & Algorithms, Deep Learning, Natural Language Processing, and Asynchronous Web Architectures. I actively participate in hackathons (such as IEEE InnovateX 2.0) and IoT projects combining hardware sensors with real-time anomaly detection.
              </p>
              <p>
                Currently, I am looking for software engineering, AI/ML, or data science internships where I can contribute to impactful, data-driven systems.
              </p>
            </div>
          </GlassCard>

          {/* Core Competencies Quick Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Brain, label: "AI / ML & NLP", color: "text-[#38BDF8]", bg: "bg-[#38BDF8]/10" },
              { icon: Code2, label: "DSA & Python", color: "text-[#a78bfa]", bg: "bg-[#a78bfa]/10" },
              { icon: Cpu, label: "IoT & Hardware", color: "text-emerald-400", bg: "bg-emerald-400/10" },
              { icon: Layers, label: "Full Stack Web", color: "text-cyan-400", bg: "bg-cyan-400/10" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md flex flex-col items-center justify-center gap-2 hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                >
                  <div className={`p-2 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-white/80 text-[11px] font-mono font-medium text-center">{item.label}</span>
                </div>
              );
            })}
          </div>

        </motion.div>
        
      </div>
    </section>
  );
}
