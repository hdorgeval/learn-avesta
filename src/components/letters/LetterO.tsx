import { FC } from 'react';
import { Letter, LetterOwnProps, LetterPronunciation, TranscriptionSymbol } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const LetterOTranscription: TranscriptionSymbol = 'o' ; 
export const letterOPronunciation: LetterPronunciation = {
  'fr': 'o, like the letter o in pot ;',
  'en': 'like the letter o in going.'
};

export const useLetterO = (): Letter => {
  const pronunciation = letterOPronunciation;
  const transcription = LetterOTranscription;
  const render = (props?: LetterOwnProps) => {
    return <LetterO {...props} />;
  };

  return {pronunciation,transcription,render};
};
/**
 * Letter O 
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  
 * @alias: o
 */
export const LetterO: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound, disableTranslate  }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/o/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 29,
      height: 53,
      zoom,
      path: {
        d: 'm29.76665,5.14238c0.59925,-0.00245 1.20461,0.00907 1.81812,0.03434l3.3407,0.15185c6.2768,5.66909 10.37674,13.21094 12.29984,22.62562c1.2148,5.87159 1.8222,14.57758 1.8222,26.11817c0,6.88389 -0.73377,17.15903 -2.20131,30.82511c-1.46754,13.66648 -2.20233,23.94234 -2.20233,30.82552c0,6.47961 1.92411,10.37674 5.77029,11.69244c0.70931,0.20281 5.51755,0.45555 14.42573,0.75925c1.92411,0.10191 6.73235,1.26575 14.42573,3.49255c5.6694,1.62041 9.71839,3.8472 12.14799,6.68139c2.4296,2.83521 3.6444,7.087 3.6444,12.75539c0,20.24698 -22.82741,30.36997 -68.48427,30.36997c-11.33778,0 -17.00718,-2.88515 -17.00718,-8.65544c0,-1.31569 1.06295,-2.70782 3.18885,-4.17536c2.1259,-1.46754 3.89816,-2.20233 5.31474,-2.20233c1.8222,0 4.58097,0.35466 8.27633,1.06295c3.69535,0.70931 6.45311,1.06295 8.27531,1.06295c13.7684,0 22.77747,-0.40459 27.02927,-1.2148c11.74339,-2.22679 17.61458,-7.49058 17.61458,-15.79238c0,-7.69338 -6.12393,-11.54059 -18.37383,-11.54059c-1.01199,0 -2.53049,0.17733 -4.55549,0.53198c-2.02398,0.35466 -3.54248,0.53096 -4.55549,0.53096c-8.19989,0 -13.21094,-0.70829 -15.03313,-2.1259c-2.32768,-1.8222 -3.49255,-6.68139 -3.49255,-14.57758c0,-7.28879 0.88664,-18.24644 2.65788,-32.87498c1.77124,-14.62823 2.65686,-25.5868 2.65686,-32.87559c0,-25.51077 -4.85919,-38.26616 -14.57758,-38.26616c-5.36468,0 -9.76833,4.30245 -13.21094,12.90724c-1.5185,4.2518 -3.79625,10.68014 -6.83324,19.28493c-2.63138,-2.1259 -3.9481,-6.63074 -3.9481,-13.51463c0,-10.02209 2.68336,-18.17133 8.04804,-24.44782c5.50532,-6.26375 12.74418,-9.41347 21.7186,-9.44903z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: -55,
        strokeWidth: 0.5,
      }
    }
  };
  return (
    <LetterRenderer {...props} />
  );
  
};
