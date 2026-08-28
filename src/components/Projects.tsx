import { motion, useScroll, useTransform } from "motion/react";
import GlassCard from "./GlassCard";
import { ArrowUpRight, ExternalLink, Github, Sparkles, CheckCircle2, ShieldAlert, Cpu, Network } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/ethereal-beams-hero";

export const projects = [
  {
    title: "AI Based Prosthetic Health Monitoring System",
    category: "AI / Healthcare IoT",
    tagline: "Intelligent real-time anomaly detection for prosthetic limbs",
    desc: "An intelligent healthcare solution designed to continuously monitor the condition, performance, and safety of a prosthetic limb and the surrounding residual limb using sensor arrays and ML anomaly detection.",
    problemSolved: "Traditional prosthetic limbs lack continuous health monitoring, leading to undetected pressure ulcers, abnormal temperatures, or device failures. This project uses Isolation Forests and real-time telemetry to flag potential issues early.",
    role: "Team Lead & Technical Head (Design Build Practical Course)",
    gradient: "from-[#38BDF8]/20 via-[#06B6D4]/10 to-transparent",
    accentColor: "#38BDF8",
    tags: ["FastAPI", "MongoDB Atlas", "Isolation Forest", "JWT Auth", "ReportLab", "APScheduler", "Sensors"],
    features: [
      "Real-time sensor telemetry for pressure, temperature, vibration, and load distribution",
      "Isolation Forest anomaly detection algorithm for early warning predictions",
      "Automated PDF medical reporting with ReportLab & weekly scheduling via APScheduler",
      "Secure JWT authentication with bcrypt password hashing"
    ],
    github: "https://github.com/Jegan-022/prothexai/deployments/Production%20%E2%80%93%20prothexai-n61w",
    demo: "https://prothexai-n61w-iigzl8c2g-jegan-022s-projects.vercel.app/",
  },
  {
    title: "Graph-Based Betting Relationship & Ecosystem Identifier",
    category: "Data Science & NLP",
    tagline: "D3.js interactive network analysis for fraud detection",
    desc: "A data-driven platform built for IEEE Computer Society's InnovateX 2.0 hackathon to map and visualize complex online betting networks, entity relationships, and transaction patterns using graph algorithms and NLP.",
    problemSolved: "Disjointed betting networks conceal fraudulent money laundering and telegram syndicate interactions. This project reveals hidden cluster hubs, multi-factor UPI fraud scores, and provides real-time interactive D3 network exploration.",
    role: "Solo Developer — IEEE InnovateX 2.0 Hackathon",
    gradient: "from-[#8B5CF6]/20 via-[#a78bfa]/10 to-transparent",
    accentColor: "#a78bfa",
    tags: ["Next.js 15 (App Router)", "React", "D3.js", "Tailwind CSS", "Framer Motion", "Recharts", "NLP"],
    features: [
      "NLP-powered Telegram chat intelligence with automated keyword risk scoring",
      "Multi-factor fraud detection engine analyzing transaction timings & UPI patterns",
      "Interactive force-directed D3.js ecosystem graph with entity clustering",
      "Exportable forensic audit reports (CSV generation & admin trigger panel)"
    ],
    github: "https://github.com/Jegan-022/Graph-Based-betting-Relationship-identifier-jegan",
    demo: "https://graph-based-betting-relationship-id.vercel.app/",
  },
  {
    title: "XGBoost Notification Priority Router",
    category: "Machine Learning & NLP",
    tagline: "Predictive urgency classification for messaging notifications",
    desc: "An intelligent classification pipeline that predicts and routes incoming notifications based on contextual message features, sender frequency, urgency scores, and historical interaction patterns.",
    problemSolved: "Users suffer severe notification fatigue from constant messaging app pings. Conventional apps treat all alerts identically, causing urgent messages to be missed. This XGBoost classifier ranks and triages incoming alerts in milliseconds.",
    role: "Core ML Developer",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "#34d399",
    tags: ["Python", "XGBoost", "scikit-learn", "Pandas", "TF-IDF / NLP", "FastAPI / Flask", "SQLite"],
    features: [
      "XGBoost gradient-boosted decision tree algorithm for multi-class priority routing",
      "Feature engineering on sender habits, message semantics, frequency, and time-of-day",
      "TF-IDF text preprocessing for intent classification and urgent keyword extraction",
      "Fast asynchronous API inference with low-latency routing endpoints"
    ],
    github: "https://github.com/Jegan-022/Multi-modal-chatbot-AI-system/tree/main/code",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
              Featured Work
            </span>
          </div>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Featured Projects
          </h3>
        </div>
        <p className="text-white/50 text-sm font-mono max-w-md">
          Production-tested systems spanning AI/ML algorithms, data pipelines, hardware telemetry, and interactive web UIs.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-24 sm:gap-32">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className={`flex flex-col gap-10 lg:gap-14 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    >
      {/* Visual Showcase Card */}
      <div className="w-full lg:w-7/12">
        <GlassCard className="w-full p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden">
          
          {/* Accent Gradient Glow */}
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.gradient} rounded-full blur-[80px] pointer-events-none`} />

          {/* Top Bar with Category & Role */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#38BDF8]">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-white/70 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-full">
              {project.role}
            </span>
          </div>

          {/* Project Title & Tagline in Card */}
          <div className="relative z-10 mb-6">
            <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2 tracking-tight">
              {project.title}
            </h4>
            <p className="text-sm font-mono text-white/60">
              {project.tagline}
            </p>
          </div>

          {/* Key Features Bullet Points */}
          <div className="relative z-10 space-y-2.5 mb-6">
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Key Highlights</p>
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Problem Solved Callout */}
          <div className="relative z-10 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
            <p className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider mb-1 font-semibold">Problem Solved</p>
            <p className="text-xs text-white/70 leading-relaxed">{project.problemSolved}</p>
          </div>

          {/* Bottom Accent Bar */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />
        </GlassCard>
      </div>
      
      {/* Project Details / Actions */}
      <div className="w-full lg:w-5/12 lg:px-4">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-2">
          Project 0{index + 1}
        </div>
        
        <h4 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 tracking-tight">
          {project.title}
        </h4>
        
        <p className="text-white/60 text-sm sm:text-base font-light mb-6 leading-relaxed">
          {project.desc}
        </p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string) => (
            <span 
              key={tag} 
              className="px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md text-xs text-white/80 font-mono shadow-sm hover:border-[#38BDF8]/40 hover:text-white transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex">
            <Button className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </Button>
          </a>
          
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button variant="outline" className="flex items-center gap-2 hover:border-[#38BDF8]/50">
                <ExternalLink className="w-4 h-4 text-[#38BDF8]" />
                <span>Live Demo</span>
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
