import { FC } from 'react';
import abarzaSound from './assets/sounds/words/abarza.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';
export const useLetterZ = (): Letter => ({
  id: 'z',
  pronunciation: {
    fr: 'like the letter z in zoro ;',
    en: 'like the letter z in zoo.',
  },
  transcription: 'z',
  sampleWord: { transcript: 'Abarzā', audioUrl: abarzaSound },
  render: (props?: LetterOwnProps) => {
    return <LetterZ {...props} />;
  },
});

/**
 * Letter Z
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/PL/007A.mp3
 * @alias: z
 */
export const LetterZ: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/z/',
    style: {
      marginLeft: '-15px',
    },
    overridenStyle,
    svg: {
      width: 34,
      height: 60,
      zoom,
      path: {
        d: 'm108.25694,1.70738c4.29833,0 6.4475,3.10379 6.4475,9.31105c0,1.43257 -0.2089,3.61117 -0.62671,6.5357c-0.41781,2.92464 -0.62671,5.07338 -0.62671,6.44613c0,1.37285 -1.07511,4.95405 -3.22428,10.74351c-2.14811,5.78966 -3.70011,9.57967 -4.656,11.37032c-1.55094,0.23876 -2.92358,-0.71628 -4.11897,-2.86492c-2.02889,-3.70053 -3.22322,-5.78956 -3.58194,-6.26708c-1.90967,-2.14874 -4.53572,-2.98435 -7.87922,-2.50683c-7.04361,1.07247 -12.35691,4.29232 -15.93885,9.65943c-3.58194,5.36711 -5.01472,11.62902 -4.29833,18.78584c0.71639,7.51301 0.57079,18.70797 7.49518,27.41489c2.6155,6.80886 7.66399,8.97912 11.28286,14.32302c3.61781,5.34284 8.8119,10.68463 10.4272,17.73668c1.61636,7.05099 2.40133,24.44478 -0.2912,32.50653c-2.69252,8.0628 -5.58234,13.36977 -11.89901,20.27411c-6.31667,6.90539 -12.86967,9.47342 -25.56104,14.54511c-12.69031,5.07064 -45.2939,9.56416 -54.54893,9.26979c-9.25397,-0.29331 -3.09239,-8.90052 -0.9791,-11.03281c2.11329,-2.13334 8.44684,2.71785 13.66203,2.64399c5.21413,-0.0728 8.8446,0.48216 16.74598,-0.44102c8.93006,-0.62882 22.30511,-2.67564 30.66227,-7.29999c8.35716,-4.62329 16.05702,-10.69096 19.48281,-20.44081c3.42579,-9.74985 7.99739,-30.05878 1.07195,-38.05616c-4.29833,-4.53678 -10.68569,-11.46011 -19.16313,-20.77105c-6.80516,-7.9995 -12.41072,-16.48801 -12.41072,-27.23163c0,-10.26598 5.50743,-22.96769 10.44091,-33.11203c4.93453,-10.14444 11.28286,-19.27866 19.16313,-27.7542c6.68594,-7.16241 11.93911,-11.16131 15.75949,-11.99703c2.86555,-1.19359 5.25316,-1.79055 7.16283,-1.79055z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: 30,
        strokeWidth: 1,
        disableZoomOnYTranslation: true,
      },
    },
  };
  return <LetterRenderer {...props} />;
};
