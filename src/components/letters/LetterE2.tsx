import React, { FC } from 'react';
import ahuremSound from '../../assets/sounds/words/ahurem.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';
export const useLetterE2 = (): Letter => ({
  id: 'ə',
  pronunciation: {
    fr: 'like the sequence et in muguet ;',
    en: 'like the letter e in red.',
  },
  transcription: 'ə',
  sampleWord: {
    transcript: 'ahurəm',
    audioUrl: ahuremSound,
    voiceOf: 'Kersey Antia',
  },
  render: (props?: LetterOwnProps) => {
    return <LetterE2 {...props} />;
  },
});

export const LetterE2: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableTranslate,
    disableSound,
    textToSpeech: '/ey/',
    style: {
      marginLeft: '4px',
    },
    overridenStyle,
    svg: {
      width: 13,
      height: 38,
      zoom,
      path: {
        d: 'm33.694061,2.410409c1.117172,0 2.653987,0.838161 4.60932,2.514482c1.956458,1.676321 2.934124,3.017378 2.934124,4.02317c0,2.570396 -2.403102,5.028963 -7.20818,7.375812c-7.375812,3.464359 -11.845627,5.811209 -13.410568,7.040548c-4.805079,3.576076 -7.20818,8.269775 -7.20818,14.080646c0,4.247055 2.067838,8.046341 6.202388,11.398983c1.117172,0.783033 4.917583,3.241262 11.398983,7.375812c4.02317,2.570734 6.034756,5.028963 6.034756,7.375812c0,3.017378 -1.787701,5.755744 -5.364227,8.213973l-10.057926,6.872916c-3.576526,3.352642 -5.364227,7.655949 -5.364227,12.907672c0,6.25864 2.290597,10.673327 6.872916,13.242936c0.781908,0.559149 4.972711,1.956458 12.572408,4.190803c4.582319,1.341057 6.872916,3.632779 6.872916,6.872916c0,2.570734 -0.670528,4.973836 -2.011585,7.20818c-1.564941,2.682114 -3.576526,4.02317 -6.034756,4.02317c-7.375812,0 -14.975509,-3.407769 -22.797966,-10.225558c-7.822456,-6.816664 -11.734247,-13.857212 -11.734247,-21.121645l6.37002,-11.734247c3.128758,-5.810871 4.693699,-9.610157 4.693699,-11.398983c0,-2.346849 -1.843953,-7.123802 -5.531859,-14.331982c-3.687906,-7.20818 -5.531859,-13.550074 -5.531859,-19.026806c0,-7.375812 3.799286,-15.365788 11.398983,-23.97094c7.599697,-8.605152 15.030637,-12.907672 22.295069,-12.907672z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: 10,
        strokeWidth: 1,
      },
    },
  };
  return <LetterRenderer {...props} />;
};
