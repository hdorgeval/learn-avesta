import { FC } from 'react';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterT = (): Letter => ({
  id: 't',
  pronunciation: {
    fr: 'like the letter t in table ; ',
    en: 'like the letter t in tea, getting.',
  },
  transcription: 't',
  render: (props?: LetterOwnProps) => {
    return <LetterT {...props} />;
  },
});

/**
 * Letter T
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/PL/0074.mp3
 * @alias: t
 */
export const LetterT: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/t/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 40,
      height: 24,
      zoom,
      path: {
        d: 'm47.777775,23.354944c1.814062,-2.087828 3.075191,-4.583451 6.649309,-7.18285c3.574119,-2.59946 10.621098,-6.536759 14.794176,-8.413846c4.172465,-1.877026 7.062321,-2.459109 10.241839,-2.848617c3.179517,-0.389508 7.042683,-0.441119 10.656692,-0.096226c3.613395,0.344954 7.658826,0.96349 11.024905,2.165828c3.366692,1.202338 6.732771,3.227876 9.172794,5.048259c2.43941,1.820444 3.99695,3.866725 5.465505,5.874099c1.469169,2.007312 2.772029,3.993943 3.348282,6.17008c0.576253,2.176076 0.900894,4.087714 0.109236,6.886745c-0.791658,2.799645 -2.751163,7.089324 -4.858568,9.909834c-2.108018,2.819896 -4.606956,5.193641 -7.786473,7.011385c-3.179517,1.817744 -7.591934,3.051257 -11.290018,3.895078c-3.698698,0.844435 -6.748113,1.104025 -10.90094,1.169076c-4.152827,0.064437 -9.927631,-0.324641 -14.015406,-0.779384c-4.087776,-0.454129 -7.235995,-1.17644 -10.511862,-1.947846c-3.275253,-0.770792 -6.155904,-1.575951 -9.140883,-2.679975c-2.984978,-1.103411 -6.203158,-2.570739 -8.767147,-3.941718c-2.564602,-1.370979 -5.061085,-3.181359 -6.618625,-4.28477c-1.55754,-1.104025 -2.136248,-3.407196 -2.725388,-2.337538c-0.58914,1.070272 -0.420376,5.770508 -0.809454,8.756714c-0.389692,2.986819 -0.854254,6.105582 -1.526242,9.161748c-0.671988,3.05678 -1.339067,6.105582 -2.507529,9.17709c-1.167848,3.072122 -3.043892,6.710678 -4.500174,9.255642c-1.456282,2.544964 -2.234438,4.042976 -4.235675,6.014142c-2.001237,1.971166 -11.885909,0.461493 -13.844187,-0.265113c-1.958278,-0.725993 1.286904,-2.270646 2.093903,-4.093299c0.807613,-1.823267 3.81223,-7.903074 5.178299,-11.705485c1.366683,-3.802411 2.323423,-7.440353 3.021186,-11.109594c0.698377,-3.66924 1.232899,-7.011385 1.167848,-10.906463c-0.064437,-3.895691 -0.454129,-8.245512 -1.556926,-12.46523c-1.103411,-4.219719 -3.698698,-9.478472 -5.061085,-12.85437c-1.363001,-3.375898 -2.465798,-5.777995 -3.114467,-7.401016c-0.649282,-1.623021 -1.881567,-1.882733 -0.77877,-2.337169c1.102797,-0.454436 4.835248,-0.688128 7.396781,-0.389508c2.562147,0.298621 6.02703,1.012769 7.973648,2.181354c1.946618,1.168585 2.43941,3.274639 3.706062,4.830154c1.266652,1.555454 2.725388,3.204495 3.893237,4.502936c1.167848,1.29838 1.492489,1.924219 3.114467,3.287588c1.621977,1.363369 10.132602,8.642138 11.30536,8.086751c1.173371,-0.556001 2.421613,-3.256842 4.236288,-5.344486z M63.480672,26.427924L63.480672999999996,26.427923999999997C62.26925299999999,27.519060999999997 61.20450399999999,28.654997999999996 60.441075999999995,29.673719999999996C59.677034,30.692441999999996 58.898877999999996,31.593335999999997 58.898877999999996,32.540257C58.898877999999996,33.486564 58.93876699999999,34.987645 59.73594799999999,35.882402C60.53312899999999,36.777772 62.25268199999999,37.369981 63.68318899999999,37.911254C65.11369599999999,38.451913 66.628892,38.81092 68.31776099999999,39.128197C70.00663099999998,39.445473 71.54821499999998,39.633876 73.81579199999999,39.816141C76.08336899999999,39.998407 79.28743399999999,40.255542 81.92199699999999,40.221789C84.55655999999999,40.188037 87.123003,40.120531 89.622554,39.613011C92.12210499999999,39.106104 94.925432,38.091678 96.918077,37.179124C98.91072199999999,36.26657 100.363321,35.387155 101.579037,34.136459C102.794753,32.885763 103.807952,31.127547 104.2136,29.67372C104.618634,28.219893 104.618634,26.833572 104.010469,25.414112C103.402918,23.994038 101.815307,22.235884 100.565838,21.154013C99.315756,20.072143 98.066287,19.565052 96.512429,18.922705C94.95918499999999,18.280296 92.922355,17.608553 91.243918,17.299868C89.56548099999999,16.991183 88.27735,16.994128 86.44180899999999,17.070594C84.606268,17.146998 82.131878,17.382164 80.230059,17.758477C78.32824000000001,18.13479 76.472447,18.796284999999997 75.031508,19.328352C73.591182,19.860481 72.806889,20.317618 71.586877,20.951189C70.366251,21.584699 69.06093700000001,22.216797 67.709596,23.129597C66.358869,24.042519000000002 64.692092,25.337400000000002 63.480672,26.427924z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: 0,
        strokeWidth: 1,
      },
    },
  };

  return <LetterRenderer {...props} />;
};
