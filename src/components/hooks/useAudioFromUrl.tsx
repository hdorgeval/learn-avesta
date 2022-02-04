import { useCallback, useEffect, useState } from 'react';

export const useAudioFromUrl = (url: string | undefined) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>(undefined);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!url) {
      return;
    }
    if (audio && playing) {
      audio.play();
      return;
    }

    if (audio && !playing) {
      audio.pause();
      return;
    }
  }, [audio, playing, url]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        if (audio) {
          audio.removeEventListener('ended', () => setPlaying(false));
          audio.removeEventListener('loadeddata', () => setHasLoaded(false));
        }
      };
    }
  }, [audio]);

  const start = useCallback(() => {
    if (!hasLoaded) {
      const dowloadedAudio = new Audio(url);
      setPlaying(true);
      setHasLoaded(true);
      setAudio(dowloadedAudio);
      dowloadedAudio.addEventListener('loadeddata', () => {
        dowloadedAudio.play();
      });
      return;
    }

    if (playing) {
      return;
    }

    setPlaying(true);
    if (audio) {
      audio.play();
    }
  }, [audio, hasLoaded, playing, url]);

  return [start];
};
