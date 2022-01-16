import { FC } from 'react';
import letterYSound from '../../assets/sounds/letter-y.mp3';
import { Letter, LetterOwnProps, LetterPronunciation } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const LetterYTranscription = 'y';
export const letterYPronunciation: LetterPronunciation = {
  'fr': 'like the y in yaourt ;',
  'en': 'like the letter y in yes ;',
  
};
export const useLetterY= (): Letter => {
  const pronunciation = letterYPronunciation;
  const transcription = LetterYTranscription;
  const render = (props?: LetterOwnProps) => {
    return <LetterY {...props} />;
  };

  return {pronunciation,transcription,render};
};

/**
 * Letter Y like in English "yes"
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  
 * @alias: y
 * @position: used only as the first letter in words
 * @variation: Indo-Parsi
 */
export const LetterY: FC<LetterOwnProps> = ({ fill, zoom, overridenStyle, disableSound }) => {
  
  const props: LetterRendererOwnProps = {
    disableSound,
    audioUrl: letterYSound,
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 50,
      height: 37,
      zoom,
      path: {
        d: 'm12.11053,2.07737c1.98681,0 3.52466,2.05048 4.61354,6.15138c0.6412,2.56312 1.60235,6.37568 2.88346,11.43773c1.53785,4.16502 3.81301,6.2475 6.82419,6.2475c3.20406,0 6.40812,-4.40325 9.61154,-13.20987c0.83343,-4.21101 1.28175,-6.44418 1.34562,-6.6995c0.96115,-2.42591 2.62737,-3.57478 4.998,-3.44667l1.53785,0c0.44897,0.8971 0.67281,1.85825 0.67281,2.88346c0,1.2175 -0.36833,2.99564 -1.105,5.3344c-0.73731,2.33883 -1.10565,4.11696 -1.10565,5.3344c0,1.60197 0.48058,3.49221 1.44173,5.67081c0.70506,1.66602 1.47398,3.52427 2.30677,5.57495l0.96115,0.09612c4.22908,0.44832 7.24091,-1.5701 9.03485,-6.05553c0.38446,-0.89703 1.15338,-4.74165 2.30677,-11.53385c0.70506,-4.16496 2.17905,-6.2475 4.42131,-6.2475c1.53785,0 2.30677,1.53785 2.30677,4.61354c0,2.94758 -0.97728,7.68923 -2.9312,14.22508c-1.95456,6.5361 -2.93184,11.56571 -2.93184,15.09037c0,15.76292 5.06251,23.64438 15.18623,23.64438c4.80577,0 8.77875,-1.45786 11.91831,-4.37357c3.1402,-2.91571 4.70965,-6.77581 4.70965,-11.58158c0,-2.88346 -0.89665,-5.76692 -2.69123,-8.65038c-1.98617,-3.26792 -4.32519,-4.90188 -7.01642,-4.90188c-0.44832,0 -1.105,0.12772 -1.97004,0.38446c-0.86504,0.25609 -1.52172,0.38446 -1.97069,0.38446l-1.63396,-0.57669l0,-1.73008c0,-4.03685 0.48058,-7.62537 1.44173,-10.76518c1.47398,-4.86982 3.58852,-7.30477 6.34362,-7.30477c2.30677,0 5.51083,3.78056 9.61154,11.34161c3.84462,7.1128 5.76692,12.07854 5.76692,14.89814c0,7.88146 -1.73008,15.15398 -5.19023,21.81819c-4.22908,8.13755 -9.89988,12.20665 -17.01242,12.20665c-8.71425,0 -14.57728,-3.30018 -17.58911,-9.89988c-1.73008,-6.21589 -3.4279,-12.39888 -5.09412,-18.55027c-2.499,-6.66421 -7.497,-9.996 -14.994,-9.996c-0.89665,0 -2.21065,0.38446 -3.94073,1.15338c-1.34562,0.64055 -2.65898,1.28111 -3.94073,1.92231c-3.13955,-1.02566 -5.09412,-1.53785 -5.86304,-1.53785c-3.20342,0 -6.21525,3.39565 -9.03485,10.18823c-1.60171,4.22908 -4.06845,10.50818 -7.40088,18.83861c-2.81895,6.79194 -5.79853,10.18823 -8.93873,10.18823l0,-0.57669c0,-1.98681 1.82619,-7.59312 5.47858,-16.82019c3.71689,-9.48381 5.57469,-16.40412 5.57469,-20.76092c0,-2.499 -0.65668,-6.15138 -1.97004,-10.95741c-1.31401,-4.80577 -1.97069,-8.45815 -1.97069,-10.95715c0,-2.62711 0.3206,-5.12611 0.96115,-7.497c0.89729,-3.33198 2.24291,-4.998 4.03685,-4.998z',
        fill,
        scaleX: 0.5,
        scaleY: 0.5,
        translateX: 0,
        translateY: 10,
        strokeWidth: 1,
      }
    }
  };
  
  return (
    <LetterRenderer {...props} />
  );
};