import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Share2 } from 'lucide-react';
import GlassCard from './GlassCard';

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-resume', handleOpen);
    return () => window.removeEventListener('open-resume', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl h-[85vh] flex flex-col"
        >
          <GlassCard className="flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <h3 className="text-xl font-display font-bold text-white tracking-tight">Resume</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" title="Download">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" title="Print">
                  <Printer className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" title="Share">
                  <Share2 className="w-4 h-4" />
                </button>
                <div className="w-px h-6 bg-white/20 mx-2" />
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-auto p-8 bg-gradient-to-br from-white/[0.02] to-transparent">
              {/* Simulated Resume Document */}
              <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 shadow-2xl min-h-full">
                <div className="border-b border-white/20 pb-8 mb-8 text-center">
                  <h1 className="text-4xl font-display font-bold text-white mb-2 tracking-tight">MANIDEEP</h1>
                  <p className="text-[#38BDF8] font-mono text-sm tracking-widest uppercase">Creative Developer & Engineer</p>
                </div>
                
                <div className="space-y-8">
                  <section>
                    <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Experience</h2>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="text-lg font-semibold text-white/90">Senior Creative Developer</h3>
                          <span className="text-white/50 font-mono text-xs">2023 - Present</span>
                        </div>
                        <p className="text-[#8B5CF6] text-sm mb-2">Digital Universe Agency</p>
                        <p className="text-white/60 text-sm leading-relaxed">
                          Spearheaded the development of high-performance interactive web experiences. 
                          Integrated WebGL and React Three Fiber to increase user engagement by 45%.
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="text-lg font-semibold text-white/90">Frontend Engineer</h3>
                          <span className="text-white/50 font-mono text-xs">2021 - 2023</span>
                        </div>
                        <p className="text-[#38BDF8] text-sm mb-2">Tech Solutions Inc.</p>
                        <p className="text-white/60 text-sm leading-relaxed">
                          Developed responsive and accessible user interfaces for enterprise clients.
                          Architected robust state management solutions using Redux and React Context.
                        </p>
                      </div>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Three.js", "Framer Motion", "Tailwind CSS", "Node.js", "GraphQL"].map(skill => (
                        <span key={skill} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Education</h2>
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-lg font-semibold text-white/90">B.S. Computer Science</h3>
                        <span className="text-white/50 font-mono text-xs">2017 - 2021</span>
                      </div>
                      <p className="text-white/60 text-sm">University of Technology</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
