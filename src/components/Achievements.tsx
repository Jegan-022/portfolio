import { motion } from "motion/react";
import GlassCard from "./GlassCard";
import { Trophy, Code2, Sparkles, GraduationCap, Medal, Image as ImageIcon } from "lucide-react";

const achievements = [
  {
    id: 1,
    category: "Hackathons",
    icon: <Code2 className="w-5 h-5" />,
    color: "text-[#38BDF8]",
    borderColor: "border-[#38BDF8]/30",
    placeholder: "Add your hackathon achievement image here"
  },
  {
    id: 2,
    category: "Coding Competitions",
    icon: <Trophy className="w-5 h-5" />,
    color: "text-[#8B5CF6]",
    borderColor: "border-[#8B5CF6]/30",
    placeholder: "Add your coding competition achievement image here"
  },
  {
    id: 3,
    category: "Academic Achievements",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "text-[#06B6D4]",
    borderColor: "border-[#06B6D4]/30",
    placeholder: "Add your academic achievement image here"
  },
  {
    id: 4,
    category: "Awards & Recognition",
    icon: <Medal className="w-5 h-5" />,
    color: "text-white",
    borderColor: "border-white/30",
    placeholder: "Add your award image here"
  },
  {
    id: 5,
    category: "Technical Events",
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-[#38BDF8]",
    borderColor: "border-[#38BDF8]/30",
    placeholder: "Add your technical event image here"
  },
  {
    id: 6,
    category: "Leadership & Community",
    icon: <Trophy className="w-5 h-5" />,
    color: "text-[#8B5CF6]",
    borderColor: "border-[#8B5CF6]/30",
    placeholder: "Add your leadership achievement image here"
  },
];

export default function Achievements() {
  return (
    <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16 flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md mb-6">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
            Milestones
          </span>
        </div>
        <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Achievements</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-4 group h-full flex flex-col">
              {/* Image placeholder area */}
              <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 border ${achievement.borderColor} bg-white/[0.02] flex flex-col items-center justify-center gap-3`}>
                <div className={`w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center ${achievement.color}`}>
                  <ImageIcon className="w-6 h-6" />
                </div>
                <p className="text-white/30 text-xs font-mono text-center px-4">{achievement.placeholder}</p>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Category label */}
              <div className="px-2 pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className={achievement.color}>{achievement.icon}</div>
                  <h4 className="text-base font-display font-bold text-white tracking-tight">{achievement.category}</h4>
                </div>
                <p className="text-white/40 text-xs font-mono">Click to add details</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
