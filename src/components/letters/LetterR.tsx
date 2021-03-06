import { FC } from 'react';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterR = (): Letter => ({
  id: 'r',
  pronunciation: {
    fr: 'like the letter r in rue ;',
    en: 'like the letter r in red, try.',
  },
  transcription: 'r',
  isPreferred: true,
  render: (props?: LetterOwnProps) => {
    return <LetterR {...props} />;
  },
});

/**
 * Letter R
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/JW/0280.mp3
 * @alias: r
 */
export const LetterR: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/r/',
    style: {
      marginLeft: '-15px',
    },
    overridenStyle,
    svg: {
      width: 30,
      height: 60,
      zoom,
      path: {
        d: 'm48.926536,1.5c9.46452,0 18.175517,8.764804 26.132989,26.294304c6.238225,13.765561 11.561612,31.886621 15.97016,54.36307c3.657189,18.820343 5.484701,33.875664 5.484701,45.167696c0,16.884999 -2.742351,30.112808 -8.227052,39.683428c-5.699066,10.109779 -15.916028,18.766643 -30.649802,25.971674c-1.3977,0.645259 -3.817421,1.774462 -7.259164,3.38761c-8.925361,2.689301 -18.873825,5.162072 -29.843228,7.420478c-0.645259,-0.107182 -1.774462,-0.161315 -3.38761,-0.161315c-1.827512,0 -5.914513,0.322629 -12.259921,0.967888c-2.150142,-1.075071 -3.279345,-2.956715 -3.38761,-5.646016c0,0 0,-2.419721 0,-7.259164c4.409631,-0.214365 11.400297,-0.698309 20.970917,-1.451833c4.087001,-0.429812 10.593724,-2.177208 19.519084,-5.242188c8.926444,-3.06498 15.163586,-5.834397 18.712511,-8.308251c1.505965,-1.075071 4.275382,-3.763289 8.308251,-8.065737c4.032869,-4.301366 6.264209,-7.043716 6.694021,-8.227052c2.258406,-6.45259 3.38761,-13.119544 3.38761,-20.003029c0,-3.548924 -0.080116,-8.898295 -0.241431,-16.050276c-0.161315,-7.151981 -0.242513,-12.502434 -0.242513,-16.051359c0,-8.065737 -2.365589,-20.540239 -7.097849,-37.424588c-5.484701,-19.465277 -10.861138,-29.197969 -16.131475,-29.197969c-5.053807,0 -9.140808,1.720763 -12.259921,5.162072c-0.859624,0.967888 -2.903665,4.247991 -6.12996,9.8402c-2.258406,3.979169 -4.678128,6.291275 -7.259164,6.936534c5.484701,-9.24864 8.926444,-15.271093 10.324144,-18.067252c4.194183,-8.280752 6.291275,-14.625834 6.291275,-19.03514c0,-2.150791 -0.483944,-5.538401 -1.451833,-10.162829c-0.967888,-4.62432 -1.3977,-8.119437 -1.290518,-10.485459l0.161315,-2.419721c1.183336,-1.290518 2.903665,-1.935777 5.162072,-1.935777z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: -30,
        strokeWidth: 1,
        disableZoomOnYTranslation: true,
      },
    },
  };

  return <LetterRenderer {...props} />;
};
