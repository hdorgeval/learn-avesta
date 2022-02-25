import { FC } from 'react';
import letterYSound from './assets/sounds/letter-y.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterY2 = (): Letter => ({
  id: 'y2',
  pronunciation: {
    fr: 'like the y in yaourt ;',
    en: 'like the letter y in yes ;',
  },
  transcription: 'y',
  useWhenFirstLetterInWord: true,
  render: (props?: LetterOwnProps) => {
    return <LetterY2 {...props} />;
  },
});

/**
 * Letter Y like in English "yes"
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:
 * @alias: y
 * @position: used only as the first letter in words
 * @variation: Iranian version
 */
export const LetterY2: FC<LetterOwnProps> = ({
  fill,
  zoom,
  overridenStyle,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    audioUrl: letterYSound,
    style: {
      marginLeft: '-10px',
    },
    overridenStyle,
    svg: {
      width: 72,
      height: 39,
      zoom,
      path: {
        d: 'm63.23005,2.13153c2.27838,0 8.60128,1.50953 18.9687,4.52864c1.93724,0.51268 5.32647,1.50953 10.16823,2.99061l3.24727,1.02535c0.17057,0.05695 0.45557,0.14239 0.85446,0.25634c8.20239,0 14.98139,-1.05385 20.33594,-3.1615c0,2.16465 -0.64098,4.01596 -1.9224,5.55399c-1.28196,1.53803 -3.00518,2.30694 -5.16967,2.30694c-0.79725,0 -1.99392,0.39889 -3.58894,1.19614c-2.56338,0.91167 -7.23404,1.36724 -14.01304,1.36724c-0.85446,0 -2.76256,-0.34168 -5.72483,-1.02503c-1.59503,-0.39889 -4.78508,-1.13946 -9.56964,-2.22181c-8.94349,-2.0507 -13.89968,-3.07606 -14.86803,-3.07606c-4.61398,0 -8.94296,1.82287 -12.98748,5.46844c-4.04452,3.64563 -6.06704,7.74735 -6.06704,12.30412c0,5.92454 2.2217,10.70962 6.66511,14.35525c3.81673,3.13284 8.14571,4.69927 12.98748,4.69927c0.39889,0 6.15232,-1.05364 17.26031,-3.16145l11.27909,-2.13589c3.58841,-0.68389 5.81012,-1.02556 6.66458,-1.02556c2.2217,0 5.75344,0.79778 10.5952,2.39228c5.69675,1.88002 9.42767,3.84534 11.1938,5.89593c-1.93724,0.285 -3.84534,0.42749 -5.72536,0.42749c-2.10728,0 -4.15841,-0.19971 -6.1518,-0.59807c-3.70284,-0.62667 -5.95262,-0.94028 -6.75039,-0.94028c-0.79725,0 -6.3229,1.25335 -16.57642,3.75952c-10.25352,2.5067 -16.03556,3.76005 -17.34559,3.76005c-10.8802,0 -20.73483,-4.92758 -29.56443,-14.78221c-1.93671,0.96835 -4.52869,3.10424 -7.77543,6.40819c-1.53782,1.65224 -3.87341,4.1298 -7.00679,7.43375c-6.43679,6.779 -12.24691,10.16823 -17.43088,10.16823c-1.70892,0 -3.44645,-0.31307 -5.21205,-0.93975c7.97461,-3.47505 14.44054,-8.63042 19.39619,-15.4661c1.93671,-2.67727 6.09511,-9.48435 12.47522,-20.42123c5.12676,-8.77239 9.51295,-15.0386 13.15858,-18.79823c5.58233,-5.69638 11.64884,-8.5446 18.20005,-8.5446z',
        fill,
        scaleX: 0.6,
        scaleY: 0.6,
        translateX: 0,
        translateY: 10,
        disableZoomOnYTranslation: true,
        strokeWidth: 1,
      },
    },
  };

  return <LetterRenderer {...props} />;
};
