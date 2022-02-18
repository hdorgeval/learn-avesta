import React, { FC } from 'react';
import nemanghaaSound from '../../assets/sounds/words/nemanghaa.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';
export const useLetterNg = (): Letter => ({
  id: 'ng',
  pronunciation: {
    fr: 'like the sequence ng in ping-pong ;',
    en: 'like the sequence ng in song.',
  },
  transcription: 'ŋ',
  sampleWord: {
    transcript: 'nəmaŋhā',
    audioUrl: nemanghaaSound,
  },
  render: (props?: LetterOwnProps) => {
    return <LetterNg {...props} />;
  },
});

export const LetterNg: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableTranslate,
    disableSound,
    textToSpeech: '/ng/',
    style: {
      marginLeft: '3px',
    },
    overridenStyle,
    svg: {
      width: 13,
      height: 33,
      zoom,
      path: {
        d: 'm9.72878,2.19636c3.31193,0 8.69381,2.20804 16.14564,6.62399c5.38188,3.17384 10.34977,6.55481 14.90367,10.14264c2.48395,4.82994 3.72592,11.31584 3.72592,19.45757c0,2.48395 -0.17226,6.27891 -0.51818,11.38489c-0.34453,5.10584 -0.51679,8.9008 -0.51679,11.38475c0,7.03771 1.65596,12.21315 4.96789,15.52507c0.82798,1.93103 1.24197,6.07094 1.24197,12.41973c0,10.48731 -4.96789,20.42309 -14.90367,29.80734c-10.62623,10.21085 -20.83708,14.97174 -30.63532,14.28268l-2.89794,-0.207c-0.82798,-4.41637 -1.24197,-7.17677 -1.24197,-8.27982c0,-5.5208 2.62148,-9.86771 7.86583,-13.04071c3.31193,-1.65596 8.14228,-4.3469 14.48968,-8.07282c5.24435,-3.17439 7.86583,-7.72829 7.86583,-13.6617c0,-6.20986 -2.20749,-10.62623 -6.62385,-13.24771c-0.82798,-0.55291 -4.89843,-1.86296 -12.21273,-3.93291c-4.41637,-1.24253 -6.62385,-3.45043 -6.62385,-6.62441c0,-4.5539 1.65596,-7.93473 4.96789,-10.14264c2.06995,-1.10402 5.10542,-2.82903 9.1078,-5.17489c3.31193,-2.20804 4.96789,-5.93396 4.96789,-11.17789c0,-4.27786 -2.38114,-9.07321 -7.14204,-14.38604c-4.76089,-5.31298 -7.14065,-11.21235 -7.14065,-17.69811c0,-2.34599 0.13753,-4.00196 0.41399,-4.96789l-0.207,-0.41413z',
        fill,
        scaleX: 0.25,
        scaleY: 0.25,
        translateX: 0,
        translateY: 25,
        strokeWidth: 1,
      },
    },
  };
  return <LetterRenderer {...props} />;
};
