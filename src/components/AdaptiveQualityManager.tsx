import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type QualityTier = 'high' | 'medium' | 'low';

export interface QualitySettings {
  tier: QualityTier;
  dpr: [number, number];
  particleCount: number;
  enableBloom: boolean;
}

const defaultSettings: QualitySettings = {
  tier: 'high',
  dpr: [1, 2],
  particleCount: 4000,
  enableBloom: true,
};

const AdaptiveQualityContext = createContext<QualitySettings>(defaultSettings);

export function useQuality() {
  return useContext(AdaptiveQualityContext);
}

export function AdaptiveQualityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<QualitySettings>(defaultSettings);

  useEffect(() => {
    // Detect hardware tier
    const getHardwareTier = (): QualityTier => {
      let score = 0;

      // Check CPU cores
      const cores = navigator.hardwareConcurrency || 4;
      if (cores >= 8) score += 3;
      else if (cores >= 4) score += 2;
      else score += 1;

      // Check memory (if available)
      const nav = navigator as any;
      const memory = nav.deviceMemory;
      if (memory) {
        if (memory >= 8) score += 3;
        else if (memory >= 4) score += 2;
        else score += 1;
      } else {
        // Assume mid-range if unknown
        score += 2;
      }

      // Check network type as a proxy for mobile data limitations
      const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
      if (connection) {
        if (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === '3g') {
          score -= 1;
        }
      }

      // Check if mobile based on user agent (rough estimate)
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        score -= 1;
      }

      if (score >= 5) return 'high';
      if (score >= 3) return 'medium';
      return 'low';
    };

    const tier = getHardwareTier();

    const getSettingsForTier = (tier: QualityTier): QualitySettings => {
      switch (tier) {
        case 'high':
          return {
            tier: 'high',
            dpr: [1, 2],
            particleCount: window.innerWidth < 768 ? 2000 : 4000,
            enableBloom: true,
          };
        case 'medium':
          return {
            tier: 'medium',
            dpr: [1, 1.5],
            particleCount: window.innerWidth < 768 ? 1000 : 2000,
            enableBloom: true,
          };
        case 'low':
          return {
            tier: 'low',
            dpr: [1, 1],
            particleCount: window.innerWidth < 768 ? 500 : 1000,
            enableBloom: false,
          };
      }
    };

    setSettings(getSettingsForTier(tier));
    
    // Optionally handle resize to adjust particle counts if crossing mobile boundary
    const handleResize = () => {
      setSettings(getSettingsForTier(getHardwareTier()));
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AdaptiveQualityContext.Provider value={settings}>
      {children}
    </AdaptiveQualityContext.Provider>
  );
}
