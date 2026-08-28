import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

const SUGGESTED_PROMPTS = [
  "Who is Manideep?",
  "Show Web Projects",
  "Contact Manideep",
  "Explain this project"
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([
    { role: 'ai', content: "Hi! I am Manideep's AI assistant. Ask me anything about his work, experience, or projects." }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;
    
    const userMsg = text.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    
    // Simulate AI typing delay
    setTimeout(() => {
      let aiResponse = "I'm a simple mock assistant right now! To truly answer that, we'd connect to the Gemini API.";
      
      const lowerQ = userMsg.toLowerCase();
      if (lowerQ.includes('react') || lowerQ.includes('next.js') || lowerQ.includes('frontend') || lowerQ.includes('web')) {
        aiResponse = "Manideep is an expert in React, Next.js, and modern front-end ecosystems. He focuses on performance, animations, and premium glassmorphic UI.";
      } else if (lowerQ.includes('experience') || lowerQ.includes('work') || lowerQ.includes('who is')) {
        aiResponse = "He has over 5 years of experience building immersive web applications and interactive 3D experiences. He is a creative developer crafting next-generation digital products.";
      } else if (lowerQ.includes('contact')) {
        aiResponse = "You can contact Manideep via the Contact section at the bottom of the page, or email him directly. Want me to scroll you there?";
      } else if (lowerQ.includes('explain')) {
        aiResponse = "This project is a cinematic, interactive portfolio featuring advanced Glassmorphism, React Three Fiber for 3D elements, GSAP/Framer Motion for animations, and a high-performance rendering pipeline.";
      } else if (lowerQ.includes('hello') || lowerQ.includes('hi')) {
        aiResponse = "Hello there! How can I help you explore this portfolio today?";
      }

      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#8B5CF6] flex items-center justify-center text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] group hover:scale-110 transition-transform duration-300"
      >
        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 pointer-events-none flex items-end justify-end p-6">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-sm h-[500px] pointer-events-auto bg-[#050505]/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none mix-blend-overlay" />
              
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#8B5CF6] p-[1px]">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">AI Assistant</div>
                    <div className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Online
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none relative z-10 flex flex-col">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'ai' 
                        ? 'bg-white/5 border border-white/10 text-white/90 rounded-tl-sm' 
                        : 'bg-gradient-to-tr from-[#38BDF8]/20 to-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-white rounded-tr-sm'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                
                {messages.length === 1 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {SUGGESTED_PROMPTS.map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(prompt)}
                        className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 px-3 py-1.5 rounded-full transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
                <div ref={endRef} />
              </div>

              <div className="p-3 border-t border-white/10 bg-white/[0.02] relative z-10">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about Manideep..."
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-2.5 text-sm text-white focus:outline-none focus:border-[#38BDF8]/50 transition-colors placeholder:text-white/30"
                  />
                  <button 
                    onClick={() => handleSend(input)}
                    disabled={!input.trim()}
                    className="absolute right-2 p-1.5 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-[#38BDF8]/20 transition-colors disabled:opacity-50 disabled:hover:bg-white/10"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
