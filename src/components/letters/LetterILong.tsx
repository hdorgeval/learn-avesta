import React, { FC } from 'react';
import letterISound from './assets/sounds/letter-i.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterILong = (): Letter => ({
  id: 'ī',
  pronunciation: {
    fr: 'long i like the letter i in amie ;',
    en: 'like the sound ee in feet.',
  },
  transcription: 'ī',
  render: (props?: LetterOwnProps) => {
    return <LetterILong {...props} />;
  },
});

export const LetterILong: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    audioUrl: letterISound,
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 27,
      height: 32,
      zoom,
      path: {
        d: 'm136.2365,3.88663c7.09506,0 10.64348,21.10962 10.64348,63.32797c0,10.99885 -4.12524,21.19945 -12.37393,30.6c-8.24869,9.40233 -17.78318,14.10261 -28.60345,14.10261c-1.9519,0 -5.1003,-0.35359 -9.44698,-1.06435c-4.3449,-0.70897 -7.49508,-1.06435 -9.44519,-1.06435c-11.70782,0 -19.42435,0.9822 -23.14956,2.94481c-4.78956,2.50015 -7.18435,8.2987 -7.18435,17.39923c0,5.3521 1.41794,10.34882 4.25739,14.98837c3.19304,5.1753 7.36114,7.76117 12.50609,7.76117c2.30549,0 5.71998,0.31252 10.24345,0.93755c4.52348,0.62504 7.93796,0.93755 10.24524,0.93755c2.1287,0 9.66663,-3.09482 22.61739,-9.28268c1.59652,-0.7304 2.57158,-1.09471 2.92696,-1.09471c3.90201,0 5.85391,2.1287 5.85391,6.38609c0,8.51478 -5.23423,15.43304 -15.69913,20.75478c-8.51478,4.25739 -16.67597,6.38609 -24.48,6.38609c-12.24,-0.1768 -20.48869,-3.10375 -24.74608,-8.78087c-1.24293,-1.77332 -3.37162,-8.24869 -6.38609,-19.42435c-0.35538,-1.77332 -1.06435,-6.2968 -2.1287,-13.57043c-0.88755,-5.67533 -2.21799,-9.84522 -3.9913,-12.50609c-4.61277,-6.91826 -12.50609,-10.37739 -23.68174,-10.37739c-7.45043,0 -12.95075,0.97684 -16.49739,2.92696c-5.14494,0 -7.71652,-1.86261 -7.71652,-5.58783c0,-18.4475 17.64924,-28.4713 52.9513,-30.06782c3.36984,0.71076 9.04696,1.59652 17.02956,2.66087c14.72229,2.1287 23.68174,3.19304 26.87478,3.19304c12.06142,0 20.22261,-5.67533 24.48,-17.02956c2.66087,-7.09506 3.90201,-17.82711 3.72522,-32.1958c-0.17858,-10.99832 -0.08929,-17.65049 0.26609,-19.95652c1.41794,-8.86962 5.05565,-13.30435 10.90956,-13.30435z',
        fill,
        scaleX: 0.18,
        scaleY: 0.18,
        translateX: 0,
        translateY: 15,
        strokeWidth: 1,
      },
    },
  };
  return <LetterRenderer {...props} />;
};
