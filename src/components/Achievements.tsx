import { motion } from "motion/react";
import GlassCard from "./GlassCard";
import { Trophy, Code2, Sparkles, GraduationCap, Medal, Star, Flame, Lightbulb } from "lucide-react";

const achievements = [
  {
    id: 1,
    category: "Hackathons & Innovation",
    title: "IEEE InnovateX 2.0 Hackathon",
    desc: "Built a solo Graph-Based Betting Relationship and Fraud Detection Ecosystem with interactive D3.js force graphs and NLP telegram risk monitoring.",
    icon: Flame,
    color: "text-[#38BDF8]",
    border: "border-[#38BDF8]/30",
    bg: "bg-[#38BDF8]/10",
    gradient: "from-[#38BDF8]/20 via-transparent to-transparent"
  },
  {
    id: 2,
    category: "Academic Excellence",
    title: "9.47 CGPA Academic Distinction",
    desc: "Consistently maintaining a 9.47 CGPA in B.Tech Computer Science & Engineering (AI/ML specialization) at Kalasalingam University.",
    icon: GraduationCap,
    color: "text-[#a78bfa]",
    border: "border-[#a78bfa]/30",
    bg: "bg-[#a78bfa]/10",
    gradient: "from-[#a78bfa]/20 via-transparent to-transparent"
  },
  {
    id: 3,
    category: "Project Leadership",
    title: "Team Lead — ProthexAI",
    desc: "Led the engineering and AI development of the Prosthetic Health Monitoring System, combining hardware sensor arrays with Isolation Forest anomaly detection.",
    icon: Trophy,
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10",
    gradient: "from-emerald-400/20 via-transparent to-transparent"
  },
  {
    id: 4,
    category: "Coding & Problem Solving",
    title: "HackerRank Problem Solving Certified",
    desc: "Achieved verified proficiency in Data Structures and Algorithms with verified Problem Solving (Basic) credential by HackerRank.",
    icon: Code2,
    color: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/10",
    gradient: "from-amber-400/20 via-transparent to-transparent"
  },
  {
    id: 5,
    category: "Professional Development",
    title: "HP Foundation Data Science Certified",
    desc: "Earned Data Science and Analytics certification from HP Life / HP Foundations, demonstrating core data engineering and visualization mastery.",
    icon: Medal,
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/10",
    gradient: "from-cyan-400/20 via-transparent to-transparent"
  },
  {
    id: 6,
    category: "Hardware & Robotics",
    title: "IoT & Real-time Telemetry Systems",
    desc: "Designed and programmed multi-microcontroller embedded systems with ESP8266, STM32, and Arduino for live data acquisition and automation.",
    icon: Lightbulb,
    color: "text-rose-400",
    border: "border-rose-400/30",
    bg: "bg-rose-400/10",
    gradient: "from-rose-400/20 via-transparent to-transparent"
  },
];

export default function Achievements() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center mb-16 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
            Milestones & Honors
          </span>
        </div>
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Achievements
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <GlassCard className="p-6 h-full flex flex-col justify-between group relative overflow-hidden hover:border-white/20 transition-all">
                {/* Gradient Glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${item.gradient} rounded-full blur-[50px] pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06] relative z-10">
                    <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className={`p-2 rounded-xl ${item.bg} border ${item.border} ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-lg font-display font-bold text-white mb-2 tracking-tight relative z-10">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-mono text-[#38BDF8] flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#38BDF8]" /> Verified Milestone
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
