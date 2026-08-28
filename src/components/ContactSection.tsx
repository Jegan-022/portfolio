import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import GlassCard from "./GlassCard";
import { Send, CheckCircle2, XCircle, Mail, MapPin, Phone, Github, Linkedin, Sparkles, MessageSquare, ArrowUpRight } from "lucide-react";

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
          _subject: `Portfolio Inquiry from ${formState.name}`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setToast({ message: "Message sent! I'll get back to you shortly.", type: 'success' });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        window.location.href = `mailto:priyajegan1222@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}`;
        setToast({ message: "Opening your email client...", type: 'success' });
      }
    } catch (error) {
      window.location.href = `mailto:priyajegan1222@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}`;
      setToast({ message: "Opening your email client...", type: 'success' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
            Direct Line
          </span>
        </div>
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Get In Touch
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
        
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <GlassCard className="p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#38BDF8]/15 via-[#8B5CF6]/15 to-transparent rounded-full blur-[60px] pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">Available for Internships & Projects</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">Let's build together</h4>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-8">
                Feel free to reach out for machine learning research, software engineering opportunities, or collaborative hackathons.
              </p>
              
              {/* Contact Channels */}
              <div className="space-y-3 mb-8">
                <a 
                  href="mailto:priyajegan1222@gmail.com" 
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Email</p>
                      <p className="text-xs sm:text-sm text-white/90 font-mono">priyajegan1222@gmail.com</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                </a>
                
                <a 
                  href="tel:+916382104870" 
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/20 flex items-center justify-center text-[#a78bfa] group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Phone</p>
                      <p className="text-xs sm:text-sm text-white/90 font-mono">+91 6382104870</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                </a>
                
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Location</p>
                    <p className="text-xs sm:text-sm text-white/90 font-mono">Madurai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5 pt-4 border-t border-white/[0.06]">
              <a 
                href="https://github.com/Jegan-022" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 flex items-center justify-center gap-2 text-white/70 hover:text-white transition-all text-xs font-mono"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/jegatheeswaran-r-9a122633b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 flex items-center justify-center gap-2 text-white/70 hover:text-white transition-all text-xs font-mono"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <GlassCard className="p-6 sm:p-8 relative overflow-hidden">
            <h4 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#38BDF8]" />
              Send a Message
            </h4>
            <p className="text-white/50 text-xs sm:text-sm mb-6 font-light">
              Fill out the form below and I will respond to your inbox as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Name Input with Topline & Underline Animation */}
              <div className={`cyber-input-container ${formState.name ? 'is-active' : ''}`}>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="cyber-input-field"
                />
                <label htmlFor="contact-name" className="cyber-input-label">
                  Enter Your Name
                </label>
                <div className="topline" />
                <div className="underline" />
              </div>

              {/* Email Input with Topline & Underline Animation */}
              <div className={`cyber-input-container ${formState.email ? 'is-active' : ''}`}>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="cyber-input-field"
                />
                <label htmlFor="contact-email" className="cyber-input-label">
                  Enter Your Email
                </label>
                <div className="topline" />
                <div className="underline" />
              </div>

              {/* Message Textarea with Topline & Underline Animation */}
              <div className={`cyber-input-container ${formState.message ? 'is-active' : ''}`}>
                <textarea
                  name="message"
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className="cyber-input-field"
                />
                <label htmlFor="contact-message" className="cyber-input-label">
                  Enter Your Message
                </label>
                <div className="topline" />
                <div className="underline" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-4 mt-2 rounded-2xl bg-gradient-to-r from-[#38BDF8] via-[#a78bfa] to-[#38BDF8] text-black font-bold text-sm tracking-wider font-mono hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(56,189,248,0.3)] disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>Sent Successfully!</span>
                  </>
                ) : isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </GlassCard>
        </motion.div>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3.5 rounded-full border shadow-2xl backdrop-blur-2xl ${
              toast.type === 'success' 
                ? 'bg-black/90 border-emerald-500/50 text-emerald-400' 
                : 'bg-black/90 border-rose-500/50 text-rose-400'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <XCircle className="w-4 h-4" />
            )}
            <span className="font-mono text-xs">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
