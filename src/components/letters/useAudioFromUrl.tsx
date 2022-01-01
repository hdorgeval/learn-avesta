import { useCallback, useEffect, useState } from "react";

export const useAudioFromUrl = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
  [audio, playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);
  
  const start = useCallback(() => {
    if (playing) {
      return;
    }
    setPlaying(true);
    audio.play();
  },[audio, playing]);  

  return [start];
};