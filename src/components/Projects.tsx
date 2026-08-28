import { motion, useScroll, useTransform } from "motion/react";
import GlassCard from "./GlassCard";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/ethereal-beams-hero";

export const projects = [
  {
    title: "AI Based Prosthetic Health Monitoring System",
    category: "AI/ML & IoT",
    desc: "An intelligent healthcare solution that continuously monitors prosthetic limb condition, performance, and safety using sensors and AI. Detects excessive pressure, abnormal temperature, uneven load distribution, and unusual movement to prevent complications.",
    color: "rgba(56, 189, 248, 0.2)",
    tags: ["FastAPI", "MongoDB", "Isolation Forest", "JWT", "ReportLab", "APScheduler"],
    role: "Team Lead & Technical Head",
    features: [
      "Real-time monitoring of prosthetic and residual-limb conditions using multiple sensors",
      "AI-based anomaly detection for pressure, temperature, movement, vibration, and load patterns",
      "Health and performance alerts for early problem identification"
    ],
    github: "https://github.com/Jegan-022/prothexai/deployments/Production%20%E2%80%93%20prothexai-n61w",
    demo: "https://prothexai-n61w-iigzl8c2g-jegan-022s-projects.vercel.app/",
    startDate: "2024-06-01",
    endDate: "Present"
  },
  {
    title: "Graph-Based Betting Relationship Identifier",
    category: "Data Analytics & NLP",
    desc: "A data-driven system that analyzes and visualizes relationships within online betting ecosystems using graph-based techniques. Uncovers hidden connections, clusters, and influential entities through network analysis and NLP-powered keyword detection.",
    color: "rgba(139, 92, 246, 0.2)",
    tags: ["Next.js 15", "React", "D3.js", "Tailwind CSS", "Framer Motion", "Recharts", "MongoDB"],
    role: "Solo Developer — IEEE InnovateX 2.0 Hackathon",
    features: [
      "Telegram monitoring with NLP-powered keyword detection and risk scoring",
      "Multi-factor fraud detection for transactions (UPI patterns, amounts, timing)",
      "D3.js force-directed network graph visualization",
      "Real-time dashboard with animated metrics"
    ],
    github: "https://github.com/Jegan-022/Graph-Based-betting-Relationship-identifier-jegan",
    demo: "https://graph-based-betting-relationship-id.vercel.app/",
    startDate: "2024-01-01",
    endDate: "2024-03-01"
  },
  {
    title: "XGBoost Notification Priority Router",
    category: "Machine Learning",
    desc: "An intelligent system that automatically classifies and prioritizes incoming messaging notifications using the XGBoost algorithm. Analyzes sender, message content, frequency, timing, and interaction patterns to reduce notification overload.",
    color: "rgba(6, 182, 212, 0.2)",
    tags: ["Python", "XGBoost", "scikit-learn", "Pandas", "TF-IDF", "Flask/FastAPI"],
    role: "Solo Developer",
    features: [
      "XGBoost-based notification priority classification",
      "Feature analysis of sender, message, timing, frequency, and interaction patterns",
      "Intelligent routing and prioritization to reduce notification overload"
    ],
    github: "https://github.com/Jegan-022/Multi-modal-chatbot-AI-system/tree/main/code",
    demo: null,
    startDate: "2024-04-01",
    endDate: "2024-06-01"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md mb-6">
             <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
               Selected Work
             </span>
          </div>
          <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Projects</h3>
        </div>
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity, willChange: "transform, opacity" }}
      className={`flex flex-col gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    >
      <div className="w-full lg:w-3/5">
        <GlassCard className="aspect-video w-full p-6 md:p-10 flex flex-col justify-between group cursor-pointer relative overflow-visible">
          {/* Animated Light Sweep */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
          
          {/* Role Badge */}
          <div className="relative z-10 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-[#38BDF8]">{project.role}</span>
          </div>

          {/* Features list */}
          <div className="relative z-10 flex-1">
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 text-white/60 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#38BDF8]/40 via-[#8B5CF6]/40 to-[#06B6D4]/40 rounded-b-[2.5rem]" />
        </GlassCard>
      </div>
      
      <div className="w-full lg:w-2/5 lg:px-8">
        <div className="text-white/60 text-xs font-mono mb-4 uppercase tracking-[0.2em]">{project.category}</div>
        <h4 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white tracking-tight drop-shadow-md">{project.title}</h4>
        <p className="text-white/50 text-lg font-light mb-8 leading-relaxed">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md text-xs text-white/70 font-mono shadow-inner">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button>
              <Github className="mr-2 w-4 h-4" /> GitHub
            </Button>
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost">
                <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
