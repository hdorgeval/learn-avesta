import { FC } from 'react';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterDj = (): Letter => ({
  pronunciation: {
    fr: 'like the letter j in jeans ;',
    en: 'like the letter j in just.',
  },
  transcription: 'j',
  render: (props?: LetterOwnProps) => {
    return <LetterDj {...props} />;
  },
});

/**
 * Letter j that is pronounced dj.
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:
 * @alias: j
 */
export const LetterDj: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/j/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 26,
      height: 40,
      zoom,
      path: {
        d: 'm88.11697,26.60173c1.74647,-9.67685 0.79187,-22.76601 -1.13477,-24.17612c-1.92663,-1.41011 -5.86563,8.61906 -10.42794,15.71525c-4.56377,7.09619 -6.26955,14.3545 -12.88723,16.07501c-6.61826,1.7203 -23.97279,-1.81158 -33.80996,-5.85852c-9.83717,-4.04694 -21.37053,-22.7406 -25.21261,-18.42333c-3.84208,4.31727 -2.87876,32.21031 2.16013,44.32677c5.03903,12.11563 23.68283,18.45568 31.6863,24.90917c8.00347,6.45349 13.01151,7.8351 13.64065,17.85546c0.62914,10.02036 2.20095,2.77072 -4.81547,41.59332c-7.01641,38.8226 3.56393,1.7788 5.81535,-6.64164c2.25142,-8.42044 5.17053,-17.41573 5.67267,-25.69919c0.50215,-8.2814 2.79507,-16.29226 -2.66009,-23.99128c-5.45516,-7.70108 -22.10302,-17.21976 -30.07089,-22.20903c-7.96787,-4.98927 -8.49056,-12.51276 -7.63578,-13.7843c0.85493,-1.27154 8.08547,4.73919 12.76475,6.15508c4.67928,1.4161 10.65824,1.63011 15.31093,2.3411c4.65269,0.71099 8.79902,1.02475 12.97717,0.52889c4.17815,-0.49585 8.49739,-1.56541 12.09203,-3.50442c3.59319,-1.9388 6.71707,-3.92675 9.47189,-8.12878c2.75628,-4.20204 6.38434,-10.1188 7.06287,-17.08344z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: 20,
        strokeWidth: 0.5,
      },
    },
  };

  return <LetterRenderer {...props} />;
};
