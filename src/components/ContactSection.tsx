import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import GlassCard from "./GlassCard";
import { Button } from "./ui/ethereal-beams-hero";
import { Send, CheckCircle2, XCircle, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setToast({ message: "Please fill out all fields.", type: 'error' });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setToast({ message: "Please provide a valid email address.", type: 'error' });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setToast(null);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/priyajegan1222@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Portfolio Contact from ${formState.name}`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setToast({ message: "Message sent successfully!", type: 'success' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        // Fallback to mailto
        window.location.href = `mailto:priyajegan1222@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${formState.message}`;
        setToast({ message: "Opening email client as fallback.", type: 'success' });
      }
    } catch (error) {
      // Fallback to mailto
      window.location.href = `mailto:priyajegan1222@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${formState.message}`;
      setToast({ message: "Opening email client as fallback.", type: 'success' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-20 flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md mb-6">
           <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
             Get In Touch
           </span>
        </div>
        <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Contact</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        
        {/* Contact Info Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <GlassCard className="p-8 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-[100px] pointer-events-none" />
            
            <h4 className="text-2xl font-display font-bold text-white mb-2 relative z-10">Let's Connect</h4>
            <p className="text-white/50 text-sm mb-8 relative z-10">I'm open to internships, collaborations, and interesting AI/ML projects.</p>
            
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.1] backdrop-blur-md rounded-full px-4 py-2 w-max shadow-inner mb-8 relative z-10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400/90 font-mono text-xs uppercase tracking-widest">Open to Opportunities</span>
            </div>

            {/* Contact details */}
            <div className="space-y-4 relative z-10">
              <a href="mailto:priyajegan1222@gmail.com" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Email</p>
                  <p className="text-white/80 text-sm">priyajegan1222@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+916382104870" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Phone</p>
                  <p className="text-white/80 text-sm">+91 6382104870</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-3 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#06B6D4]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Location</p>
                  <p className="text-white/80 text-sm">Madurai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6 relative z-10">
              <a href="https://github.com/Jegan-022" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/jegatheeswaran-r-9a122633b/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="p-8 md:p-10 relative overflow-visible">
            {/* Animated border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 via-transparent to-transparent rounded-[2.5rem] pointer-events-none -z-10" />
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-white/[0.02] border border-white/[0.1] rounded-xl px-4 py-4 text-white focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.3] transition-all duration-300 peer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md"
                />
                <label 
                  htmlFor="contact-name" 
                  className={`absolute left-4 transition-all duration-300 font-mono uppercase tracking-widest pointer-events-none ${(focused === 'name' || formState.name) ? 'top-[-8px] text-[10px] text-[#38BDF8] bg-[#020202] px-2 rounded-full' : 'top-4 text-xs text-white/50'}`}
                >
                  Name
                </label>
                <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] transition-opacity duration-500 pointer-events-none ${focused === 'name' ? 'opacity-30' : 'opacity-0'} -z-10`} />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-white/[0.02] border border-white/[0.1] rounded-xl px-4 py-4 text-white focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.3] transition-all duration-300 peer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md"
                />
                <label 
                  htmlFor="contact-email" 
                  className={`absolute left-4 transition-all duration-300 font-mono uppercase tracking-widest pointer-events-none ${(focused === 'email' || formState.email) ? 'top-[-8px] text-[10px] text-[#38BDF8] bg-[#020202] px-2 rounded-full' : 'top-4 text-xs text-white/50'}`}
                >
                  Email
                </label>
                <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] transition-opacity duration-500 pointer-events-none ${focused === 'email' ? 'opacity-30' : 'opacity-0'} -z-10`} />
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-white/[0.02] border border-white/[0.1] rounded-xl px-4 py-4 text-white focus:outline-none focus:bg-white/[0.05] focus:border-white/[0.3] transition-all duration-300 peer resize-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md"
                />
                <label 
                  htmlFor="contact-message" 
                  className={`absolute left-4 transition-all duration-300 font-mono uppercase tracking-widest pointer-events-none ${(focused === 'message' || formState.message) ? 'top-[-8px] text-[10px] text-[#38BDF8] bg-[#020202] px-2 rounded-full' : 'top-4 text-xs text-white/50'}`}
                >
                  Message
                </label>
                <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] transition-opacity duration-500 pointer-events-none ${focused === 'message' ? 'opacity-30' : 'opacity-0'} -z-10`} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-4 rounded-xl bg-white/[0.08] border border-white/[0.2] text-white font-medium hover:bg-white/[0.15] hover:border-white/[0.3] transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none" />
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400">Sent Successfully!</span>
                  </>
                ) : isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </GlassCard>
        </motion.div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-full border shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl ${
              toast.type === 'success' 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <XCircle className="w-5 h-5" />
            )}
            <span className="font-mono text-sm">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
