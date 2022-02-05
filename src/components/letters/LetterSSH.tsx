import { FC } from 'react';
import letterSSHSound from '../../assets/sounds/letter-ssh.mp3';
import wordSampleSound from '../../assets/sounds/words/ashaa.mp3';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';
export const useLetterSSH = (): Letter => ({
  pronunciation: {
    fr: 'like the sequence ch in château ;',
    en: 'like the sequence sh in ashame.',
  },
  transcription: 'ṣ̌',
  alternateTranscriptions: ['ṣ'],
  sampleWord: { transcript: 'aṣā', audioUrl: wordSampleSound },
  render: (props?: LetterOwnProps) => {
    return <LetterSSH {...props} />;
  },
});

/**
 * Letter SSH sounds like emphasized SH sound
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/JH/0282.mp3
 * @alias: ssh
 */
export const LetterSSH: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    audioUrl: letterSSHSound,
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 50,
      height: 46,
      zoom,
      path: {
        d: 'm147.44116,114.13051l0.25435,0.12717l-0.49714,-0.12409c0.05704,0.01002 0.11253,0.01387 0.16571,0.01156l0.07708,-0.01464zm-106.0415,-78.19636c-10.36051,0 -19.31131,1.6579 -26.85394,4.97292c-5.71902,9.69766 -8.57852,19.06313 -8.57852,28.09717c0,7.79081 2.07257,15.29182 6.21615,22.50225c4.80721,8.28872 10.85765,12.43231 18.15132,12.43231c2.65217,0 7.99814,-4.06112 16.03791,-12.18335c6.21615,-6.2994 11.02336,-11.64459 14.42163,-16.03791c5.88396,-7.6251 8.82671,-13.26087 8.82671,-16.90732c0,-7.45938 -2.94275,-13.26164 -8.82671,-17.40523c-5.13864,-3.64722 -11.60374,-5.47083 -19.39455,-5.47083zm-28.09717,-32.57241c1.07752,0 2.40322,2.07203 3.97865,6.21615c2.23751,6.05036 3.85378,9.94585 4.84806,11.68637c2.32075,4.22698 5.05616,6.34048 8.20548,6.34048c4.22683,0 7.50101,-2.11349 9.82175,-6.34048c0.4139,-0.74594 1.78199,-4.64134 4.10274,-11.68637c1.40894,-4.22698 3.23178,-6.29901 5.47006,-6.21615c1.07752,0.49729 1.90608,3.02522 2.48646,7.58371c0.74609,5.63601 1.61628,9.49002 2.61055,11.56205c1.90608,3.97834 5.09701,5.96751 9.5728,5.96751c3.48151,0 6.42349,-2.07203 8.82748,-6.21615c1.40894,-3.48105 2.77627,-6.96209 4.10274,-10.44314c2.40322,-5.05578 4.55826,-7.58371 6.46434,-7.58371c1.49219,0 2.23751,2.32067 2.23751,6.96209c0,3.2324 -1.4706,8.72335 -4.41335,16.47285c-2.94198,7.74927 -4.41335,14.06947 -4.41335,18.95915c0,6.21615 1.49219,11.43803 4.47578,15.66486c3.31503,4.80721 7.95652,7.21043 13.92449,7.21043c6.54758,0 11.72784,-2.07179 15.54,-6.21615c3.56398,-4.06112 5.34597,-9.40709 5.34597,-16.03714c0,-1.49219 -0.08324,-3.06684 -0.24895,-4.72474c-0.4139,-0.16571 -2.23751,-1.3257 -5.47006,-3.48074c-2.15504,-1.40894 -4.14359,-2.27913 -5.9672,-2.61055c-2.32075,-0.41467 -3.48151,-1.82361 -3.48151,-4.2276c0,-11.76899 2.85951,-17.65365 8.57852,-17.65365c8.86833,0 13.30249,8.5369 13.30249,25.61094c0,7.95652 -2.73465,16.28609 -8.20548,24.98871c-6.13291,9.69689 -12.97107,14.54572 -20.51292,14.54572c-3.72969,0 -8.62014,-1.24323 -14.66981,-3.72969c-6.05044,-2.48646 -9.07566,-3.72969 -9.07566,-3.72969c-2.32075,0 -6.96225,4.22683 -13.92449,12.68126c-2.90113,3.64645 -7.33529,9.15813 -13.30249,16.53428c1.74037,1.98932 2.81789,3.19093 3.23255,3.6056c1.3257,1.07752 2.85951,1.61628 4.59988,1.61628c1.74037,0 4.24764,-0.51872 7.52105,-1.55616c3.27418,-1.03744 5.61573,-1.63863 7.02468,-1.80434l32.32169,-3.36435c11.76946,-1.06981 22.6695,-1.60472 32.69936,-1.60472c3.48074,0 7.12796,0.99428 10.94012,2.9836c4.47578,2.32075 6.71329,5.05616 6.71329,8.20548c0,2.82791 -0.34838,4.35555 -1.04669,4.58215l-0.07785,0.01464l-0.24279,-0.12101l-2.23751,-1.36809c-2.48646,-1.57466 -4.80721,-2.48646 -6.96225,-2.73465c-3.72969,-0.49714 -10.40213,-0.74609 -20.01578,-0.74609c-10.11156,0 -17.15705,0.12409 -21.13492,0.37305c-5.47083,0.33143 -14.62896,1.53381 -27.47594,3.60714c-11.93517,1.90531 -21.13492,2.85797 -27.59926,2.85797c-12.34984,0 -22.3373,-3.56398 -29.9624,-10.69194c-7.87328,-7.29367 -11.81031,-17.07381 -11.81031,-29.3404c0,-6.46511 0.95343,-11.89355 2.85951,-16.28609c1.15999,-2.40399 2.94198,-5.96797 5.34597,-10.69194c1.90608,-3.89541 2.85951,-7.95652 2.85951,-12.18412c0,-2.23751 -0.53876,-5.49064 -1.61628,-9.75901c-1.07752,-4.26845 -1.61628,-7.52158 -1.61628,-9.7594c0,-2.32067 0.4139,-5.01439 1.24323,-8.081c1.07752,-3.89548 2.48646,-5.84318 4.22683,-5.84318z',
        fill,
        scaleX: 0.4,
        scaleY: 0.4,
        translateX: 0,
        translateY: 23,
        disableZoomOnYTranslation: true,
        strokeWidth: 1,
      },
    },
  };

  return <LetterRenderer {...props} />;
};