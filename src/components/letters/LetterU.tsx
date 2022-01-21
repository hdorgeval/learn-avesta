import React, { FC } from 'react';
import letterUSound from '../../assets/sounds/letter-u.mp3';
import { Letter, LetterOwnProps } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';
export const useLetterU = (): Letter => ({
  pronunciation : {
    'fr': 'like the sound ou in loup;',
    'en': 'like the letter u in put.'
  },
  transcription : 'u',
  render : (props?: LetterOwnProps) => {
    return <LetterU {...props} />;
  },
});

export const LetterU: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound, disableTranslate }) => {
  
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    audioUrl: letterUSound,
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 11,
      height: 31,
      zoom,
      path: {
        d: 'm1.46468,6.14576c8.00764,0 19.2376,12.30341 33.68791,36.91023c13.8664,23.43507 20.79862,39.44897 20.79862,48.04111c0,9.57063 -6.73758,26.26812 -20.21275,50.09246c-14.06104,24.80343 -24.70316,37.20317 -31.93028,37.20317c-2.53814,0 -3.8082,-3.51526 -3.8082,-10.54578c0,-7.81103 2.54011,-16.59919 7.6164,-26.36445c2.92938,-5.46753 7.22712,-13.6698 12.88929,-24.60682c3.12599,-6.44464 4.68701,-12.98562 4.68701,-19.62687c0,-2.92938 -1.85397,-9.17801 -5.56583,-18.74727c-1.75763,-4.29636 -4.29577,-10.74101 -7.6164,-19.33393c-7.41979,-20.11504 -11.32629,-37.69134 -11.71753,-52.72891c0.1966,-0.19523 0.58588,-0.29294 1.17175,-0.29294z',
        fill,
        scaleX: 0.18,
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
