import { useState, useCallback, useEffect } from 'react';

export function useSound(url: string) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    try {
      setAudio(new Audio(url));
    } catch (e) {
      console.warn("Audio not supported");
    }
  }, [url]);

  const play = useCallback(() => {
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0.2;
      audio.play().catch(e => console.log('Audio play prevented', e));
    }
  }, [audio]);

  return [play];
}
