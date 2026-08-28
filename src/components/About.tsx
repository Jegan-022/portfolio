import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import GlassCard from "./GlassCard";
import { GraduationCap, Brain, Code2, Cpu, MapPin, BookOpen, Sparkles, Target, Compass, Layers } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
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
        
        {/* Profile / Stats Card */}
        <motion.div style={{ y: y1 }} className="lg:col-span-5 w-full">
          <GlassCard className="w-full p-4 sm:p-6 flex flex-col group relative overflow-hidden">
            {/* Animated Aura Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-[#38BDF8]/20 to-[#8B5CF6]/20 rounded-full blur-[70px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            
            {/* Holographic Avatar Showcase */}
            <div className="relative w-full h-[280px] sm:h-[340px] rounded-3xl overflow-hidden mb-6 border border-white/10 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 flex flex-col justify-between p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.15),transparent_70%)]" />
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-[11px] font-mono text-[#38BDF8] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Available for Roles
                </span>
                <span className="text-xs font-mono text-white/40">Madurai, TN</span>
              </div>

              {/* Monogram graphic */}
              <div className="relative z-10 my-auto text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#38BDF8]/20 via-[#8B5CF6]/20 to-white/10 border border-white/20 shadow-[0_0_40px_rgba(56,189,248,0.25)] text-3xl sm:text-4xl font-display font-black text-white">
                  JR
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-0.5">Jegatheeswaran R</h3>
                <p className="text-white/60 font-mono text-xs tracking-wider uppercase">AI & ML Engineer • Full Stack Dev</p>
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
            ].map((item, i) => {
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
