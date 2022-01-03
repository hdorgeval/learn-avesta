import { useEffect, useState } from "react";

interface SpeechRequest {
  text: string;
  pitch: number;
  rate: number;
}

export const phoneticSpeechSynthesis  : Record<string, SpeechRequest> ={
  '/a-long/': {
    text: 'ah',
    pitch: 0.9,
    rate: 0.5
  },
  '/a/':{
    text: 'ah',
    pitch: 0.3,
    rate: 1.6
  },
  '/b/': {
    text: 'bea',
    pitch: 0.9,
    rate: 1.1
  },
  '/c/': {
    text: 'che',
    pitch: 1,
    rate: 1
  }
};

/**
 * translate, if needed, phonetical text to speech
 * @see https://mdn.github.io/web-speech-api/speak-easy-synthesis/index.html
 */
function  toSpeechRequest(text: string): SpeechRequest {
  if (phoneticSpeechSynthesis[text]) {
    return phoneticSpeechSynthesis[text];
  }
  return {
    text,
    pitch: 1,
    rate: 1
  };
}

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
