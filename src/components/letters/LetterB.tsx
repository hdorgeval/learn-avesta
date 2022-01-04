import { FC } from 'react';
import { LetterOwnProps, LetterPronunciation } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const LetterBTranscription = 'b';
export const letterBPronunciation: LetterPronunciation = {
  'fr': 'like the letter b in baguette ;',
  'en': 'like the letter b in bag.'
};
export const useLetterB = () => {
  const pronunciation = letterBPronunciation;
  const transcription = LetterBTranscription;
  const render = (props?: LetterOwnProps) => {
    return <LetterB {...props} />;
  };

  return {pronunciation,transcription,render};
};
/**
 * Letter B 
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/JH/0078.mp3
 * @alias: b
 */
export const LetterB: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom }) => {
  const props: LetterRendererOwnProps = {
    textToSpeech: '/b/',
    style: {
      marginLeft: '-45px',
    },
    overridenStyle,
    svg: {
      width: 60,
      height: 40,
      zoom,
      path: {
        d: 'm137.78934,1.499999c2.127711,1.3711 2.924613,3.414988 2.389449,6.131578c-0.27729,1.201865 -0.667335,3.230958 -1.170104,6.087279c-1.008124,8.327225 -0.978331,14.312409 0.089413,17.9559c1.484979,4.71021 3.740981,12.031626 6.770558,21.96425c2.533291,8.993005 3.800583,16.451125 3.800583,22.37436c0,17.349214 -10.682588,30.143956 -32.050333,38.385092c-15.592363,6.037443 -34.641934,9.056165 -57.14999,9.056165l-34.560297,0c-12.999468,0 -20.836477,-1.174092 -23.509714,-3.522274c-0.802092,-0.422223 -1.067727,-1.33156 -0.79561,-2.728011c4.303352,-1.02614 12.409874,-2.350779 24.320875,-3.973915c12.754559,-1.778009 19.829629,-2.667446 21.222626,-2.667446c0.896694,0 2.183417,-0.064026 3.858893,-0.192942c1.675459,-0.128917 2.963492,-0.193807 3.864065,-0.193807c3.871858,0 14.490947,-1.25196 31.857266,-3.756747c21.306849,-3.273959 34.041977,-5.921505 38.205383,-7.944369c2.721185,-1.380012 5.019928,-4.129653 6.896246,-8.248058c1.338567,-2.830971 2.008489,-5.849692 2.008489,-9.05703c0,-5.954383 -1.47979,-15.139465 -4.440696,-27.556975c-2.959612,-12.416645 -4.440712,-21.837929 -4.440712,-28.263506c0,-3.860745 0.717869,-8.144579 2.154917,-12.851327c2.095315,-6.906462 5.654867,-10.572534 10.678692,-10.998218l0,0.000001z',
        fill,
        scaleX: 0.4,
        scaleY: 0.3,
        translateX: 0,
        translateY: 10,
        strokeWidth: 2,
      }
    }
  };
  return (
    <LetterRenderer {...props} />
  );
};
