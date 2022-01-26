import React, { CSSProperties, FC } from 'react';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export interface LetterOwnProps {
  fill?: string | 'none';
  zoom?: number ;
  overridenStyle?: CSSProperties;
  disableSound?: boolean;
  disableTranslate?: boolean;
  key?: string;
}

export interface LetterPronunciation {
  'fr'?: string;
  'en'?: string;
  'es'?: string;
  'de'?: string;
}

export type TranscriptionSymbol = 'a' | 'ā' | 'b' | 'c' | 'd' | 'e' | 'ē' | 'ə' | 'f' | 'g' | 'h' | 'i' | 'ī' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'ō' | 'p' | 'q' | 'r' | 's' | 'ś' | 'š' | 'ṣ' | 'ṣ̌' | 't' | 'θ' | 'u' | 'v' | 'w' | 'x' | 'x<raised>v'| 'y' | 'z' | '-' | '.' | '...';

export interface Letter {
  hasBeenMatched?: boolean;
  pronunciation: LetterPronunciation;
  transcription: TranscriptionSymbol;
  render: (props?: LetterOwnProps) => JSX.Element;
}

export const useLetterA = (): Letter => ({
  pronunciation : {
    'fr': 'like the letter a in baguette ;',
    'en': 'like the letter a in cat.'
  },
  transcription : 'a',
  render : (props?: LetterOwnProps) => {
    return <LetterA {...props} />;
  },
});

export const LetterA: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound, disableTranslate }) => {
  
  const props: LetterRendererOwnProps = {
    disableTranslate,
    disableSound,
    textToSpeech: '/a/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 30,
      height: 25,
      zoom,
      path: {
        d: 'm116.338231,118.679407l0.809274,0.556926l-2.141655,-0.538843c0.433189,0 0.864558,-0.005423 1.295927,-0.016273l0.036453,-0.001809zm26.814723,-117.179407c7.342379,0 13.052852,9.339875 17.132625,28.0198c3.059677,13.650612 4.589521,25.863711 4.589521,36.640558c0,12.574195 -4.692196,24.247907 -14.073555,35.024754c-9.369207,10.946819 -20.440796,16.760165 -33.216598,17.445476l-1.246716,0.048819l-1.178668,-0.811881c-9.929374,-6.630655 -19.771263,-9.946884 -29.524448,-9.946884c-3.059677,0 -10.199132,2.155369 -21.416541,6.46611c-11.217408,4.310737 -20.192307,6.46611 -26.92287,6.46611c-12.238111,0 -20.601194,-0.896865 -25.088033,-2.694212c-7.139455,-2.873225 -10.707661,-8.9795 -10.707661,-18.32064c0,-3.412063 3.874417,-5.477026 11.625688,-6.196686l8.260407,-0.808263c3.059677,-0.358021 6.222034,-0.717852 9.484641,-1.077687c11.089818,-3.703183 16.983165,-12.380718 17.67518,-26.030785l0.059542,-2.361505l-0.008505,-0.065097c-0.038886,-0.470133 -0.133663,-3.468119 -0.287375,-8.991434c0,0 0,-2.694212 0,-8.082636c0,-26.043989 5.304012,-39.066072 15.908998,-39.066072c3.263213,3.233055 6.424964,12.393373 9.484641,27.480962c3.671493,18.141087 7.036774,30.35527 10.09585,36.640558c5.710472,12.035351 14.17623,18.05122 25.393638,18.05122c16.112528,0 24.170011,-9.248919 24.170011,-27.750381c0,-4.84958 -0.663454,-12.078385 -1.987942,-21.687684c-1.326308,-9.609294 -1.989762,-16.838824 -1.989762,-21.688404c0,-11.136134 4.589521,-16.704114 13.76795,-16.704114l-0.000018,-0.000005z',
        fill,
        scaleX: 0.18,
        scaleY: 0.18,
        translateX: 0,
        translateY: 0,
        strokeWidth: 3,
      }
    }
  };
  return (
    <LetterRenderer {...props} />
  );
};
