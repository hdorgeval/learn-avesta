import { FC } from 'react';
import dahadSound from './assets/sounds/words/dahad.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';
export const useLetterD = (): Letter => ({
  id: 'd',
  pronunciation: {
    fr: 'like the letter d in date ;',
    en: 'like the letter d in dad.',
  },
  transcription: 'd',
  sampleWord: { transcript: 'dahad', audioUrl: dahadSound },
  render: (props?: LetterOwnProps) => {
    return <LetterD {...props} />;
  },
});

/**
 * Letter D
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/PL/0064.mp3
 * @alias: d
 */
export const LetterD: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/d/',
    style: {
      marginLeft: '-32px',
    },
    overridenStyle,
    svg: {
      width: 56,
      height: 40,
      zoom,
      path: {
        d: 'm103.64882,10.203973c-3.036258,0 -5.588588,1.758588 -7.65634,5.275831c-1.550651,2.655373 -2.325977,4.84597 -2.325977,6.571791c0,5.6413 3.844756,8.461379 11.532968,8.461379c2.519808,0 4.490644,-0.232321 5.911858,-0.696962c3.747841,-1.194505 5.62111,-3.649988 5.62111,-7.36739c0,-2.322939 -1.598784,-4.944472 -4.797002,-7.864529c-3.198218,-2.920058 -5.960641,-4.38012 -8.286617,-4.38012zm-0.290747,-8.703973c7.753256,0 14.79623,3.70169 21.127622,11.105069c4.845785,5.669232 8.884373,13.005668 12.114462,22.009777c2.71364,7.60347 4.070459,13.60621 4.070459,18.008219c0,14.673812 -11.306615,25.878926 -33.920494,33.615343c-17.18595,5.869793 -37.183106,8.971209 -59.990817,9.304247c-1.033551,0 -3.972893,0.133618 -8.818678,0.400183l-8.722413,0.300137c-1.357145,0 -3.408506,0.050359 -6.154472,0.150404c-2.745966,0.100046 -4.797327,0.149733 -6.154147,0.149733c-9.756159,0 -14.892691,-1.133403 -15.409596,-3.401553c0.775326,-0.733221 2.745966,-1.100502 5.911858,-1.100502c3.230545,0 5.62111,0 7.171762,0c8.270161,-0.76545 17.445151,-1.499342 27.523733,-2.201005c13.503804,-1.000457 27.620974,-3.434453 42.35216,-7.303333c12.146984,-3.201461 20.190987,-5.435367 24.132009,-6.703059c7.042974,-2.267478 12.308294,-4.735047 15.797259,-7.403379c5.169054,-3.934682 7.753256,-8.970537 7.753256,-15.106895c0,-8.003653 -2.229061,-13.206028 -6.687183,-15.607123c-2.971865,-1.600731 -8.819329,-2.401096 -17.541741,-2.401096c-0.775326,0 -4.296162,0.633846 -10.563811,1.900868c-1.162988,0.200091 -3.23009,0.600274 -6.202605,1.200548c-1.679438,0.333709 -2.681117,0.500228 -3.004387,0.500228c-3.165696,0 -4.748869,-2.967798 -4.748869,-8.904064c0,-1.867295 0.84037,-4.968711 2.519808,-9.303978c4.975223,-12.805845 10.790165,-19.208767 17.444826,-19.208767z',
        fill,
        scaleX: 0.4,
        scaleY: 0.42,
        translateX: 0,
        translateY: 15,
        strokeWidth: 1,
      },
    },
  };

  return <LetterRenderer {...props} />;
};
