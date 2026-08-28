import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import GlassCard from "./GlassCard";
import { Award, ExternalLink, X, Search, Calendar, Sparkles, CheckCircle2 } from "lucide-react";

const certificates = [
  {
    title: "Data Science and Analytics",
    category: "Data Science & Analytics",
    issuer: "HP Life / HP Foundations",
    date: "13/10/2024",
    credentialLink: "https://drive.google.com/file/d/1Kwk8vRo8f1as3hWSoFpkSVe9HC99qtrE/view?usp=sharing",
    skills: ["Data Analysis", "Predictive Modeling", "Visualization", "Business Intelligence"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Problem Solving (Basic)",
    category: "Data Structures & Algorithms",
    issuer: "HackerRank",
    date: "08/02/2025",
    credentialLink: "https://drive.google.com/file/d/1w-5ZQd4Y127UqUJmlxP8Ja960ls5vXH2/view?usp=sharing",
    skills: ["Algorithms", "Data Structures", "Time Complexity", "Logic & Reasoning"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certifications" className="py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center mb-16 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
            Verified Credentials
          </span>
        </div>
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Certifications
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedCert(cert)}
          >
            <GlassCard className="p-5 group cursor-pointer h-full flex flex-col justify-between hover:border-white/20 transition-all">
              <div>
                {/* Image / Thumbnail Container */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 border border-white/10 bg-black/40">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                  
                  {/* Floating Action Button */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-xl flex items-center justify-center text-white/80 group-hover:text-white border border-white/20 group-hover:scale-110 transition-all shadow-lg">
                    <Search className="w-4 h-4" />
                  </div>

                  {/* Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[11px] font-mono text-[#38BDF8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Credential</span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1 block">
                    {cert.category}
                  </span>
                  <h4 className="text-lg sm:text-xl font-display font-bold text-white mb-1.5 tracking-tight group-hover:text-[#38BDF8] transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-white/70 text-xs sm:text-sm font-mono mb-4">{cert.issuer}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/60">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between px-1 text-xs font-mono text-white/50">
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Official Certificate</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-2xl"
            onClick={() => setSelectedCert(null)}
          >
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10">
                <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-mono">
                    {selectedCert.issuer}
                  </span>
                  <span className="text-white/60 text-xs font-mono">{selectedCert.date}</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-white/60 text-sm font-mono mb-4">{selectedCert.category}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCert.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-white/80">
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedCert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] text-black font-bold font-mono text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-[0_0_30px_rgba(56,189,248,0.4)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify Credential on Google Drive</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
