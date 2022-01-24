import { FC } from 'react';
import { Letter, LetterOwnProps, LetterPronunciation, TranscriptionSymbol } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const LetterOLongTranscription: TranscriptionSymbol = 'ō' ; 
export const letterOLongPronunciation: LetterPronunciation = {
  'fr': 'long o, like the letter o in hôte ;',
  'en': 'like the letter o in go.'
};

export const useIndianLetterOLong = (): Letter => ({
  pronunciation: {
    'fr': 'long o, like the letter o in hôte ;',
    'en': 'like the letter o in go.'
  },
  transcription: 'ō',
  render: (props?: LetterOwnProps) => {
    return <IndianLetterOLong {...props} />;
  },
});
/**
 * Letter O long - Indian version
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  
 * @alias: ō
 */
export const IndianLetterOLong: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound, disableTranslate  }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/o-long/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 29,
      height: 61,
      zoom,
      path: {
        d: 'm27.99973,6.08305c10.51767,0 17.33994,10.70721 20.46681,32.12153c0.75835,5.49578 1.08935,8.85951 0.99491,10.09128l-6.68014,62.96349c-0.47409,4.83244 3.74309,7.95932 12.64963,9.38062l25.29926,4.12179c9.1908,2.84261 13.78667,8.19684 13.78667,16.06076c0,18.76125 -12.55519,28.14187 -37.66462,28.14187c-2.74818,0 -5.23499,1.27918 -7.46234,3.83753c-2.2264,2.55835 -3.33959,5.25883 -3.33959,8.10145c0,5.96949 2.98474,9.99684 8.95423,12.0811c1.13705,0.37965 6.5857,1.27918 16.34502,2.70048c5.96949,0.85278 8.95423,2.84261 8.95423,5.96949c0,4.54818 -3.45883,6.82227 -10.37554,6.82227c-9.1908,0 -16.25059,-3.31575 -21.17747,-9.94915l-9.66488,-18.61911c-3.50557,-6.63245 -8.29127,-9.94915 -14.3552,-9.94915c-1.13705,0 -2.79492,0.16598 -4.97457,0.49793c-2.17965,0.33196 -3.83753,0.49698 -4.97457,0.49698c-3.22131,0 -4.83244,-2.79492 -4.83244,-8.38571c0,-1.51574 1.51574,-2.65279 4.54818,-3.41114c2.08426,-0.56852 4.21622,-0.85278 6.39588,-0.85278c4.26392,0 10.68365,0.16598 19.25823,0.49793c8.57553,0.33196 14.99526,0.49698 19.25918,0.49698c3.88522,0 8.24358,-1.51574 13.07602,-4.54818c5.30653,-3.31575 7.95932,-6.77458 7.95932,-10.37554c0,-3.78983 -2.41622,-7.15327 -7.24866,-10.09128c-4.35836,-2.65279 -8.57553,-3.97966 -12.64963,-3.97966c-2.27409,0 -5.68523,0.33196 -10.23341,0.99491c-4.54818,0.66391 -7.95932,0.99491 -10.23341,0.99491c-2.46392,0 -4.09794,-0.54468 -4.90398,-1.63403c-0.80509,-1.08935 -1.20763,-2.91416 -1.20763,-5.47251c0,-8.62227 0.97107,-21.46173 2.9132,-38.51741c1.94309,-17.0553 2.91416,-29.89437 2.91416,-38.51702c0,-7.29598 -1.51574,-13.88139 -4.54818,-19.75616c-3.6954,-7.20125 -8.85979,-10.80193 -15.49224,-10.80193c-3.50557,0 -6.82227,4.50087 -9.94915,13.50241c-1.98983,5.68523 -3.50557,11.65471 -4.54818,17.90846c-3.50557,-4.54818 -5.25883,-9.33321 -5.25883,-14.3552c0,-7.01171 2.9132,-13.52607 8.74056,-19.54296c5.82736,-6.0168 12.24708,-9.0253 19.25918,-9.0253z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: -40,
        strokeWidth: 0.5,
      }
    }
  };
  return (
    <LetterRenderer {...props} />
  );
  
};
