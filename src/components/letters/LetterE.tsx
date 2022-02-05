import { FC } from 'react';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterE = (): Letter => ({
  id: 'e',
  pronunciation: {
    fr: 'like the letter é in été.',
  },
  transcription: 'e',
  render: (props?: LetterOwnProps) => {
    return <LetterE {...props} />;
  },
});

/**
 * Letter E sounds like 'é' in French
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/JH/0065.mp3
 * @alias: e
 */
export const LetterE: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/e/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 51,
      height: 53,
      zoom,
      path: {
        d: 'm12.387801,1.5c0.806233,0 1.572682,0.163307 2.298536,0.489839c2.983794,3.673792 5.766232,8.286416 8.347315,13.837952c2.822222,5.95968 4.556476,11.10299 5.20195,15.4296c1.128564,0 2.84252,0.143007 5.141056,0.42902c2.298536,0.286013 4.012492,0.428198 5.141868,0.428198l7.137559,0c2.903414,0.653393 5.362709,0.979678 7.37951,0.979678c3.225745,0 6.411705,-2.296326 9.55707,-6.889964c1.128564,-1.639153 3.467696,-5.944393 7.016583,-12.915641c2.33832,-4.593556 4.072574,-6.890292 5.20195,-6.890292c1.693658,0 2.983794,1.102138 3.871218,3.306413c0.725853,1.714436 1.08878,3.551333 1.08878,5.510689c0,1.142985 -2.117478,5.08208 -6.351624,11.817366c-4.234145,6.735368 -6.350812,12.184416 -6.350812,16.348048c0,10.123887 2.197858,17.511744 6.592763,22.165215c4.395716,4.65347 11.553573,6.980206 21.47357,6.980206c7.177343,0 13.065362,-1.305963 17.662434,-3.918712c5.725636,-3.265319 8.589266,-8.245075 8.589266,-14.940089c0,-4.408551 -1.734254,-7.91879 -5.20195,-10.531538c-2.984605,-1.550883 -5.968399,-3.101766 -8.952192,-4.65347c-3.871218,-2.449195 -5.806828,-4.857296 -5.806828,-7.225125c0,-6.93903 2.862818,-10.40875 8.589266,-10.40875c5.403305,0 9.799021,2.816574 13.186337,8.449723c2.983794,4.898061 4.476096,10.246018 4.476096,16.041898c0,10.286619 -3.629267,18.961536 -10.887802,26.023108c-7.258534,7.061572 -15.968776,10.592357 -26.130724,10.592357c-10.485091,0 -17.904385,-3.459282 -22.259505,-10.377847l-7.258534,-19.53685c-2.742654,-7.244028 -7.29913,-11.151234 -13.67024,-11.721617c-0.725853,0 -1.653874,0 -2.782438,0c-1.371327,0 -3.44821,-0.101913 -6.230648,-0.305738c-2.782438,-0.203826 -4.859321,-0.30656 -6.229836,-0.30656c-2.016801,0 -3.024389,0.286013 -3.024389,0.857218c0,0.163554 0.120976,0.408473 0.362927,0.734758c-0.081192,0.816946 -0.081192,1.75553 0,2.816574c0,1.143232 0,2.041544 0,2.694114c0,27.594537 -5.581115,50.49451 -16.744156,68.699919c-2.971615,4.89839 -5.219,7.919612 -6.743779,9.062021c-0.964557,0.734758 -1.847922,1.184325 -2.650908,1.347057c-1.285264,-0.244919 -1.92749,-1.224597 -1.92749,-2.939034c0,-0.734758 0.201355,-1.509789 0.604878,-2.326735l3.26634,-6.857746c10.887802,-22.858879 16.331702,-42.166426 16.331702,-57.923461c0,-12.735814 -5.20195,-27.471502 -15.605849,-44.207641c-0.483902,-0.816371 -0.725853,-1.836896 -0.725853,-3.061494c0,-2.694114 0.765637,-4.408551 2.298536,-5.143309c1.370515,-1.30621 2.943198,-1.959356 4.718047,-1.959356l0,-0.000002z',
        fill,
        scaleX: 0.4,
        scaleY: 0.42,
        translateX: 0,
        translateY: 30,
        strokeWidth: 1,
      },
    },
  };

  return <LetterRenderer {...props} />;
};
