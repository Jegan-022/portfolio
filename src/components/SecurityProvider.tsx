import React, { createContext, useEffect, useState } from 'react';
import { Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SecurityContext = createContext({});

export const SecurityProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLocked, setIsLocked] = useState(false);
  const [securityCode, setSecurityCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Basic heuristic to detect potential "tampering"
    // like devtools shortcuts or right-click to inspect.
    const handleSuspiciousActivity = (e: Event) => {
      e.preventDefault();
      triggerLockdown();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 or Ctrl+Shift+I/J/C or Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        triggerLockdown();
      }
    };

    window.addEventListener('contextmenu', handleSuspiciousActivity);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleSuspiciousActivity);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLocked]);

  const triggerLockdown = async () => {
    if (isLocked) return;
    
    // Generate a secure-looking 5-digit code
    const code = Math.floor(10000 + Math.random() * 90000).toString();
    setSecurityCode(code);
    setIsLocked(true);
    setIsSending(true);

    try {
      // Send the code via formsubmit to the user's email
      await fetch("https://formsubmit.co/ajax/marimesimanideep@outlook.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "SECURITY ALERT: Website Locked",
          message: `Suspicious activity (possible inspection/tampering) detected. Your website has been locked.\n\nUnlock Code: ${code}\n\nEnter this 5-digit code on the website to restore access.`
        })
      });
    } catch (err) {
      console.error("Failed to send security code", err);
    } finally {
      setIsSending(false);
    }
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode === securityCode) {
      setIsLocked(false);
      setInputCode('');
      setError('');
    } else {
      setError('Invalid security code. Please try again.');
    }
  };

  return (
    <SecurityContext.Provider value={{}}>
      <AnimatePresence>
        {isLocked && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[99999] flex flex-col items-center justify-center p-4 text-white backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="max-w-md w-full bg-white/[0.03] border border-red-500/30 rounded-[2.5rem] p-8 md:p-12 text-center shadow-[0_0_50px_rgba(239,68,68,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0" />
              
              <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
                <Lock className="w-8 h-8 text-red-400" />
              </div>
              
              <h2 className="text-3xl font-display font-bold text-white mb-4">Security Lockdown</h2>
              <p className="text-white/60 mb-8 font-mono text-sm leading-relaxed">
                Suspicious activity detected. The website has been locked to protect against unauthorized access.
                A 5-digit verification code has been sent to the administrator's email.
              </p>
              
              <form onSubmit={handleUnlock} className="flex flex-col gap-6">
                <div>
                  <input
                    type="text"
                    maxLength={5}
                    value={inputCode}
                    onChange={(e) => {
                      setInputCode(e.target.value.replace(/\D/g, ''));
                      setError('');
                    }}
                    placeholder="Enter 5-digit code"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-center text-3xl font-mono tracking-[0.5em] focus:outline-none focus:border-red-400/50 transition-colors placeholder:text-white/20 placeholder:tracking-normal placeholder:text-lg"
                    disabled={isSending}
                    autoFocus
                  />
                  {error && <p className="text-red-400 text-sm mt-3 font-mono">{error}</p>}
                  {isSending && <p className="text-[#38BDF8] text-sm mt-3 font-mono animate-pulse">Generating & dispatching code...</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSending || inputCode.length !== 5}
                  className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Verify & Unlock
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Only render children if not locked, preventing inspection of DOM while locked */}
      {!isLocked && children}
    </SecurityContext.Provider>
  );
};
