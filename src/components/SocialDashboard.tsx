import { motion, useInView, animate } from "motion/react";
import GlassCard from "./GlassCard";
import { Youtube, TrendingUp, Users, Video, Activity, PlaySquare, Smartphone, Eye, Award, Image as ImageIcon, Github, Star, GitFork, Terminal } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Number formatter
function formatNumber(num: number | string) {
  if (!num) return "0";
  const n = typeof num === "string" ? parseInt(num.toString().replace(/,/g, ""), 10) : num;
  if (isNaN(n)) return "0";
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

function AnimatedNumber({ value }: { value: number | string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView && ref.current) {
      const parsed = typeof value === "string" ? parseInt(value.toString().replace(/,/g, ""), 10) : value;
      if (isNaN(parsed)) {
        ref.current.textContent = value.toString();
        return;
      }
      const controls = animate(0, parsed, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) ref.current.textContent = formatNumber(Math.round(v));
        }
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return <span ref={ref}>{formatNumber(value)}</span>;
}

const CHANNEL_URL = "https://www.youtube.com/channel/UCYDm_dA2nOCxlTRcBnM3YcA";
const GITHUB_USERNAME = "manideep-dev"; // Default username for GitHub

function extractChannelId(url: string) {
  const match = url.match(/channel\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

interface YouTubeStats {
  channelName: string;
  subscribers: string;
  views: string;
  videos: string;
  profileImage: string;
  bannerImage: string;
}

interface GitHubStats {
  username: string;
  name: string;
  profileImage: string;
  repos: number;
  stars: number;
  forks: number;
  contributions: number;
}

export default function SocialDashboard() {
  const chartData1 = [40, 30, 50, 45, 70, 60, 90, 80, 100];
  const chartData2 = [20, 40, 30, 60, 50, 80, 65, 95, 85]; // Fake data for GitHub chart

  const [stats, setStats] = useState<YouTubeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [ghStats, setGhStats] = useState<GitHubStats | null>(null);
  const [ghLoading, setGhLoading] = useState(true);
  const [ghError, setGhError] = useState<string | null>(null);

  useEffect(() => {
    const fetchYoutubeStats = async () => {
      const channelId = extractChannelId(CHANNEL_URL);
      if (!channelId) {
        setError("Invalid Channel URL");
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(`/api/youtube-stats?channelId=${channelId}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setStats(data);
        setError(null);
      } catch (err) {
        setError("Unable to fetch YouTube statistics.");
      } finally {
        setLoading(false);
      }
    };

    const fetchGithubStats = async () => {
      try {
        const res = await fetch(`/api/github-stats?username=${GITHUB_USERNAME}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setGhStats(data);
        setGhError(null);
      } catch (err) {
        setGhError("Unable to fetch GitHub statistics.");
      } finally {
        setGhLoading(false);
      }
    };

    fetchYoutubeStats();
    fetchGithubStats();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(() => {
      fetchYoutubeStats();
      fetchGithubStats();
    }, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="mb-24 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md mb-6"
        >
           <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs font-mono">
             Creator Mode
           </span>
        </motion.div>
        <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Analytics Console</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-8">
        
        {/* YouTube Glass Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="p-8 relative h-full flex flex-col overflow-hidden">
            {stats?.bannerImage && (
              <div 
                className="absolute inset-0 opacity-10 object-cover w-full h-32 z-0" 
                style={{ backgroundImage: `url(${stats.bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            )}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            {loading ? (
              <div className="animate-pulse flex flex-col h-full gap-8 z-10 relative">
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white/10" />
                  <div className="flex-1 space-y-2">
                    <div className="h-6 bg-white/10 rounded w-1/3" />
                    <div className="h-4 bg-white/10 rounded w-1/4" />
                  </div>
                </div>
                <div className="h-32 bg-white/5 rounded-xl" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-auto">
                   <div className="h-24 bg-white/5 rounded-2xl" />
                   <div className="h-24 bg-white/5 rounded-2xl" />
                   <div className="h-24 bg-white/5 rounded-2xl" />
                </div>
              </div>
            ) : error ? (
              <div className="h-full flex items-center justify-center min-h-[300px] z-10 relative text-red-400">
                <p className="text-center font-mono">{error}</p>
              </div>
            ) : stats && (
              <>
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="flex items-center gap-4">
                    {stats.profileImage ? (
                      <img src={stats.profileImage} alt={stats.channelName} className="w-14 h-14 rounded-2xl border border-white/[0.1] shadow-[0_0_30px_rgba(248,113,113,0.1)] object-cover" />
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] backdrop-blur-xl flex items-center justify-center text-red-400 shadow-[0_0_30px_rgba(248,113,113,0.1)]">
                        <Youtube className="w-7 h-7" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-display text-2xl font-bold text-white/90 tracking-tight">{stats.channelName}</h4>
                      <p className="text-white/40 text-sm font-mono mt-1">Live Updates Active</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#38BDF8] bg-[#38BDF8]/10 px-4 py-2 rounded-full text-xs font-mono border border-[#38BDF8]/20 backdrop-blur-md shadow-inner">
                    <Activity className="w-3 h-3 animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Animated Chart */}
                <div className="h-32 mb-8 relative flex items-end justify-between gap-2 z-10">
                  <div className="absolute inset-0 border-b border-white/[0.05] border-dashed" />
                  <div className="absolute inset-x-0 top-1/2 border-b border-white/[0.05] border-dashed" />
                  {chartData1.map((val, i) => (
                    <div key={i} className="w-full relative group h-full flex items-end">
                      <motion.div 
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: val / 100 }}
                        style={{ transformOrigin: "bottom", height: "100%", willChange: "transform" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="w-full bg-gradient-to-t from-red-500/20 to-red-500/80 rounded-t-sm relative border-t border-red-400/50 group-hover:from-red-400/40 group-hover:to-red-400 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10 mt-auto">
                  <StatBlock value={stats.subscribers} label="Subscribers" icon={<Users className="w-3 h-3" />} />
                  <StatBlock value={stats.views} label="Total Views" icon={<Eye className="w-3 h-3" />} />
                  <StatBlock value={stats.videos} label="Total Videos" icon={<Video className="w-3 h-3" />} />
                </div>
              </>
            )}
          </GlassCard>
        </motion.div>
        
        {/* GitHub Glass Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="p-8 relative h-full flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-[80px] pointer-events-none" />
            
            {ghLoading ? (
              <div className="animate-pulse flex flex-col h-full gap-8 z-10 relative">
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white/10" />
                  <div className="flex-1 space-y-2">
                    <div className="h-6 bg-white/10 rounded w-1/3" />
                    <div className="h-4 bg-white/10 rounded w-1/4" />
                  </div>
                </div>
                <div className="h-32 bg-white/5 rounded-xl" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-auto">
                   <div className="h-24 bg-white/5 rounded-2xl" />
                   <div className="h-24 bg-white/5 rounded-2xl" />
                   <div className="h-24 bg-white/5 rounded-2xl" />
                </div>
              </div>
            ) : ghError ? (
              <div className="h-full flex items-center justify-center min-h-[300px] z-10 relative text-[#8B5CF6]">
                <p className="text-center font-mono">{ghError}</p>
              </div>
            ) : ghStats && (
              <>
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="flex items-center gap-4">
                    {ghStats.profileImage ? (
                      <img src={ghStats.profileImage} alt={ghStats.username} className="w-14 h-14 rounded-2xl border border-white/[0.1] shadow-[0_0_30px_rgba(139,92,246,0.1)] object-cover" />
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] backdrop-blur-xl flex items-center justify-center text-[#8B5CF6] shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                        <Github className="w-7 h-7" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-display text-2xl font-bold text-white/90 tracking-tight">{ghStats.name}</h4>
                      <p className="text-white/40 text-sm font-mono mt-1">@{ghStats.username}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#38BDF8] bg-[#38BDF8]/10 px-4 py-2 rounded-full text-xs font-mono border border-[#38BDF8]/20 backdrop-blur-md shadow-inner">
                    <Activity className="w-3 h-3 animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Animated Line Chart for GitHub */}
                <div className="h-32 mb-8 relative z-10 flex items-center">
                  <div className="absolute inset-0 border-b border-white/[0.05] border-dashed" />
                  <div className="absolute inset-x-0 top-1/2 border-b border-white/[0.05] border-dashed" />
                  <svg className="w-full h-full preserve-3d overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path 
                      d={`M 0 ${100 - chartData2[0]} ${chartData2.slice(1).map((val, i) => `L ${(i + 1) * (100 / (chartData2.length - 1))} ${100 - val}`).join(' ')}`}
                      fill="none"
                      stroke="url(#gh-gradient)"
                      strokeWidth="3"
                      className="drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="gh-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#38BDF8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10 mt-auto">
                  <StatBlock value={ghStats.stars} label="Stars" icon={<Star className="w-3 h-3" />} />
                  <StatBlock value={ghStats.forks} label="Forks" icon={<GitFork className="w-3 h-3" />} />
                  <StatBlock value={ghStats.contributions || "0"} label="Commits" icon={<Terminal className="w-3 h-3" />} />
                </div>
              </>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function StatBlock({ value, label, icon }: { value: string | number, label: string, icon: React.ReactNode }) {
  return (
    <div className="p-3 md:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.1] hover:bg-white/[0.06] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] flex flex-col justify-between group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
      <div className="text-2xl lg:text-3xl font-display font-bold mb-1 text-white group-hover:text-[#38BDF8] transition-colors relative z-10">
        <AnimatedNumber value={value} />
      </div>
      <div className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-mono flex items-center gap-1.5 md:gap-2 whitespace-nowrap relative z-10 group-hover:text-white/80 transition-colors">
        {icon} {label}
      </div>
    </div>
  );
}
