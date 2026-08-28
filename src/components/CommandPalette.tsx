import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Command, User, Briefcase, FileText, Mail, Github, Linkedin, Monitor, Moon, Volume2, VolumeX, X, Sparkles } from 'lucide-react';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (e.key === '/' && document.activeElement?.tagName === 'INPUT') return;
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setSelectedIndex(0);
    }
  }, [isOpen, query]);

  const commands = [
    { id: 'home', label: 'Go to Home', icon: Monitor, action: () => window.location.hash = '#home' },
    { id: 'about', label: 'Go to About', icon: User, action: () => window.location.hash = '#about' },
    { id: 'projects', label: 'Go to Projects', icon: Briefcase, action: () => window.location.hash = '#projects' },
    { id: 'contact', label: 'Go to Contact', icon: Mail, action: () => window.location.hash = '#contact' },
    { id: 'github', label: 'Open GitHub', icon: Github, action: () => window.open('https://github.com', '_blank') },
    { id: 'linkedin', label: 'Open LinkedIn', icon: Linkedin, action: () => window.open('https://linkedin.com', '_blank') },
    { id: 'resume', label: 'View Resume', icon: FileText, action: () => window.dispatchEvent(new Event('open-resume')) },
    { id: 'ai', label: 'Ask AI Assistant', icon: Sparkles, action: () => alert('AI Assistant opens (Use floating button)') },
    { id: 'theme', label: 'Toggle Theme', icon: Moon, action: () => alert('Theme switched') },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (action: () => void) => {
    action();
    setIsOpen(false);
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        handleSelect(filteredCommands[selectedIndex].action);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-4 border-b border-white/10">
              <Search className="w-5 h-5 text-white/50 mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/30 text-lg font-sans"
              />
              <div className="flex items-center gap-2 text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded">
                <Command className="w-3 h-3" /> K
              </div>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-none">
              {filteredCommands.length > 0 ? (
                <div className="space-y-1">
                  {filteredCommands.map((cmd, index) => (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelect(cmd.action)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center px-3 py-3 rounded-xl transition-colors group text-left ${
                        index === selectedIndex ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <cmd.icon className={`w-5 h-5 mr-3 transition-colors ${index === selectedIndex ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`} />
                      <span className="font-medium">{cmd.label}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-white/40">
                  No commands found for "{query}"
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
