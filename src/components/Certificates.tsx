import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import GlassCard from "./GlassCard";
import { Award, ExternalLink, X, Search, Calendar } from "lucide-react";

const certificates = [
  {
    title: "Data Science and Analytics",
    category: "Data Science",
    issuer: "HP Life / HP Foundations",
    date: "October 2024",
    credentialLink: "https://drive.google.com/file/d/1Kwk8vRo8f1as3hWSoFpkSVe9HC99qtrE/view?usp=sharing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Problem Solving Basic",
    category: "Algorithms",
    issuer: "HackerRank",
    date: "February 2025",
    credentialLink: "https://drive.google.com/file/d/1w-5ZQd4Y127UqUJmlxP8Ja960ls5vXH2/view?usp=sharing",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certifications" className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16 flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md mb-6">
           <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
             Verified Credentials
           </span>
        </div>
        <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-12">Certifications</h3>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <AnimatePresence>
          {certificates.map((cert, index) => (
            <motion.div
              layout
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedCert(cert)}
            >
              <GlassCard className="p-4 group cursor-pointer h-full flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 border border-white/20 rounded-xl mix-blend-overlay pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/[0.1] backdrop-blur-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/20 group-hover:scale-110">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="px-2 pb-2 flex-grow flex flex-col justify-between">
                  <div>
                      <h4 className="text-lg font-display font-bold text-white mb-2 tracking-tight group-hover:text-[#38BDF8] transition-colors line-clamp-2">{cert.title}</h4>
                      <p className="text-white/50 text-sm">{cert.issuer}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.05] pt-4">
                     <div className="flex items-center gap-2 text-white/40 font-mono text-xs uppercase tracking-widest">
                       <Award className="w-4 h-4" /> Certified
                     </div>
                     <div className="flex items-center gap-1 text-white/40 font-mono text-xs">
                       <Calendar className="w-3 h-3" /> {cert.date}
                     </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <button className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-10">
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative">
                <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-display font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-white/70 mb-4">{selectedCert.issuer} • {selectedCert.date}</p>
                <a
                  href={selectedCert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all text-sm font-mono"
                >
                  <ExternalLink className="w-4 h-4" /> View Credential
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
