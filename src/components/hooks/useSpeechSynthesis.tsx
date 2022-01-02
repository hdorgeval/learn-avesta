import { useEffect, useState } from "react";

interface SpeechRequest {
  text: string;
  pitch: number;
  rate: number;
}

function  toSpeechRequest(text: string): SpeechRequest {
  switch (text) {
    case '/a-long/':
      return {
        text: 'ah',
        pitch: 0.9,
        rate: 0.5
      }; 

    case '/a/':
      return {
        text: 'ah',
        pitch: 0.3,
        rate: 1.6
      }; 

    case '/b/':
      return {
        text: 'bea',
        pitch: 0.9,
        rate: 1.1
      }; 

    default:
      return {
        text,
        pitch: 1,
        rate: 1
      };
  }}
 
export const useSpeechSynthesis = () => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (window && window.speechSynthesis) {
      setIsSupported(true);
    }
  }, []);

  const speak = (text: string) => {
    if (!isSupported) {
      return;
    }

    const request = toSpeechRequest(text);
    const utterance = new SpeechSynthesisUtterance(request.text);
    utterance.lang = "en-US";
    utterance.rate = request.rate;
    utterance.pitch = request.pitch;
    window.speechSynthesis.speak(utterance);
  };

  return [speak];
};
