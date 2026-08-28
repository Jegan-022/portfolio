import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import GlassCard from "./GlassCard";
import { GraduationCap, Brain, Code2, Zap, MapPin, BookOpen } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md mb-6"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
            Identity Module
          </span>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          About Me
        </h2>
      </div>

      <motion.div style={{ opacity, willChange: "opacity" }} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Profile Panel */}
        <motion.div style={{ y: y1, willChange: "transform" }} className="lg:col-span-5 relative">
          <GlassCard className="h-auto w-full p-2 flex flex-col group">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-white/10 transition-colors duration-700" />
            <div className="relative w-full h-[400px] rounded-[2rem] overflow-hidden mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
              <div className="w-full h-full bg-gradient-to-br from-[#38BDF8]/20 via-[#8B5CF6]/20 to-[#06B6D4]/20 flex items-center justify-center">
                <div className="text-[8rem] font-display font-bold text-white/10">JR</div>
              </div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Jegatheeswaran R</h3>
                <p className="text-white/60 font-mono text-sm tracking-widest uppercase">AI & ML Aspirant</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 flex-grow px-2 pb-2">
              <div className="bg-white/[0.02] border border-white/[0.1] rounded-2xl flex flex-col items-center justify-center p-4 hover:bg-white/[0.05] transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="text-3xl font-display font-bold text-white mb-1">9.47</div>
                <div className="text-xs text-[#38BDF8] font-mono uppercase tracking-widest">CGPA</div>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.1] rounded-2xl flex flex-col items-center justify-center p-4 hover:bg-white/[0.05] transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="text-3xl font-display font-bold text-white mb-1">3+</div>
                <div className="text-xs text-[#8B5CF6] font-mono uppercase tracking-widest">Projects</div>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.1] rounded-2xl flex flex-col items-center justify-center p-4 hover:bg-white/[0.05] transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="text-3xl font-display font-bold text-white mb-1">2</div>
                <div className="text-xs text-[#06B6D4] font-mono uppercase tracking-widest">Certs</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Info Panel */}
        <motion.div style={{ y: y2, willChange: "transform" }} className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Education Timeline */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-white/50" />
              Education
            </h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-white/20 before:to-transparent">
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-between md:justify-normal group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-white/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] group-hover:bg-white/10 transition-all group-hover:scale-110">
                  <BookOpen className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-white/[0.1] bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.06] hover:border-white/[0.2] transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:scale-[1.02] origin-center">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white text-lg">B.Tech CSE [AI & ML]</h4>
                    <span className="text-xs font-mono text-white/60 bg-white/[0.05] border border-white/[0.1] px-2 py-1 rounded-md shadow-inner">3rd Year</span>
                  </div>
                  <p className="text-white/60 text-sm">Kalasalingam Academy of Research Education</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-1 rounded-md">CGPA: 9.47</span>
                    <span className="flex items-center gap-1 text-xs text-white/40">
                      <MapPin className="w-3 h-3" /> Tamil Nadu
                    </span>
                  </div>
                </div>
              </motion.div>
              
            </div>
          </GlassCard>

          {/* About Text */}
          <GlassCard className="p-8">
             <div className="space-y-4 text-white/60 font-light text-lg leading-relaxed">
              <p>
                I'm a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, with a strong interest in Python, Data Structures & Algorithms, Data Analytics, and AI/ML. I enjoy turning real-world problems into practical technology solutions and building projects that combine software, data, and intelligent systems.
              </p>
              <p>
                I have hands-on experience with Python, NumPy, Pandas, Matplotlib, SQL, Machine Learning, Deep Learning, NLP, and web technologies. I'm also interested in IoT, automation, real-time data acquisition, and hackathons, where I can apply my technical skills to solve challenging problems.
              </p>
              <p>
                Currently, I'm focused on strengthening my problem-solving skills, developing industry-ready projects, and exploring innovative applications of AI and data-driven technologies.
              </p>
            </div>
          </GlassCard>

          {/* Quick Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Brain, label: "AI/ML", color: "text-[#38BDF8]" },
              { icon: Code2, label: "DSA", color: "text-[#8B5CF6]" },
              { icon: Zap, label: "IoT", color: "text-[#06B6D4]" },
              { icon: GraduationCap, label: "Research", color: "text-white" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.1] backdrop-blur-md flex flex-col items-center gap-2 hover:bg-white/[0.05] transition-all group cursor-default"
              >
                <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-white/70 text-xs font-mono uppercase tracking-widest">{item.label}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>
        
      </motion.div>
    </section>
  );
}
