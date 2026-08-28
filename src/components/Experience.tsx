import { motion } from "motion/react";
import GlassCard from "./GlassCard";
import { Zap, Users, Code2, Lightbulb, Handshake, Wrench } from "lucide-react";

const experiences = [
  {
    type: "Hackathon",
    title: "IEEE InnovateX 2.0",
    organization: "IEEE Computer Society",
    description: "Developed Graph-Based Betting Relationship and Ecosystem Identifier as a solo project during this hackathon. Built a full-stack solution with NLP-powered fraud detection and D3.js network visualization.",
    icon: <Zap className="w-5 h-5" />,
    color: "text-[#38BDF8]",
    bgColor: "bg-[#38BDF8]/10",
    borderColor: "border-[#38BDF8]/20"
  },
  {
    type: "Academic Project",
    title: "Design Build Practical Course",
    organization: "Kalasalingam University",
    description: "Led a team to develop the AI Based Prosthetic Health Monitoring System as Team Lead and Technical Head. Designed the full architecture including FastAPI backend, MongoDB database, and AI anomaly detection pipeline.",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "text-[#8B5CF6]",
    bgColor: "bg-[#8B5CF6]/10",
    borderColor: "border-[#8B5CF6]/20"
  },
  {
    type: "Technical Community",
    title: "Open Source & GitHub",
    organization: "GitHub — Jegan-022",
    description: "Actively maintaining open-source projects on GitHub covering AI/ML, full-stack web development, and IoT applications. Contributing to collaborative development and version-controlled project workflows.",
    icon: <Code2 className="w-5 h-5" />,
    color: "text-[#06B6D4]",
    bgColor: "bg-[#06B6D4]/10",
    borderColor: "border-[#06B6D4]/20"
  },
  {
    type: "Skills Development",
    title: "Problem Solving & DSA",
    organization: "HackerRank & Self-Study",
    description: "Consistently practicing Data Structures & Algorithms and problem-solving on competitive programming platforms. Earned HackerRank Problem Solving Basic certification.",
    icon: <Wrench className="w-5 h-5" />,
    color: "text-white",
    bgColor: "bg-white/10",
    borderColor: "border-white/20"
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16 flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md mb-6">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
            Journey Log
          </span>
        </div>
        <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Experience</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-6 h-full flex flex-col">
              {/* Type badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${exp.bgColor} border ${exp.borderColor}`}>
                  <div className={exp.color}>{exp.icon}</div>
                  <span className={`text-xs font-mono uppercase tracking-widest ${exp.color}`}>{exp.type}</span>
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-display font-bold text-white mb-1 tracking-tight">{exp.title}</h4>
              <p className="text-white/50 text-sm font-mono mb-4">{exp.organization}</p>
              <p className="text-white/60 text-sm leading-relaxed flex-grow">{exp.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
