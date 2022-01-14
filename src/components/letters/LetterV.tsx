import { FC } from 'react';
import { Letter, LetterOwnProps, LetterPronunciation } from './LetterA';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const LetterVTranscription = 'v';
export const letterVPronunciation: LetterPronunciation = {
  'fr': 'like the letter v in vite ;',
  'en': 'like the letter v in voice, five.'
};
export const useLetterV= (): Letter => {
  const pronunciation = letterVPronunciation;
  const transcription = LetterVTranscription;
  const render = (props?: LetterOwnProps) => {
    return <LetterV {...props} />;
  };

  return {pronunciation,transcription,render};
};

/**
 * Letter V when used at the start of a word
 * * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/sounds/JH/0076.mp3
 * @alias: v
 */
export const LetterV: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound  }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    textToSpeech: '/v/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 29,
      height: 59,
      zoom,
      path: {
        d: 'm4.721019,130.516526c2.983658,-12.173989 14.68277,-40.15074 21.281121,-55.673568c6.598351,-15.5227 12.787104,-26.457402 18.310263,-37.463528c5.521879,-11.006254 10.256563,-23.194195 14.827409,-28.573738c4.570846,-5.379672 11.692713,-6.768717 12.596386,-3.704164c0.903673,3.064553 -2.232303,10.608561 -7.173066,22.091483c-4.939483,11.482794 -16.993153,35.176953 -22.466392,46.80541c-5.473239,11.628841 -7.039947,15.187214 -10.374322,22.965716c-3.334375,7.778502 -7.779782,18.150264 -9.633208,23.706703c-1.852146,5.556438 -2.133744,6.580431 -1.480949,9.630648c0.651515,3.050217 1.38879,6.501071 5.39388,8.668095c4.00509,2.165744 10.536881,4.262368 18.635381,4.332768c8.099779,0.070399 22.815829,-0.897273 29.959456,-3.911651c7.142347,-3.013097 11.741352,-8.226499 12.899744,-14.172054c1.158391,-5.944276 -1.939186,-15.807882 -5.949396,-21.498719c-4.01021,-5.690837 -15.375245,-8.560576 -18.110585,-12.645025c-2.73534,-4.084449 -1.095672,-8.502592 1.697267,-11.861031c2.791659,-3.358439 10.458802,-9.189947 15.056527,-8.289858c4.597726,0.900089 9.790647,6.473296 12.531106,13.690778c2.74046,7.216586 4.270048,21.39504 3.912931,29.612579c-0.357117,8.218819 -1.239031,19.048818 -4.364767,25.186372c-3.127017,6.137554 -9.785527,8.677055 -14.390932,11.637673c-4.605406,2.961898 -9.061052,1.683187 -13.241501,6.127314c-4.180449,4.444127 -7.466184,14.273173 -11.841191,20.536166c-4.373727,6.261713 -9.657528,13.704858 -14.405012,17.037953c-4.747485,3.334375 -9.509049,3.457254 -14.078615,2.963178c-4.569566,-0.492796 -11.024558,-3.896291 -13.3375,-5.926356c-2.312943,-2.030065 -1.758707,-4.540126 -0.541436,-6.252753c1.217271,-1.712627 4.05245,-3.705572 7.847621,-4.02173c3.795172,-0.316158 10.090165,4.680925 14.923408,2.126064c4.831964,-2.556141 12.588706,-12.980383 14.070935,-17.461629c1.483509,-4.481247 -0.849914,-7.271626 -5.171161,-9.42329c-4.321248,-2.151664 -15.088527,-2.009585 -20.756325,-3.489254c-5.666518,-1.479669 -9.296571,-3.781092 -13.247901,-5.3862c-3.334375,-3.580133 -6.362832,-5.191641 -3.379175,-17.36435z',
        fill,
        scaleX: 0.3,
        scaleY: 0.3,
        translateX: 0,
        translateY: 0,
        strokeWidth: 1,
      }
    }
  };
  
  return (
    <LetterRenderer {...props} />
  );
};
