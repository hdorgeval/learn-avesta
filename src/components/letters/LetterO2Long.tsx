import { FC } from 'react';
import { Letter, LetterOwnProps, LetterPronunciation, TranscriptionSymbol } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const LetterO2LongTranscription: TranscriptionSymbol = 'ō' ; 
export const letterO2LongPronunciation: LetterPronunciation = {
  'fr': 'o, like the letter o in hôte ;',
  'en': 'like the letter o in go.'
};

export const useLetterO2Long = (): Letter => {
  const pronunciation = letterO2LongPronunciation;
  const transcription = LetterO2LongTranscription;
  const render = (props?: LetterOwnProps) => {
    return <LetterO2Long {...props} />;
  };

  return {pronunciation,transcription,render};
};
/**
 * Letter O long - Iranian version
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  
 * @alias: ō
 */
export const LetterO2Long: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound  }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    textToSpeech: '/o-long/',
    style: {
      marginLeft: '-15px',
    },
    overridenStyle,
    svg: {
      width: 60,
      height: 28,
      zoom,
      path: {
        d: 'm3.81009,23.58148c4.05868,-0.28993 14.85699,-6.16088 21.74236,-8.2628c6.88537,-2.10193 13.77074,-3.76902 19.56834,-4.34878c5.79849,-0.57985 9.63952,0.21747 15.21992,0.86968c5.58039,0.6524 13.91494,1.81201 18.26336,3.04425c4.34842,1.23216 6.01569,2.97171 7.82806,4.34878c1.81147,1.37717 2.39095,2.3194 3.04344,3.91394c0.65249,1.59463 0.65249,4.13149 0.86968,5.65358c0.2172,1.52163 0.2172,1.95692 0.43529,3.47909c0.2172,1.52217 0.0721,3.98612 0.86968,5.65339c0.79668,1.66727 2.39185,3.18944 3.91313,4.34842c1.52217,1.15988 3.40664,1.74027 5.2181,2.60995c1.81237,0.86968 3.47874,1.81147 5.65339,2.60905c2.17466,0.79759 7.39276,2.17466 7.39276,2.17466c2.89834,0.86968 6.01478,2.10166 10.00091,3.04435c3.98612,0.94178 9.78462,1.66637 13.91584,2.60905c4.13122,0.94178 7.46486,2.17466 10.8706,3.04435c3.40664,0.86968 6.66818,1.37707 9.56742,2.17376c2.89834,0.79759 5.4353,1.66727 7.82716,2.60995c2.39185,0.94178 4.71071,2.02956 6.52218,3.04344c1.81237,1.01478 3.2336,2.1359 4.34932,3.04435c1.11482,0.90934 1.93223,1.46629 2.34049,2.41078c0.40736,0.94358 1.06705,3.0876 0.60021,3.91042c-0.46594,0.82282 -1.38608,0.84805 -3.39853,1.0274c-2.01154,0.17844 5.96162,0.03695 -8.67431,0.04506c-14.63592,0.00721 -63.85641,-1.96287 -79.14303,0c-15.2866,1.96197 -13.38862,9.1835 -12.57752,11.77453c0.8102,2.59103 13.15521,2.51623 17.44234,3.77254c4.28714,1.25631 5.01803,5.33256 6.77452,7.15213c1.75649,1.81867 2.94881,7.08905 7.52794,8.28047c4.57914,1.19233 14.61609,2.00793 21.07789,1.88266c6.46089,-0.12527 15.05499,0.69034 19.57194,0.37671c4.51695,-0.31453 7.65322,0.56417 9.40971,-0.37671c1.75649,-0.94088 8.02993,-4.39168 1.12924,-5.26947c-6.90069,-0.8787 -43.41029,0.37581 -44.41425,-1.88266c-1.00307,-2.25848 -11.1689,-8.59319 -1.12833,-10.16313c11.10672,-0.75433 45.60387,0.61373 59.11236,-0.76154c13.50939,-1.37437 18.59862,-2.9434 21.94216,-7.48649c3.34355,-4.54309 4.17628,-10.21 3.05606,-14.83329c-1.12023,-4.62239 -5.90123,-9.66746 -9.77831,-12.90556c-3.87618,-3.2381 -8.33454,-4.56652 -13.48055,-6.52308c-5.1451,-1.95746 -11.23289,-3.47964 -17.39367,-5.219c-6.15989,-1.73937 -13.04526,-3.47874 -19.56834,-5.2181c-4.71071,-1.23288 -5.4353,-1.23288 -8.69684,-2.17466c-3.26154,-0.94268 -8.40664,-2.46485 -10.8715,-3.47874c-2.46395,-1.01478 -3.04344,-1.45008 -3.91313,-2.60995c-0.86968,-1.15988 -0.94268,-1.95674 -1.30497,-4.3486c-0.36229,-2.39185 0.43529,-7.17556 -0.86968,-10.00227c-1.30407,-2.82679 -3.76893,-4.92872 -6.95747,-6.95819c-3.18854,-2.02947 -8.26245,-3.91394 -12.17557,-5.21856c-3.91403,-1.3047 -6.95747,-1.88447 -11.30679,-2.60932c-4.34842,-0.72477 -8.62384,-1.52199 -14.78462,-1.73946c-6.15989,-0.21747 -16.4519,-0.07255 -22.17738,0.43484c-5.72549,0.50739 -7.60996,1.44962 -12.17557,2.60932c-4.56561,1.15961 -10.00181,2.10184 -15.21992,4.34878c-5.21819,2.24685 -13.48037,6.88564 -15.65458,9.56742c-2.1743,2.68178 -1.44953,6.81318 2.60905,6.52326l0,-0.00002z',
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
