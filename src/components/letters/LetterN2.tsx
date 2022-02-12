import React, { FC } from 'react';
import naroiSound from '../../assets/sounds/words/naroi.mp3';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';
export const useLetterN2 = (): Letter => ({
  id: 'n1',
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
  render: (props?: LetterOwnProps) => {
    return <LetterN2 {...props} />;
  },
});

export const LetterN2: FC<LetterOwnProps> = ({
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
      height: 44,
      zoom,
      path: {
        d: 'm14.04333,5.73982c8.01324,16.42714 13.35495,28.24667 16.02648,35.45859c5.07416,13.75602 7.61258,26.37687 7.61258,37.86256c0,6.00993 -1.90382,15.15833 -5.71011,27.44535c-3.80629,12.28647 -5.70876,21.43582 -5.70876,27.44575c0,4.80794 1.3687,11.78592 4.10611,20.93392c2.73875,9.148 4.10746,16.12732 4.10746,20.93526c0,8.01324 -1.66987,17.36157 -5.00827,28.04634c-4.14107,13.48806 -9.21523,20.23343 -15.22516,20.23343c-1.06888,0 -2.20364,-0.20033 -3.40563,-0.60099c0.40066,-4.54173 1.26787,-12.62085 2.6043,-24.24005c1.20199,-10.28411 1.80298,-18.36457 1.80298,-24.24005c0,-6.00993 -2.6043,-13.4894 -7.81291,-22.43707c-5.20861,-8.94901 -7.6798,-15.55859 -7.41225,-19.83008l0.20033,-2.6043c5.60927,-4.00662 9.61589,-7.54535 12.01986,-10.61754c3.3384,-4.40728 5.00827,-9.48238 5.00827,-15.22516c0,-20.0331 -2.94177,-36.92772 -8.82398,-50.68374l-7.69056,-17.99228c0,-1.73831 1.61206,-6.55244 4.83887,-14.44265c3.09236,-7.48942 5.31079,-12.30463 6.65395,-14.44561l1.81642,-1.00165z',
        fill,
        scaleX: 0.2,
        scaleY: 0.2,
        translateX: 0,
        translateY: 10,
        strokeWidth: 1,
      },
    },
  };
  return <LetterRenderer {...props} />;
};
