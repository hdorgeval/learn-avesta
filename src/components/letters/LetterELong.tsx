import { FC } from 'react';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterEh = (): Letter => ({
  pronunciation: {
    'fr': 'long é, like the sequence eh.',
  },
  transcription: 'ē',
  render : (props?: LetterOwnProps) => {
    return <LetterELong {...props} />;
  },
});

/**
 * Letter E long : é, like in "eh"
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/PL/02D0.mp3
 * @alias: ē
 */
export const LetterELong: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound, disableTranslate }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/e-long/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 39,
      height: 49,
      zoom,
      path: {
        d: 'm47.25425,1.5c0.95548,0 1.7463,0.40292 2.37307,1.20877c0.62677,0.80585 0.93986,1.68633 0.93986,2.64139c0,2.08926 -0.93986,6.04386 -2.82017,11.86387c-1.88031,5.82007 -2.82077,10.1029 -2.82077,12.84855c0,5.07426 2.40252,9.92437 7.20816,14.55033c4.80504,4.62596 9.77474,6.93894 14.90788,6.93894c5.61149,0 11.22238,-2.26791 16.83326,-6.80494c5.90955,-4.77499 8.86433,-9.8787 8.86433,-15.31111c0,-2.56657 -1.04442,-4.74555 -3.13385,-6.53632c-2.08883,-1.79077 -4.41684,-2.68616 -6.98401,-2.68616c-1.07446,0 -2.67114,0.31369 -4.79002,0.94046c-2.11948,0.62677 -3.71615,0.93986 -4.79062,0.93986c-0.89539,0 -1.88031,-0.83529 -2.95478,-2.50708c-0.95488,-1.49205 -1.43262,-2.74559 -1.43262,-3.76038c0,-3.28306 1.13456,-6.32738 3.40247,-9.13294c2.44759,-3.04431 5.25333,-4.56647 8.41663,-4.56647c3.9397,0 7.46175,3.13385 10.56556,9.40156c2.68616,5.37232 4.02924,10.2967 4.02924,14.77364c0,21.48927 -10.98321,32.23391 -32.95022,32.23391c-4.89458,0 -9.07285,-1.13396 -12.53541,-3.40247c-2.98422,-1.96985 -5.64093,-4.80504 -7.96894,-8.50617c0,0 -2.20842,-3.76062 -6.62586,-11.28187c-3.04431,0.47774 -7.61078,1.28359 -13.69941,2.41754c-4.95407,1.01497 -8.50617,2.95478 -10.6551,5.82001c-2.14893,2.86524 -3.22339,6.89448 -3.22339,12.08772c0,3.76062 0.50779,7.46175 1.52216,11.10279c1.19405,4.47693 2.92533,7.67088 5.19324,9.58063c6.74544,5.79057 13.4308,9.4316 20.05666,10.92371l19.87758,4.56647c8.77479,1.96985 15.46074,2.95478 20.05666,2.95478c1.01497,0 1.85087,-0.20852 2.50708,-0.62677c3.04431,0.06009 7.35719,2.26851 12.93863,6.62586c5.58084,4.35795 8.37156,7.96894 8.37156,10.83418c0,1.13456 -0.26862,1.76133 -0.80585,1.88031c-6.74484,-4.95407 -12.55043,-8.11797 -17.41497,-9.4911c-4.86513,-1.37253 -12.26679,-3.01427 -22.20558,-4.92463c-9.93879,-1.90976 -17.38552,-3.58155 -22.34019,-5.01416c-9.90874,-2.86524 -16.9823,-5.939 -21.22066,-9.22248c-5.4913,-4.35735 -9.25193,-10.95316 -11.28187,-19.78804c-0.7758,-3.34238 -1.164,-5.34227 -1.164,-5.99909c0,-0.71631 1.17903,-3.95412 3.53708,-9.71464c2.35745,-5.76052 3.53648,-9.32704 3.53648,-10.70017c0,-0.71631 -0.59672,-2.328 -1.79077,-4.83509l-2.41754,-5.1037c-0.47714,-1.31303 -0.71631,-5.19324 -0.71631,-11.63978c0,-2.62649 0.86594,-5.61107 2.59662,-8.95386c1.96985,-3.76062 4.14882,-5.58126 6.53632,-5.46186c2.14893,2.68616 3.22339,5.90955 3.22339,9.67017c0,1.25354 -0.26862,3.07418 -0.80585,5.46186c-0.53723,2.38786 -0.80585,4.20808 -0.80585,5.46162c0,2.08944 1.2241,3.88021 3.67108,5.37232c2.08944,1.31363 4.26841,1.96985 6.53632,1.96985c5.31283,0 9.07345,-2.50708 11.28187,-7.52125c0.83589,-3.10381 2.11948,-7.78962 3.85016,-14.05733c1.43262,-5.01416 3.9397,-7.52125 7.52125,-7.52125z',
        fill,
        scaleX: 0.4,
        scaleY: 0.42,
        translateX: 0,
        translateY: 30,
        strokeWidth: 1,
      }
    }
  };
  
  return (
    <LetterRenderer {...props} />
  );
};
