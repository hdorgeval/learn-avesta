import { FC } from 'react';
import letterXSound from '../../assets/sounds/letter-x.mp3';
import { LetterOwnProps, LetterPronunciation } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const LetterXvTranscription = 'x<raised>v';
export const letterXvPronunciation: LetterPronunciation = {
  'fr': 'like the sequence Khw in khwa (to be pronounced more or less like the word Roi) ;',
  'es': 'like the letter j in Juan ;',
  
};
export const useLetterXv= () => {
  const pronunciation = letterXvPronunciation;
  const transcription = LetterXvTranscription;
  const render = (props?: LetterOwnProps) => {
    return <LetterXv {...props} />;
  };

  return {pronunciation,transcription,render};
};

/**
 * Letter Xv like in Spanish "Juan" (could be transcribed as Khw)
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  
 * @alias: x raised by the letter v
 */
export const LetterXv: FC<LetterOwnProps> = ({ fill, zoom, overridenStyle }) => {
  
  const props: LetterRendererOwnProps = {
    audioUrl: letterXSound,
    textToSpeech: '/xv/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 39,
      height: 44,
      zoom,
      path: {
        d: 'm58.63785,1.5c1.55603,0 2.99867,0.84696 4.32608,2.54099c1.32742,1.69402 1.99204,3.31928 1.99204,4.87595c0,4.48676 -0.8241,9.56873 -2.47231,15.24592c-0.5494,1.92254 -0.8241,3.61684 -0.8241,5.0816c0,2.83919 0.91536,5.26541 2.74701,7.27958l5.21932,0.96145c1.46477,0.2747 2.47231,0.41205 3.02171,0.41205c4.76118,0 7.96634,-2.88436 9.61454,-8.65309l2.74701,-16.06965c1.00662,-5.76873 3.11297,-8.65309 6.31813,-8.65309c1.37351,0 2.63179,0.77829 3.77668,2.33496c1.1449,1.55667 1.71734,3.06753 1.71734,4.53257c0,1.64821 -1.05364,7.3254 -3.15906,17.03111c-2.10635,9.70672 -3.52595,15.29201 -4.25787,16.75677c-0.8241,1.74039 -2.42714,3.02171 -4.80727,3.84582c-0.18344,0.09218 -2.2437,0.64158 -6.18078,1.64821c-1.46569,0.64158 -2.97654,0.96145 -4.53257,0.96145c-1.92291,0 -4.69297,-0.64066 -8.31017,-1.92291c-3.61721,-1.28132 -6.34117,-1.92291 -8.1719,-1.92291c-1.46569,0 -3.3886,0.54295 -5.76873,1.62701c-2.74701,1.28225 -4.66992,2.02154 -5.76873,2.21881l-2.19761,0c-2.28979,-1.0988 -4.25787,-1.64821 -5.90608,-1.64821c-4.57866,0 -8.88262,4.85336 -12.91096,14.55916c-2.28979,6.04343 -5.81482,15.01731 -10.576,26.92072c-4.02926,9.70672 -8.28713,14.55916 -12.77361,14.55916l0,-0.8241c0,-3.29641 2.63271,-11.51441 7.8972,-24.65397c5.26541,-13.13957 7.89812,-22.82325 7.89812,-29.05012c0,-3.57112 -0.93933,-8.79044 -2.81615,-15.65797c-1.87682,-6.86753 -2.81523,-12.08649 -2.81523,-15.6576c0,-3.75428 0.45722,-7.3254 1.37351,-10.71335c1.28132,-4.76146 3.20423,-7.14223 5.76873,-7.14223c2.83827,0 5.03588,2.93018 6.59283,8.79044c0.91536,3.66265 2.28887,9.11095 4.12052,16.34435c2.19761,5.95217 5.44793,8.92779 9.75189,8.92779c3.75364,0 6.73018,-3.02171 8.92779,-9.06514l4.39522,-16.75641c1.64821,-6.04343 3.66238,-9.06514 6.04343,-9.06514z',
        fill,
        scaleX: 0.4,
        scaleY: 0.4,
        translateX: 0,
        translateY: 25,
        strokeWidth: 1,
      }
    }
  };
  
  return (
    <LetterRenderer {...props} />
  );
};
