import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import GlassCard from "./GlassCard";
import { Code2, Database, Layout, Cloud, Brain, Cpu, Wrench, Boxes, Sparkles, CheckCircle } from "lucide-react";

const skillCategories = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: Brain,
    color: "text-[#38BDF8]",
    border: "border-[#38BDF8]/30",
    bg: "bg-[#38BDF8]/10",
    skills: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "Predictive Analytics", "Computer Vision", "CNN", "TensorFlow Lite", "Prompt Engineering", "CRISP-DM", "KDD", "Data Mining"]
  },
  {
    id: "languages",
    name: "Programming Languages",
    icon: Code2,
    color: "text-[#a78bfa]",
    border: "border-[#a78bfa]/30",
    bg: "bg-[#a78bfa]/10",
    skills: ["Python", "C", "Java", "R", "SQL", "JavaScript"]
  },
  {
    id: "frameworks",
    name: "Frameworks & ML Libraries",
    icon: Boxes,
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Keras", "OpenCV", "BERT", "Hugging Face", "NumPy", "Pandas", "Matplotlib", "librosa", "FastAPI", "Flask", "Django"]
  },
  {
    id: "web",
    name: "Web Development",
    icon: Layout,
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/10",
    skills: ["React.js", "Next.js", "HTML5", "CSS3 / Vanilla CSS", "Tailwind CSS", "RESTful APIs", "FastAPI (Async)"]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    icon: Database,
    color: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/10",
    skills: ["MongoDB Atlas", "SQL", "PostgreSQL", "Supabase", "Motor Driver"]
  },
  {
    id: "iot",
    name: "IoT & Hardware Automation",
    icon: Cpu,
    color: "text-rose-400",
    border: "border-rose-400/30",
    bg: "bg-rose-400/10",
    skills: ["Arduino UNO", "Raspberry Pi", "ESP8266", "STM32", "LoRa", "PCB Robotics", "Real-time Data Acquisition", "Data Logging", "Audio Signal Processing", "MFCC"]
  },
  {
    id: "tools",
    name: "DevOps & Cloud Tools",
    icon: Cloud,
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/10",
    skills: ["Git & GitHub", "Vercel", "Netlify", "Heroku", "Data Visualization", "JWT Auth", "ReportLab", "APScheduler"]
  },
  {
    id: "dsa",
    name: "Problem Solving & Core CS",
    icon: Wrench,
    color: "text-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/10",
    skills: ["Data Structures & Algorithms", "Problem Solving", "Time-Series Processing", "System Design Basics", "Hackathon Rapid Prototyping"]
  },
];

export default function Skills() {
  const [filter, setFilter] = useState("all");

  const displayedCategories = filter === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === filter);

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
            Core Competencies
          </span>
        </div>
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-8">
          Technical Skills
        </h3>

        {/* Quick Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
              filter === "all"
                ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/10"
            }`}
          >
            All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          
          {[
            { id: "ai-ml", label: "AI & ML" },
            { id: "languages", label: "Languages" },
            { id: "frameworks", label: "Frameworks" },
            { id: "web", label: "Web Dev" },
            { id: "iot", label: "IoT & Hardware" },
            { id: "databases", label: "Databases" },
            { id: "tools", label: "Cloud & Tools" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === tab.id
                  ? "bg-[#38BDF8] text-black font-bold shadow-[0_0_15px_#38BDF8]"
                  : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Skill Categories Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {displayedCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                layout
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <GlassCard className="p-6 h-full flex flex-col justify-between group hover:border-white/20 transition-colors">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl ${category.bg} border ${category.border} flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-tight">
                          {category.name}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-white/40 px-2 py-0.5 rounded-md bg-white/[0.03]">
                        {category.skills.length} skills
                      </span>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/80 text-xs font-mono hover:bg-white/[0.1] hover:text-white hover:border-white/30 transition-all cursor-default shadow-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
