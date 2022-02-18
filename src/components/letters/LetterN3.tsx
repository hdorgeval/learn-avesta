import React, { FC } from 'react';
import naroiSound from '../../assets/sounds/words/naroi.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';
export const useLetterN3 = (): Letter => ({
  id: 'n3',
  pronunciation: {
    fr: 'like the letter n in nature ;',
    en: 'like the letter n in nut.',
  },
  transcription: 'n',
  sampleWord: {
    transcript: 'narōi',
    audioUrl: naroiSound,
    voiceOf: 'Kersey Antia',
  },
  isPreferred: true,
  render: (props?: LetterOwnProps) => {
    return <LetterN3 {...props} />;
  },
});

export const LetterN3: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableTranslate,
    disableSound,
    textToSpeech: '/n/',
    style: {
      marginLeft: '4px',
    },
    overridenStyle,
    svg: {
      width: 8,
      height: 39,
      zoom,
      path: {
        d: 'm0.74765,42.31274c0.64611,-23.20796 2.0028,-23.84008 3.48982,-30.34192c1.48564,-6.50198 2.90406,-6.7168 5.42677,-8.66926c2.52134,-1.95246 8.02493,-4.03908 9.70536,-3.04577c2.45412,7.49515 2.1098,14.45873 3.08651,35.5551c0.97808,21.09637 2.91504,68.30601 2.77786,91.02273c-0.13718,22.7181 -1.86014,35.34124 -3.60093,45.28118c-1.74079,9.93857 -3.05222,12.82068 -5.22924,16.51078c-2.17702,3.68872 -5.59002,7.63534 -7.83288,5.62294c-2.24287,-2.01103 -4.25527,-10.52157 -5.62431,-17.69326c-1.36904,-7.17168 0.44994,3.47061 -2.58581,-25.33683c-0.71058,-27.18051 -0.25927,-85.69761 0.38684,-108.90571z',
        fill,
        scaleX: 0.2,
        scaleY: 0.2,
        translateX: 0,
        translateY: 15,
        strokeWidth: 1,
      },
    },
  };
  return <LetterRenderer {...props} />;
};
