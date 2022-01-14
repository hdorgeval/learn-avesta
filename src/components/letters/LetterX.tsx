import { FC } from 'react';
import letterXSound from '../../assets/sounds/letter-x.mp3';
import { Letter, LetterOwnProps, LetterPronunciation } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const LetterXTranscription = 'x';
export const letterXPronunciation: LetterPronunciation = {
  'fr': 'like the sequence Kh in Khalid (to be pronounced more or less like rhalid) ;',
  'es': 'like the letter j in Juan ;',
  'de': 'like the sequence ch in nach.'
};
export const useLetterX= (): Letter => {
  const pronunciation = letterXPronunciation;
  const transcription = LetterXTranscription;
  const render = (props?: LetterOwnProps) => {
    return <LetterX {...props} />;
  };

  return {pronunciation,transcription,render};
};

/**
 * Letter X like in Spanish "Juan" (also transcribed as Kh)
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/JH/0078.mp3
 * @alias: x
 */
export const LetterX: FC<LetterOwnProps> = ({ fill, zoom, overridenStyle,  disableSound }) => {
  
  const props: LetterRendererOwnProps = {
    disableSound,
    audioUrl: letterXSound,
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 38,
      height: 60,
      zoom,
      path: {
        d: 'm54.71423,1.50023c0.17622,0.00228 0.35463,0.02166 0.53746,0.05808c1.38549,0.14589 2.11532,0.25529 2.18801,0.3282c0.6564,0.29178 0.9846,1.12991 0.9846,2.51452c0,0.58349 -0.03745,1.23989 -0.11087,1.96921c-0.44274,1.38461 -1.25333,4.48284 -2.43251,9.29477c-1.17991,4.81193 -2.58009,10.82637 -4.202,18.04334c-1.89725,8.67912 -3.28348,15.71716 -4.15868,21.11441c-0.36491,2.2607 -1.27683,6.89222 -2.73721,13.89384l-4.99937,24.07468c0,0.4376 -0.1094,1.71516 -0.3282,3.83268c-0.14611,1.53234 -0.61969,2.99272 -1.42074,4.37895c-1.45671,0.14611 -4.97074,-1.03894 -10.54355,-3.55514c-5.57207,-2.51621 -8.72266,-3.73797 -9.45101,-3.66528c-2.84074,0.2188 -5.46341,1.094 -7.86654,2.62561c-2.76805,1.82383 -4.15207,4.04781 -4.15207,6.67342c0,8.97083 3.82901,16.37407 11.48703,22.20827c6.63671,5.10584 14.07593,7.80413 22.31767,8.09562c6.12642,0.2188 11.26823,-1.05729 15.42545,-3.82901c5.1051,-3.42739 7.65802,-8.6786 7.65802,-15.75365c0,-1.82309 -0.4376,-3.7923 -1.3128,-5.90762c0,0 -0.9846,-1.96921 -2.95381,-5.90762c-0.80251,-1.67698 -1.75041,-4.1205 -2.84441,-7.32982c-1.82309,-5.54271 -2.73501,-9.91872 -2.73501,-13.12804c0,-1.16669 0.07269,-2.3701 0.2188,-3.61021c0.29149,-0.36418 0.80251,-1.27609 1.5316,-2.73501c0.36491,-0.72909 1.094,-1.094 2.18801,-1.094c1.75041,0 3.71961,2.22472 5.90762,6.67342l6.01702,12.25284c2.77172,4.37601 5.76151,6.56402 8.97083,6.56402c4.0111,0 6.01702,-2.18801 6.01702,-6.56402c0,-1.5316 -0.30985,-3.84663 -0.93027,-6.94655c-0.61969,-3.09992 -0.92954,-5.41568 -0.92954,-6.94729c0,-6.7094 1.5316,-10.06483 4.59481,-10.06483c2.11532,0 4.15721,1.56832 6.12642,4.70421c1.67772,2.69903 2.51621,5.03241 2.51621,7.00162c0,0.80251 0.18209,2.35247 0.547,4.64988c0.36491,2.29741 0.547,4.06617 0.547,5.30555c0,2.91783 -0.51029,6.23582 -1.5316,9.95543c-0.58371,2.18801 -1.49489,3.82901 -2.73501,4.92301c-1.67772,1.5316 -5.06913,3.46483 -10.17423,5.79822c-4.6675,2.18801 -7.03833,3.35543 -7.11102,3.50081c-0.6564,2.55292 -1.34952,5.10584 -2.07861,7.65802c-1.82309,6.34522 -5.61613,11.37763 -11.37763,15.09724c-5.25122,3.42812 -11.37763,5.36062 -18.37925,5.79822c-12.61775,0.72982 -22.90138,-3.6829 -30.85089,-13.23744c-7.51191,-8.97083 -11.04943,-19.83744 -10.61183,-32.6013c0.14611,-3.5735 2.15129,-8.1316 6.01702,-13.67504c4.08452,-5.83419 7.76742,-8.82471 11.04943,-8.97083c1.02131,0 2.38845,0.36491 4.10215,1.094c1.71443,0.72982 2.89948,1.49563 3.55588,2.29741c0.6564,0.80251 1.02131,1.2034 1.094,1.2034l0.6564,-0.2188c0.4376,-0.07269 0.9846,-0.1094 1.641,-0.1094c1.96921,0 3.97512,-1.89578 6.01702,-5.68882c1.45892,-2.77099 2.51621,-5.47002 3.17261,-8.09562c0.80251,-3.3547 1.71369,-8.05891 2.73501,-14.11235c1.3128,-7.73093 2.2607,-13.16446 2.84441,-16.30065c0.6564,-3.42783 1.82236,-9.44485 3.49934,-18.05105c0.51029,-1.82331 1.3128,-4.95943 2.40681,-9.40843c0.07269,-0.58342 0.25478,-1.49511 0.547,-2.73501c0.07269,-0.29171 0.29149,-0.58342 0.6564,-0.8752c0.89282,-1.65921 1.95452,-2.48089 3.18362,-2.46488z',
        fill,
        scaleX: 0.4,
        scaleY: 0.42,
        translateX: 0,
        translateY: -22,
        strokeWidth: 1,
      }
    }
  };
  
  return (
    <LetterRenderer {...props} />
  );
};
