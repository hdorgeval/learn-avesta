import { FC } from 'react';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterL = (): Letter => ({
  id: 'l',
  pronunciation: {
    fr: 'like the letter l in bal ;',
    en: 'like the letter l in latex.',
  },
  transcription: 'l',
  additionalDetails: 'This letter is a later invention used for writing Middle Persian',
  render: (props?: LetterOwnProps) => {
    return <LetterL {...props} />;
  },
});

/**
 * Letter L
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:
 * @alias: l
 */
export const LetterL: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/l/',
    style: {
      marginLeft: '-15px',
    },
    overridenStyle,
    svg: {
      width: 30,
      height: 60,
      zoom,
      path: {
        d: 'm48.926536,1.5c9.46452,0 18.175517,8.764804 26.132989,26.294304c6.238225,13.765561 11.561612,31.886621 15.97016,54.36307c3.657189,18.820343 5.484701,33.875664 5.484701,45.167696c0,16.884999 -2.742351,30.112808 -8.227052,39.683428c-5.699066,10.109779 -15.916028,18.766643 -30.649802,25.971674c-1.3977,0.645259 -3.817421,1.774462 -7.259164,3.38761c-8.925361,2.689301 -18.873825,5.162072 -29.843228,7.420478c-0.645259,-0.107182 -1.774462,-0.161315 -3.38761,-0.161315c-1.827512,0 -5.914513,0.322629 -12.259921,0.967888c-2.150142,-1.075071 -3.279345,-2.956715 -3.38761,-5.646016c0,0 0,-2.419721 0,-7.259164c4.409631,-0.214365 11.400297,-0.698309 20.970917,-1.451833c4.087001,-0.429812 10.593724,-2.177208 19.519084,-5.242188c8.926444,-3.06498 15.163586,-5.834397 18.712511,-8.308251c1.505965,-1.075071 4.275382,-3.763289 8.308251,-8.065737c4.032869,-4.301366 6.264209,-7.043716 6.694021,-8.227052c2.258406,-6.45259 3.38761,-13.119544 3.38761,-20.003029c0,-3.548924 -0.080116,-8.898295 -0.241431,-16.050276c-0.161315,-7.151981 -0.242513,-12.502434 -0.242513,-16.051359c0,-8.065737 -2.365589,-20.540239 -7.097849,-37.424588c-5.484701,-19.465277 -10.861138,-29.197969 -16.131475,-29.197969c-5.053807,0 -9.140808,1.720763 -12.259921,5.162072c-0.859624,0.967888 -2.903665,4.247991 -6.12996,9.8402c-2.258406,3.979169 -4.678128,6.291275 -7.259164,6.936534c5.484701,-9.24864 8.926444,-15.271093 10.324144,-18.067252c4.194183,-8.280752 6.291275,-14.625834 6.291275,-19.03514c0,-2.150791 -0.483944,-5.538401 -1.451833,-10.162829c-0.967888,-4.62432 -1.3977,-8.119437 -1.290518,-10.485459l0.161315,-2.419721c1.183336,-1.290518 2.903665,-1.935777 5.162072,-1.935777z m35.61214,64.75102c-0.15628,-0.43693 0.46776,-3.71372 0.93444,-5.24298c0.46776,-1.52916 1.3095,-2.87111 1.87103,-3.93218c0.56153,-1.06118 0.90426,-1.59167 1.49704,-2.43428c0.5917,-0.84261 0.873,-1.40435 2.05749,-2.62149c1.18448,-1.21714 3.17946,-3.27678 5.05049,-4.68124c1.87103,-1.40435 4.05354,-2.77755 6.17354,-3.74497c2.12,-0.96742 4.45879,-1.68522 6.54753,-2.05975c2.08874,-0.37453 4.36502,-0.28087 5.986,-0.18721c1.62099,0.09355 2.65027,0.40568 3.74098,0.74895c1.09179,0.34327 1.53907,0.31213 2.80655,1.3108c1.2664,0.99857 3.73559,2.87111 4.79613,4.68124c1.05946,1.81003 1.36555,4.46278 1.56386,6.17914c0.19831,1.71648 -0.12502,2.7463 -0.37399,4.1195c-0.25005,1.3732 -0.59278,2.71515 -1.12305,4.1195c-0.52919,1.40435 -0.81049,2.49668 -2.05749,4.30671c-1.247,1.81014 -3.86601,4.93096 -5.42448,6.55324c-1.55955,1.62314 -2.5565,2.21592 -3.92852,3.18377c-1.37202,0.96785 -3.08677,1.96587 -4.30251,2.62117c-1.21574,0.65529 -1.9648,0.93659 -2.993,1.31058c-1.02928,0.37507 -2.37005,0.7178 -3.18054,0.93659c-0.81049,0.21879 -1.09071,0.2813 -1.6835,0.37507c-0.59278,0.09269 -1.12197,0.1552 -1.87103,0.18646c-0.74798,0.03126 -1.90121,0.03126 -2.61901,0c-0.71673,-0.03126 -1.6835,-0.18646 -1.6835,-0.18646c-0.5917,-0.06251 -1.34076,-0.06251 -1.86995,-0.18753c-0.53027,-0.12502 -1.6835,-0.34381 -1.3095,-0.56153c0.37399,-0.21879 3.55345,-0.74906 3.55345,-0.74906c1.02928,-0.21879 1.71475,-0.2813 2.61901,-0.5626c0.90426,-0.28022 1.9648,-0.74798 2.80655,-1.12305c0.84175,-0.37399 1.15323,-0.4365 2.24502,-1.12305c1.09071,-0.68655 2.89924,-1.71691 4.30251,-2.99624c1.4022,-1.27933 2.93049,-2.80892 4.11497,-4.68135c1.18448,-1.87254 2.43256,-4.93096 2.993,-6.55378c0.56153,-1.62282 0.40525,-2.18456 0.37399,-3.18312c-0.03126,-0.99867 -0.09269,-1.9038 -0.56045,-2.80881c-0.46776,-0.90501 -1.46579,-1.96609 -2.24502,-2.62149c-0.77924,-0.6554 -1.58973,-0.96742 -2.43148,-1.31069c-0.84283,-0.34327 -1.65332,-0.62414 -2.61901,-0.74906c-0.96677,-0.12481 -2.24502,-0.0624 -3.18054,0c-0.93552,0.0624 -1.52829,0.18732 -2.43148,0.37453c-0.90426,0.18732 -1.83977,0.31213 -2.993,0.74895c-1.15431,0.43693 -2.77529,1.2484 -3.92852,1.87254c-0.81157,0.46808 -1.9842,1.18459 -2.993,1.87254c-0.79217,0.56303 -2.19221,1.47451 -3.06521,2.25472c-0.68547,0.59299 -1.76756,1.89593 -2.17281,2.42641c-0.40525,0.53059 -0.7178,0.84272 -1.12305,1.49801c-0.40525,0.6554 -1.71475,3.05842 -1.86995,2.62149l0,0.00001l0.00001,0z',
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