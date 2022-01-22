import { FC } from 'react';
import { Letter, LetterOwnProps } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterC = (): Letter => ({
  pronunciation: {
    'fr': 'like the sequence tch in atchoum ;',
    'en': 'like the sequence ch in chair, church, check.'
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
export const LetterC: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound, disableTranslate }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/c/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 41,
      height: 50,
      zoom,
      path: {
        d: 'm127.826195,1.5c4.52554,0 6.789124,5.605201 6.789124,16.815503c0,10.409631 -2.263584,19.968007 -6.789124,28.676035c-6.46529,12.412114 -16.326769,18.617164 -29.581182,18.617164c-2.748521,0 -6.829806,-0.575363 -12.243856,-1.726088c-5.415677,-1.150725 -9.496962,-1.727096 -12.245483,-1.727096c-8.728873,0 -16.406507,6.305814 -23.034527,18.917441c-3.718396,7.907962 -9.537645,19.668133 -17.457747,35.282528c-6.789124,12.611627 -14.951694,18.917441 -24.489339,18.917441c-3.555665,0 -5.980352,-1.000587 -7.274061,-3.002768c8.405039,-8.207231 16.811706,-19.668133 25.216745,-34.381698c9.213811,-15.914672 13.820716,-27.875364 13.820716,-35.883082c0,-4.504153 -1.93975,-11.184808 -5.819249,-20.042975c-3.879499,-8.858167 -5.819249,-15.539427 -5.819249,-20.04358c0,-2.90271 1.858384,-6.430962 5.57678,-10.584758c3.718396,-4.153796 7.597895,-6.831298 11.638498,-8.032405l9.698748,20.719102c3.879499,8.508112 8.728873,14.763544 14.548122,18.766899c7.112958,5.00495 17.133913,7.907962 30.066119,8.708028c10.50752,-3.402802 15.760466,-8.457126 15.760466,-15.16398c0,-2.301451 -1.130978,-5.654878 -3.394562,-10.058871c-2.263584,-4.404094 -3.394562,-7.757118 -3.394562,-10.059274c0,-2.402215 2.182218,-5.455063 6.546655,-9.158443c4.364437,-3.703381 8.325301,-5.555121 11.880967,-5.555121z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: 45,
        strokeWidth: 2,
      }
    }
  };
  
  return (
    <LetterRenderer {...props} />
  );
};
