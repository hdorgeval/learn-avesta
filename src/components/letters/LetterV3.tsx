import { FC } from 'react';
import vohuSound from './assets/sounds/words/vohu.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterV3 = (): Letter => ({
  id: 'v3',
  pronunciation: {
    fr: 'like the letter v in vite ;',
    en: 'like the letter v in voice, five.',
  },
  transcription: 'v',
  useWhenFirstLetterInWord: true,
  sampleWord: {
    transcript: 'vohū',
    audioUrl: vohuSound,
  },
  render: (props?: LetterOwnProps) => {
    return <LetterV3 {...props} />;
  },
});

/**
 * Letter V when used at the start of a word
 * * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/JH/0076.mp3
 * @alias: v
 */
export const LetterV3: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/v/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 31,
      height: 55,
      zoom,
      path: {
        d: 'm37.9074,5.67661c3.12193,0.3356 5.01735,1.67633 5.6873,4.022l-29.53092,116.95437c1.79035,3.0824 4.7552,5.50525 8.89662,7.26752c3.69306,1.54172 7.55464,2.31258 11.58371,2.31258c1.00805,0 5.98899,0.16541 14.94179,0.49518l14.93971,0.83952c15.22059,0 23.39004,-5.81734 24.50836,-17.45203l-5.87248,-5.70499c-4.92269,1.90166 -9.00481,2.85249 -12.2495,2.85249c-5.14531,0 -9.17334,-2.1815 -12.08201,-6.54347c-2.57265,-3.80333 -3.85846,-8.39 -3.85846,-13.76001c0,-3.46731 2.34899,-6.15232 7.04697,-8.05398c3.24469,-1.34302 6.20849,-2.01402 8.8935,-2.01402c8.16633,0 15.32566,4.13934 21.47798,12.41699c5.59368,7.60769 8.39,15.66167 8.39,24.16298c0,7.60769 -2.74014,13.87236 -8.22147,18.79401c-0.44733,0.44733 -3.13233,2.40517 -8.05502,5.87352c-3.356,2.34899 -5.64881,4.58563 -6.87949,6.712c-0.44733,0.7823 -0.81143,2.15342 -1.09023,4.11021c-0.27984,1.95784 -0.64394,3.32791 -1.09127,4.11125c-0.44733,1.23067 -1.1745,3.02102 -2.1815,5.37001c-2.79632,4.92165 -9.62067,9.22848 -20.47097,12.92049c-9.06203,3.13233 -16.83617,4.69798 -23.3245,4.69798c-14.87833,0 -22.3175,-3.97081 -22.3175,-11.91348c0,-3.356 1.79035,-5.034 5.37001,-5.034c0.33498,0 6.54347,1.56565 18.62548,4.69798c2.57265,0.67203 4.36301,1.00701 5.37001,1.00701c4.69798,0 10.3468,-0.89466 16.94748,-2.68501c9.62067,-2.68397 15.26948,-6.37598 16.94748,-11.07396c-0.11131,-0.44837 -0.11131,-1.45434 0,-3.02102c0.22366,-4.69798 -1.59374,-7.41108 -5.45324,-8.13824c-3.8595,-0.72717 -9.31274,-1.09023 -16.36075,-1.09023l-16.61251,0c-3.01998,-0.11235 -7.32681,0.22366 -12.92049,1.00701c-5.92865,0.89466 -10.23548,1.34198 -12.92049,1.34198c-3.91464,0 -5.92865,-1.56669 -6.04101,-4.69798c2.79736,-9.62067 5.48237,-19.465 8.05502,-29.533c7.38299,-28.63834 15.60654,-64.09989 24.66857,-106.38547c1.1152,-1.11863 2.84313,-2.74066 5.1838,-4.8662z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: -25,
        strokeWidth: 1,
      },
    },
  };

  return <LetterRenderer {...props} />;
};
