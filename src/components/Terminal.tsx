import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, X, Maximize2, Minus } from 'lucide-react';
import Draggable from 'react-draggable';

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState<{ type: 'input' | 'output'; content: string }[]>([
    { type: 'output', content: 'Welcome to Manideep OS v2.0.0' },
    { type: 'output', content: 'Type "help" for a list of available commands.' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen, isMinimized]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input' as const, content: cmd }];

    switch (trimmedCmd) {
      case 'help':
        newHistory.push({ type: 'output', content: 'Available commands: help, about, skills, clear, whoami, sudo' });
        break;
      case 'about':
        newHistory.push({ type: 'output', content: 'Manideep - Creative Developer & UI/UX Designer crafting immersive digital experiences.' });
        break;
      case 'skills':
        newHistory.push({ type: 'output', content: 'React, Next.js, Three.js, GSAP, Tailwind CSS, TypeScript' });
        break;
      case 'whoami':
        newHistory.push({ type: 'output', content: 'guest_user' });
        break;
      case 'sudo':
        newHistory.push({ type: 'output', content: 'Nice try. This incident will be reported.' });
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        break;
      default:
        newHistory.push({ type: 'output', content: `Command not found: ${trimmedCmd}` });
    }
    
    setHistory(newHistory);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] group"
      >
        <TerminalIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            <Draggable handle=".handle" nodeRef={nodeRef}>
              <motion.div
                ref={nodeRef}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`absolute bottom-24 right-6 w-full max-w-lg pointer-events-auto bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col ${isMinimized ? 'h-12' : 'h-96'}`}
              >
                <div className="handle flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 cursor-grab active:cursor-grabbing">
                  <div className="flex items-center gap-2">
                    <TerminalIcon className="w-4 h-4 text-white/50" />
                    <span className="text-xs font-mono text-white/50">manideep@portfolio:~</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setIsMinimized(!isMinimized)} className="text-white/30 hover:text-white transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <button className="text-white/30 hover:text-white transition-colors">
                      <Maximize2 className="w-3 h-3" />
                    </button>
                    <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-red-400 transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {!isMinimized && (
                  <div className="flex-1 p-4 overflow-y-auto font-mono text-sm scrollbar-none flex flex-col gap-2">
                    {history.map((item, i) => (
                      <div key={i} className={item.type === 'input' ? 'text-white' : 'text-[#38BDF8]'}>
                        {item.type === 'input' && <span className="text-green-400 mr-2">➜</span>}
                        {item.content}
                      </div>
                    ))}
                    <div className="flex items-center text-white mt-2">
                      <span className="text-green-400 mr-2">➜</span>
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
                        autoFocus
                        spellCheck={false}
                      />
                    </div>
                    <div ref={endRef} />
                  </div>
                )}
              </motion.div>
            </Draggable>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
