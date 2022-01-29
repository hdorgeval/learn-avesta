import { FC } from 'react';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterC = (): Letter => ({
  pronunciation: {
    fr: 'like the sequence tch in atchoum ;',
    en: 'like the sequence ch in chair, church, check.',
  },
  transcription: 'c',
  render: (props?: LetterOwnProps) => {
    return <LetterC {...props} />;
  },
});

/**
 * Letter C sounds like Tch in French
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/JH/0078.mp3
 * @alias: c
 */
export const LetterC: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/c/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 30,
      height: 42,
      zoom,
      path: {
        d: 'm93.28663,2.04553c3.3057,0 4.95915,5.74206 4.95915,17.22608c0,10.6638 -1.65345,20.45556 -4.95915,29.37621c-4.7226,12.71518 -11.92597,19.07173 -21.60772,19.07173c-2.00767,0 -4.98887,-0.58941 -8.94359,-1.76823c-3.95591,-1.17882 -6.9371,-1.76927 -8.94478,-1.76927c-6.37605,0 -11.98422,6.45978 -16.82569,19.37934c-2.71612,8.10105 -6.96682,20.14836 -12.7521,36.14401c-4.95915,12.91956 -10.92154,19.37934 -17.88836,19.37934c-2.59725,0 -4.36838,-1.02502 -5.31337,-3.07609c6.1395,-8.40762 12.2802,-20.14836 18.4197,-35.22118c6.73027,-16.30325 10.09541,-28.55599 10.09541,-36.75923c0,-4.61413 -1.4169,-11.4579 -4.2507,-20.53236c-2.8338,-9.07445 -4.2507,-15.91885 -4.2507,-20.53298c0,-2.97358 1.35747,-6.58798 4.07359,-10.8432c2.71612,-4.25522 5.54992,-6.9981 8.5014,-8.22853l7.0845,21.22499c2.8338,8.71585 6.37605,15.12402 10.62675,19.22512c5.1957,5.12715 12.51555,8.10105 21.96195,8.92065c7.67527,-3.48589 11.51231,-8.66362 11.51231,-15.53423c0,-2.35764 -0.82613,-5.79295 -2.47957,-10.30447c-1.65345,-4.51163 -2.47957,-7.94652 -2.47957,-10.30489c0,-2.46087 1.59401,-5.58826 4.78204,-9.38206c3.18802,-3.7938 6.08126,-5.69076 8.67851,-5.69076z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: 30,
        disableZoomOnYTranslation: true,
        strokeWidth: 2,
      },
    },
  };

  return <LetterRenderer {...props} />;
};
