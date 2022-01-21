import { FC } from 'react';
import { Letter, LetterOwnProps, LetterPronunciation, TranscriptionSymbol } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const LetterO2Transcription: TranscriptionSymbol = 'o' ; 
export const letterO2Pronunciation: LetterPronunciation = {
  'fr': 'o, like the letter o in pot ;',
  'en': 'like the letter o in going.'
};

export const useLetterO2 = (): Letter => {
  const pronunciation = letterO2Pronunciation;
  const transcription = LetterO2Transcription;
  const render = (props?: LetterOwnProps) => {
    return <LetterO2 {...props} />;
  };

  return {pronunciation,transcription,render};
};
/**
 * Letter O - Iranian version
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  
 * @alias: o
 */
export const LetterO2: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound, disableTranslate  }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/o/',
    style: {
      marginLeft: '-15px',
    },
    overridenStyle,
    svg: {
      width: 60,
      height: 28,
      zoom,
      path: {
        d: 'm3.81226,23.56536c4.05908,-0.28985 14.86175,-6.1567 21.75041,-8.2572c6.88722,-2.10049 13.77445,-3.76636 19.57436,-4.34577c5.79992,-0.57942 9.64355,0.21732 15.22514,0.86913c5.58303,0.65195 13.92095,1.81079 18.27017,3.04216c4.35066,1.23123 6.01824,2.96962 7.83089,4.34577c1.81265,1.37615 2.39293,2.31781 3.04503,3.91128c0.65209,1.59347 0.65209,4.1286 0.87042,5.64968c0.21689,1.52093 0.21689,1.95557 0.43377,3.47664c0.21832,1.52093 0.07325,3.98367 0.87042,5.64954c0.79717,1.66601 2.39293,3.18694 3.91545,4.34592c1.52251,1.15883 3.40699,1.73825 5.21964,2.60752c1.81265,0.86913 3.48024,1.81079 5.65485,2.60752c2.17605,0.79673 7.39568,2.17289 7.39568,2.17289c2.89996,0.86913 6.0168,2.10049 10.0055,3.04201c3.98726,0.94166 9.78718,1.66601 13.91951,2.60752c4.13233,0.94166 7.4675,2.17289 10.87592,3.04216c3.40699,0.86913 6.6689,1.37615 9.57029,2.17289c2.89996,0.79673 5.43653,1.66586 7.82946,2.60752c2.39293,0.94223 4.71261,2.0281 6.52526,3.04216c1.81265,1.01405 3.23462,2.13296 4.34922,3.04216c1.11603,0.90776 1.93474,1.46506 2.34266,2.40873c0.40792,0.94223 1.0672,3.08524 0.60039,3.90827c-0.46681,0.82158 -1.3875,0.84744 -3.3998,1.02554c-2.01231,0.17811 5.96366,0.03734 -8.67833,0.04596c-14.64055,0.00718 -64.38081,-2.46331 -79.17074,0c-14.78993,2.46188 -23.56306,12.31226 -9.57029,14.77557c13.99277,2.46188 74.28002,1.24674 93.5269,0c19.24544,-1.24674 18.60484,-2.94161 21.95006,-7.48187c3.34379,-4.54025 4.17686,-10.20228 3.05652,-14.82297c-1.12034,-4.61925 -5.90333,-9.66093 -9.78144,-12.89699c-3.8781,-3.23592 -8.33792,-4.56309 -13.48574,-6.51866c-5.14782,-1.95571 -11.23788,-3.47664 -17.39975,-5.21504c-6.16331,-1.73825 -13.05053,-3.47664 -19.5758,-5.21504c-4.71261,-1.23123 -5.43653,-1.23123 -8.69988,-2.17289c-3.26191,-0.94166 -8.40974,-2.46274 -10.87448,-3.47664c-2.46618,-1.01405 -3.04503,-1.44869 -3.91545,-2.60752c-0.87042,-1.15898 -0.94223,-1.95571 -1.30563,-4.34592c-0.36196,-2.3902 0.43521,-7.17061 -0.86898,-9.99545c-1.30563,-2.8247 -3.77038,-4.92519 -6.96048,-6.95329c-3.1901,-2.0281 -8.26467,-3.91128 -12.18011,-5.21504c-3.91545,-1.30376 -6.96048,-1.88318 -11.31113,-2.60752c-4.34922,-0.72435 -8.62662,-1.52093 -14.78993,-1.73825c-6.16187,-0.21732 -16.45751,-0.07253 -22.18418,0.43449c-5.7281,0.50703 -7.61401,1.44869 -12.18155,2.60752c-4.56754,1.15883 -10.00407,2.10049 -15.22514,4.34577c-5.21964,2.24542 -13.4843,6.88105 -15.66035,9.56096c-2.17461,2.67991 -1.44926,6.80851 2.61126,6.5188l0.00001,0z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: -20,
        strokeWidth: 0.5,
      }
    }
  };
  return (
    <LetterRenderer {...props} />
  );
  
};
