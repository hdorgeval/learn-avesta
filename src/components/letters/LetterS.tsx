import { FC } from 'react';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterS= (): Letter => ({
  pronunciation: {
    'fr': 'like the letter s in solide ;',
    'en': 'like the letter s in sun, miss.'
  },
  transcription: 's',
  render: (props?: LetterOwnProps) => {
    return <LetterS {...props} />;
  },
});

/**
 * Letter S 
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/JW/0073.mp3
 * @alias: s
 */
export const LetterS: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound, disableTranslate }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/s/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 32,
      height: 24,
      zoom,
      path: {
        d: 'm80.76993,1.5c1.96507,2.89173 5.78113,7.40162 11.44817,13.52966c5.0873,5.66704 8.67286,10.35039 10.75434,14.05003c3.00581,5.32013 4.50989,11.27472 4.50989,17.86609c0,8.67286 -2.13969,15.7846 -6.41792,21.33523c-4.6263,6.01396 -11.15947,9.01977 -19.60066,9.01977c-3.46914,0 -8.55761,-0.57741 -15.26423,-1.73457c-6.70779,-1.15599 -11.79509,-1.73457 -15.26423,-1.73457c-3.58556,0 -8.81838,0.78114 -15.69846,2.34225c-6.88008,1.56111 -12.1129,2.34109 -15.69729,2.34109c-12.02675,0 -18.03955,-2.31199 -18.03955,-6.93829c0,-2.77531 3.35273,-4.16297 10.06052,-4.16297c0.92433,0 2.37019,0.11641 4.33643,0.34691c1.96507,0.23166 3.41094,0.34691 4.33643,0.34691c14.68565,0 22.02906,-4.70895 22.02906,-14.12803c0,-9.88589 -6.99649,-17.15363 -20.98832,-21.80438c1.15599,-5.69848 2.60186,-10.75667 4.33643,-15.17459c2.89056,-7.32711 5.89754,-10.99067 9.01977,-10.99067c2.4284,0 5.43422,5.37717 9.01977,16.13152c5.20372,15.4959 8.90336,25.44116 11.10126,29.83463c5.43422,10.75434 11.50522,16.13152 18.213,16.13152c13.06633,0 19.60066,-6.64842 19.60066,-19.94757c0,-10.06052 -3.23864,-15.09077 -9.7136,-15.09077c-0.81024,0 -1.88009,0.28987 -3.20954,0.86729c-1.32945,0.57858 -2.3993,0.86729 -3.20838,0.86729c-1.15716,0 -2.4284,-0.46216 -3.81606,-1.38766c-2.08149,-1.38766 -3.29569,-2.13853 -3.6426,-2.25494c0.80908,-3.69964 2.13853,-9.25027 3.98951,-16.65189c2.19674,-8.20953 4.79859,-12.54596 7.80557,-13.00929z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: -5,
        strokeWidth: 1,
      }
    }
  };
  
  return (
    <LetterRenderer {...props} />
  );
};
