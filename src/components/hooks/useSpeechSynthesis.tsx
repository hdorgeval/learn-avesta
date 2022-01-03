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
  },
  '/d/': {
    text: 'd',
    pitch: 1,
    rate: 1
  },
  '/j/': {
    text: 'djea',
    pitch: 1,
    rate: 1
  },
  '/e/': {
    text: 'e',
    pitch: 0.9,
    rate: 1.6
  },
  '/e-long/': {
    text: 'e',
    pitch: 0.9,
    rate: 0.5
  },
  '/f/': {
    text: 'f',
    pitch: 1,
    rate: 1
  },
  '/g/': {
    text: 'gu',
    pitch: 1,
    rate: 1
  },
  '/h/': {
    text: 'h',
    pitch: 1,
    rate: 1
  },
  '/r/': {
    text: 'r',
    pitch: 1,
    rate: 1
  },
  '/s/': {
    text: 's',
    pitch: 1,
    rate: 1
  },
  '/t/': {
    text: 't',
    pitch: 1,
    rate: 1
  },
};

function isPhonetic(text: string): boolean {
  return text.startsWith('/') && text.endsWith('/');
}

/**
 * translate, if needed, phonetical text to speech
 * @see https://mdn.github.io/web-speech-api/speak-easy-synthesis/index.html
 */
function  toSpeechRequest(text: string): SpeechRequest {
  if (phoneticSpeechSynthesis[text]) {
    return phoneticSpeechSynthesis[text];
  }

  if (isPhonetic(text)) {
    throw new Error(`Unsupported phonetic sequence: ${text}. Maybe you forgot to update the phoneticSpeechSynthesis object?`);
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
