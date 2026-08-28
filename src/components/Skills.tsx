import { motion } from "motion/react";
import GlassCard from "./GlassCard";
import { Code2, Database, Layout, Cloud, Brain, Cpu, Wrench, Boxes } from "lucide-react";

const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Code2 />,
    color: "text-[#38BDF8]",
    borderColor: "border-[#38BDF8]/20",
    skills: ["Python", "C", "Java", "R", "SQL"]
  },
  {
    name: "Web Development",
    icon: <Layout />,
    color: "text-[#8B5CF6]",
    borderColor: "border-[#8B5CF6]/20",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "FastAPI"]
  },
  {
    name: "Frameworks & Libraries",
    icon: <Boxes />,
    color: "text-[#06B6D4]",
    borderColor: "border-[#06B6D4]/20",
    skills: ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "Keras", "OpenCV", "BERT", "Hugging Face", "librosa", "Flask", "Django"]
  },
  {
    name: "Databases",
    icon: <Database />,
    color: "text-white",
    borderColor: "border-white/20",
    skills: ["MongoDB", "SQL", "Supabase"]
  },
  {
    name: "Tools & Technologies",
    icon: <Wrench />,
    color: "text-[#38BDF8]",
    borderColor: "border-[#38BDF8]/20",
    skills: ["GitHub", "Arduino UNO", "Raspberry Pi", "ESP8266", "STM32", "LoRa", "PCB Design", "Data Logging", "Data Visualization"]
  },
  {
    name: "Cloud / DevOps",
    icon: <Cloud />,
    color: "text-[#8B5CF6]",
    borderColor: "border-[#8B5CF6]/20",
    skills: ["Netlify", "Vercel", "Heroku"]
  },
  {
    name: "AI / Machine Learning",
    icon: <Brain />,
    color: "text-[#06B6D4]",
    borderColor: "border-[#06B6D4]/20",
    skills: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "Data Analytics", "Predictive Analytics", "Computer Vision", "CNN", "TensorFlow Lite", "Prompt Engineering", "CRISP-DM"]
  },
  {
    name: "Other Skills",
    icon: <Cpu />,
    color: "text-white",
    borderColor: "border-white/20",
    skills: ["DSA", "Problem Solving", "Real-time Data Processing", "Audio Signal Processing", "MFCC", "IoT", "Embedded Systems", "Automation"]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24 flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md mb-6">
           <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
             Core Competencies
           </span>
        </div>
        <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Technical Skills</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-white/[0.05] border ${category.borderColor} flex items-center justify-center ${category.color}`}>
                  {category.icon}
                </div>
                <h4 className="text-lg font-display font-bold text-white tracking-tight">{category.name}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.1] text-white/70 text-xs font-mono hover:bg-white/[0.08] hover:text-white hover:border-white/[0.25] transition-all cursor-default shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
