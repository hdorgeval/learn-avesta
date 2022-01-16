import { FC } from 'react';
import { Letter, LetterOwnProps, LetterPronunciation, TranscriptionSymbol } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const LetterAATranscription: TranscriptionSymbol = 'ā' ; // '&#257;'; // ā
export const letterAAPronunciation: LetterPronunciation = {
  'fr': 'long a, like the sequence ah ;',
  'en': 'like the letter a in father.'
};

export const useLetterAA = (): Letter => {
  const pronunciation = letterAAPronunciation;
  const transcription = LetterAATranscription;
  const render = (props?: LetterOwnProps) => {
    return <LetterAA {...props} />;
  };

  return {pronunciation,transcription,render};
};
/**
 * Letter A long 
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  
 * @alias: ɑ̄
 */
export const LetterAA: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound  }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    textToSpeech: '/a-long/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 40,
      height: 25,
      zoom,
      path: {
        d: 'm76.723325,52.846316l0.007474,0.003322l-0.24747,0l0.239996,-0.003322zm-47.13551,-51.346316l0.24747,0.123735c0.907666,2.392235 1.361084,5.650531 1.361084,9.775054c0,1.81475 -0.226709,4.557595 -0.680127,8.228369c-0.454248,3.670773 -0.680957,6.413618 -0.680957,8.228036c0,3.134893 1.670836,6.352 5.011677,9.65132c3.340841,3.30015 6.578709,4.949395 9.712772,4.949395c7.919031,0 11.878547,-5.320599 11.878547,-15.961466c0,-1.649826 -0.102974,-4.103845 -0.308922,-7.362225c-0.206778,-3.258379 -0.309752,-5.712399 -0.309752,-7.362225c0,-3.382114 0.412726,-5.650531 1.237349,-6.805418c0.825453,-1.154886 2.845902,-1.81475 6.063008,-1.979758c0.742409,4.784387 1.979758,11.91982 3.712046,21.406132c1.979758,10.063714 5.196864,15.095322 9.65132,15.095322c5.527378,0 9.115689,-3.134063 10.764933,-9.40385c0.660196,-2.391654 1.196657,-8.124896 1.608553,-17.198814c0.330513,-6.269206 1.52634,-9.40385 3.588311,-9.40385c1.897545,0 3.30015,2.185955 4.206985,6.557948c0.660196,3.134644 0.989879,6.186743 0.989879,9.15638c0,8.413639 -1.443297,15.673305 -4.33072,21.777004c-3.595785,7.671562 -8.972854,11.627756 -16.129546,11.866921l-0.4584,0.008304l-1.169253,-0.595422c-5.737478,-2.900711 -9.263506,-4.350651 -10.578085,-4.350651c-1.567031,0 -4.907873,0.949188 -10.022524,2.845902c-2.391654,0.907666 -5.939274,2.268749 -10.641199,4.083251c-7.011366,-4.618881 -11.424299,-6.929153 -13.239631,-6.929153c-1.732288,0 -7.424092,2.969637 -17.075412,8.90891c-2.969637,0 -5.732495,-1.03057 -8.290236,-3.093372c-2.80438,-2.144184 -4.206985,-4.660403 -4.206985,-7.547827c0,-1.484818 1.237349,-2.391654 3.712046,-2.722167c1.320392,-0.082213 3.258628,-0.24747 5.815539,-0.494939c6.434213,-1.237349 9.65132,-6.35117 9.65132,-15.343123c0,-1.319479 -0.185187,-3.278642 -0.556392,-5.877074c-0.371205,-2.598432 -0.557222,-4.557595 -0.557222,-5.877406c0,-3.217107 0.866144,-6.269206 2.598432,-9.15638c1.979758,-3.464576 4.454455,-5.196864 7.424092,-5.196864z',
        fill,
        scaleX: 0.4,
        scaleY: 0.4,
        translateX: 0,
        translateY: 0,
        strokeWidth: 0.5,
      }
    }
  };
  return (
    <LetterRenderer {...props} />
  );
  
};
