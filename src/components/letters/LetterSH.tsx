import { FC } from 'react';
import letterSHSound from './assets/sounds/letter-sh.mp3';
import ushtaSound from './assets/sounds/words/ushta.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';
export const useLetterSH = (): Letter => ({
  id: 'sh',
  pronunciation: {
    fr: 'like the sequence ch in chien ;',
    en: 'like the sequence sh in harsh.',
  },
  transcription: 'š',
  sampleWord: { transcript: 'ušta', audioUrl: ushtaSound },
  render: (props?: LetterOwnProps) => {
    return <LetterSH {...props} />;
  },
});

/**
 * Letter SH sounds
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/JH/0283.mp3
 * @alias: sh
 */
export const LetterSH: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    audioUrl: letterSHSound,
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 50,
      height: 33,
      zoom,
      path: {
        d: 'm24.603551,1.045508c3.565732,0.792358 6.061744,3.882659 7.488037,9.270903c0.475431,1.664008 1.624921,6.378672 3.446874,14.14407c1.743779,4.912733 4.556479,7.36918 8.438899,7.36918c2.932356,0 6.022657,-2.258297 9.270903,-6.774891c1.268348,-1.822512 3.565732,-5.942887 6.893749,-12.361204c2.298182,-4.516594 4.002076,-6.774891 5.110883,-6.774891c3.249044,0 4.873167,2.892152 4.873167,8.676615c0,1.109286 -2.059669,4.932596 -6.180602,11.469771c-4.120136,6.537175 -6.180602,11.826345 -6.180602,15.867827c0,9.825307 2.139439,16.996656 6.418318,21.51325c4.278878,4.516594 11.291485,6.774891 21.037819,6.774891c6.973519,0 12.757663,-1.307435 17.353229,-3.922305c5.626199,-3.170071 8.438899,-8.003353 8.438899,-14.500644c0,-4.199906 -1.664008,-7.567808 -4.992025,-10.102907c-2.931558,-1.585036 -5.863116,-3.130266 -8.795472,-4.635771c-3.803447,-2.377155 -5.705171,-4.714743 -5.705171,-7.012606c0,-6.735325 2.813498,-10.102907 8.438899,-10.102907c5.071795,0 9.350674,2.773294 12.836635,8.320041c3.011329,4.833521 4.516594,9.98405 4.516594,15.451825c0,9.98405 -3.565732,18.403006 -10.697196,25.25687c-7.131464,6.853863 -15.728308,10.281593 -25.792128,10.281593c-10.459481,0 -17.82866,-3.486759 -22.107539,-10.459481c-1.584238,-4.358649 -4.001278,-10.895824 -7.250322,-19.611526c-2.772815,-6.973519 -7.804725,-10.4598 -15.094932,-10.4598c-2.139439,0 -5.249683,0.495214 -9.329933,1.485642c-4.081048,0.990747 -7.191292,1.486121 -9.330731,1.486121c-11.806003,0 -17.709802,-1.426293 -17.709802,-4.279198l0,-4.278878c1.426293,-0.396219 2.456925,-0.594289 3.090301,-0.594289c1.109605,0 2.773613,0.138641 4.992025,0.416002c2.21921,0.277282 3.883218,0.416002 4.992025,0.416002c3.011329,0 5.527283,-0.832004 7.547865,-2.496012c2.020581,-1.664008 3.030473,-3.961951 3.030473,-6.893749c0,-1.584796 -0.336631,-3.922305 -1.009892,-7.012606c-0.674059,-3.090301 -1.01069,-5.42789 -1.01069,-7.012606c0,-3.645024 0.990747,-6.616467 2.971443,-8.91433z',
        fill,
        scaleX: 0.41,
        scaleY: 0.41,
        translateX: 0,
        translateY: 15,
        disableZoomOnYTranslation: true,
        strokeWidth: 1,
      },
    },
  };

  return <LetterRenderer {...props} />;
};
