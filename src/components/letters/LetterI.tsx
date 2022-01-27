import React, { FC } from 'react';
import letterISound from '../../assets/sounds/letter-i.mp3';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterI = (): Letter => ({
  pronunciation : {
    'fr': 'like the letter i in ami ;',
    'en': 'like the letter i in it.'
  },
  transcription : 'i',
  render : (props?: LetterOwnProps) => {
    return <LetterI {...props} />;
  },
});

export const LetterI: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound, disableTranslate }) => {
  
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    audioUrl: letterISound,
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 13,
      height: 21,
      zoom,
      path: {
        d: 'm44.87415,5.0981c6.73824,0 13.23157,8.62964 19.47834,25.88893c5.42435,14.79367 8.13652,26.62861 8.13652,35.50415c0,9.69863 -4.02772,21.12318 -12.0815,34.27201c-8.71238,14.30055 -17.67132,21.45083 -26.87517,21.45083c-4.60358,0 -11.34182,-3.36912 -20.21802,-10.10901c-8.8762,-6.73824 -13.31431,-12.24532 -13.31431,-16.5196c0,-2.13631 0.73968,-4.02606 2.21905,-5.67091l10.35557,4.4381c4.60192,1.97249 8.05378,2.95873 10.35557,2.95873c7.72448,0 14.38163,-2.58807 19.97146,-7.76585c5.58817,-5.17779 8.38308,-11.62975 8.38308,-19.35588c0,-4.1088 -2.54835,-12.40964 -7.6434,-24.90202c-5.0967,-12.49238 -7.6434,-20.21802 -7.6434,-23.17675c0,-11.34182 2.95873,-17.01272 8.8762,-17.01272z',
        fill,
        scaleX: 0.19,
        scaleY: 0.18,
        translateX: 0,
        translateY: -10,
        strokeWidth: 1,
      }
    }
  };
  return (
    <LetterRenderer {...props} />
  );
};
