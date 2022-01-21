import { FC } from 'react';
import { Letter, LetterOwnProps, LetterPronunciation, TranscriptionSymbol } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const LetterGTranscription: TranscriptionSymbol = 'g';
export const letterGPronunciation: LetterPronunciation = {
  'fr': 'like the letter g in gars ;',
  'en': 'like the letter g in give, bag, flag.'
};
export const useLetterG= (): Letter => {
  const pronunciation = letterGPronunciation;
  const transcription = LetterGTranscription;
  const render = (props?: LetterOwnProps) => {
    return <LetterG {...props} />;
  };

  return {pronunciation,transcription,render};
};

/**
 * Letter G 
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/JH/0261.mp3
 * @alias: g
 */
export const LetterG: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound, disableTranslate }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/g/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 44,
      height: 42,
      zoom,
      path: {
        d: 'm27.617398,1.5c9.711769,0 17.233255,6.356002 22.562069,19.068005c1.662418,3.796213 3.889724,9.608107 6.678334,17.435444c2.789805,7.828412 5.015916,13.699423 6.679528,17.614226c5.226107,12.560093 12.948229,18.839542 23.162784,18.839542c6.415596,0 12.355874,-1.779456 17.819639,-5.338368c6.176742,-3.914803 9.263919,-8.955799 9.263919,-15.125376c0,-4.86305 -2.193866,-8.777853 -6.583987,-11.744409c-3.795377,-2.609471 -8.244017,-3.914803 -13.34592,-3.914803c-0.830015,0 -2.015921,0.207802 -3.558912,0.623407c-1.541797,0.415604 -2.727703,0.622212 -3.558912,0.622212c-1.660029,0 -3.617431,-1.957402 -5.872205,-5.872205c-2.253579,-3.914325 -3.380966,-6.880046 -3.380966,-8.896802c0,-5.338368 0.711782,-9.905598 2.135347,-13.701811c2.017115,-5.575669 5.160422,-8.363443 9.431117,-8.363443c10.08438,0 18.210164,4.44864 24.378547,13.34592c5.576027,7.829606 8.363443,17.023781 8.363443,27.58109c0,8.541389 -3.439485,17.498382 -10.320845,26.869785c-7.473715,10.08438 -15.303321,15.125376 -23.488819,15.125376c-1.660029,0 -4.092749,0.207802 -7.29577,0.623407c-3.203021,0.415604 -5.634546,0.622212 -7.29577,0.622212c-9.371403,0 -16.667173,-5.634546 -21.887309,-16.904832c-2.491238,-7.117824 -6.286615,-17.675133 -11.388518,-31.674316c-4.388927,-11.388041 -10.854681,-17.0823 -19.39607,-17.0823c-5.930724,0 -9.787008,5.338368 -11.566464,16.014626c-0.474124,2.84713 -0.711782,5.576027 -0.711782,8.185498c-0.118232,18.625769 7.593142,34.581159 23.132928,47.867366c14.710966,12.575618 31.556084,18.862233 50.53655,18.862233c10.320845,0 20.107853,-1.660029 29.361024,-4.982477c2.84713,-1.067674 11.982068,-4.685105 27.403622,-10.854681l6.406042,2.84713c-2.965362,3.084788 -7.414002,6.287809 -13.34592,9.609062c-4.388927,2.373006 -9.253171,5.160422 -14.591539,8.363443c-2.609471,0.355891 -8.837567,1.60151 -18.684288,3.736858c-7.829606,1.661224 -13.938276,2.491238 -18.328397,2.491238c-24.081175,0 -43.24078,-7.236056 -57.476428,-21.709363c-14.235648,-14.472112 -21.353472,-33.809664 -21.353472,-58.010265c0,-8.30373 2.30971,-17.022945 6.92913,-26.157525c5.44824,-10.676736 11.843534,-16.015104 19.188268,-16.015104z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: 15,
        strokeWidth: 1,
      }
    }
  };
  
  return (
    <LetterRenderer {...props} />
  );
};
