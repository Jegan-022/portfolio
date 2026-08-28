import { motion } from "motion/react";
import GlassCard from "./GlassCard";
import { Zap, Code2, Lightbulb, Wrench, Sparkles, Calendar, Award } from "lucide-react";

const experiences = [
  {
    type: "Hackathon & Competition",
    title: "IEEE InnovateX 2.0 Hackathon",
    role: "Solo Full-Stack AI Developer",
    organization: "IEEE Computer Society",
    date: "2024",
    description: "Architected and built the Graph-Based Betting Relationship and Ecosystem Identifier. Implemented Telegram monitoring with NLP keyword risk scoring, D3.js force-directed interactive graphs, and multi-factor transaction fraud detection algorithms.",
    skills: ["Next.js 15", "D3.js", "NLP", "Fraud Analytics", "Framer Motion"],
    icon: Zap,
    color: "text-[#38BDF8]",
    bgColor: "bg-[#38BDF8]/10",
    borderColor: "border-[#38BDF8]/30"
  },
  {
    type: "Academic Leadership",
    title: "Design Build Practical Course",
    role: "Team Lead & Technical Head",
    organization: "Kalasalingam Academy of Research and Education",
    date: "2024 - 2025",
    description: "Led a student engineering squad to design and deploy the AI Based Prosthetic Health Monitoring System. Spearheaded the FastAPI asynchronous backend, sensor telemetry pipeline, and Isolation Forest ML anomaly model for early skin & device damage alerts.",
    skills: ["Team Leadership", "FastAPI", "Isolation Forest", "MongoDB", "Sensors"],
    icon: Lightbulb,
    color: "text-[#a78bfa]",
    bgColor: "bg-[#a78bfa]/10",
    borderColor: "border-[#a78bfa]/30"
  },
  {
    type: "Open Source & Development",
    title: "Open-Source AI & IoT Repositories",
    role: "Maintainer & Contributor",
    organization: "GitHub — @Jegan-022",
    date: "Ongoing",
    description: "Created and actively maintain multiple repositories spanning real-time data acquisition, chatbot architectures, XGBoost notification prioritization, and IoT automation hardware scripts with ESP8266 and STM32.",
    skills: ["Python", "Git / GitHub", "IoT", "Scikit-Learn", "CI/CD"],
    icon: Code2,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/30"
  },
  {
    type: "Continuous Learning & DSA",
    title: "Algorithmic Problem Solving",
    role: "Competitive Programmer",
    organization: "HackerRank & LeetCode",
    date: "Ongoing",
    description: "Demonstrated strong grasp of Data Structures and Algorithms including Trees, Graphs, Dynamic Programming, and Search/Sort optimizations. Certified in Problem Solving (Basic) by HackerRank with top accuracy.",
    skills: ["Data Structures", "Algorithms", "C++ / Python", "Optimization"],
    icon: Wrench,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/30"
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center mb-16 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
            Journey & Leadership
          </span>
        </div>
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Experience & Activities
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="p-6 sm:p-7 h-full flex flex-col justify-between group hover:border-white/20 transition-all">
                <div>
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${exp.bgColor} border ${exp.borderColor}`}>
                      <Icon className={`w-3.5 h-3.5 ${exp.color}`} />
                      <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${exp.color}`}>
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-mono text-white/50">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  {/* Title & Role */}
                  <h4 className="text-lg sm:text-xl font-display font-bold text-white mb-1 tracking-tight">
                    {exp.title}
                  </h4>
                  <p className="text-xs font-mono text-[#38BDF8] mb-1 font-medium">{exp.role}</p>
                  <p className="text-xs font-mono text-white/40 mb-4">{exp.organization}</p>
                  
                  {/* Description */}
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
