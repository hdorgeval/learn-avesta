import { FC } from 'react';
import letterYSound from '../../assets/sounds/letter-y.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterY4 = (): Letter => ({
  id: 'y4',
  pronunciation: {
    fr: 'like the y in Bayonne ;',
    en: 'like the letter y in lawyer ;',
  },
  transcription: 'y',
  useWhenInsideWord: true,
  render: (props?: LetterOwnProps) => {
    return <LetterY4 {...props} />;
  },
});

/**
 * Letter Y like in English "yes"
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:
 * @alias: y
 * @position: used only as the first letter in words
 * @variation:
 */
export const LetterY4: FC<LetterOwnProps> = ({
  fill,
  zoom,
  overridenStyle,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    audioUrl: letterYSound,
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 50,
      height: 22,
      zoom,
      path: {
        d: 'm70.578109,0.981796c5.052463,0 8.762889,3.065507 11.131277,9.196521c1.657725,4.262551 2.486587,8.933763 2.486587,14.013746c0,4.963238 -1.894857,9.371693 -5.683837,13.225364c-4.105402,4.321195 -9.394997,6.481249 -15.868787,6.481249c-2.368388,0 -5.723482,-1.328178 -10.065282,-3.985078c-4.3418,-2.656356 -6.513434,-4.831615 -6.513434,-6.525015c0,-0.467089 0.55282,-0.700687 1.658459,-0.700687c1.578436,0 3.828625,0.36495 6.749832,1.094851c2.921208,0.729901 5.170662,1.095068 6.749832,1.095068c3.710426,0 7.025875,-1.223271 9.947083,-3.669269c2.921208,-2.445998 4.381444,-5.037575 4.381444,-7.774621c0,-0.990812 -1.262749,-3.291341 -3.78898,-6.901477l-5.092108,-7.251875c0,-1.747157 0.236398,-3.377515 0.709929,-4.891127c0.710663,-2.271749 1.776658,-3.407651 3.197985,-3.407651zm-45.118305,0c4.658221,0 7.973671,3.153093 9.947083,9.459278c1.184194,3.85378 1.776658,8.437461 1.776658,13.750988c0,12.203438 -6.354856,18.305673 -19.065303,18.305673c-4.105402,0 -7.973671,-0.759114 -11.605542,-2.277342c-4.3418,-1.751718 -6.5127,-4.029061 -6.5127,-6.83181l2.368388,-1.226203c6.078814,1.810145 9.513196,2.715435 10.302414,2.715435c4.499644,0 8.269536,-1.01932 11.308942,-3.057525c3.039407,-2.038205 4.55911,-4.717367 4.55911,-8.037378c0,-1.572908 -1.302393,-4.572495 -3.907914,-8.99876c-2.604786,-4.426319 -3.907914,-7.192307 -3.907914,-8.298127c0,-1.281806 0.355332,-2.446921 1.065995,-3.495183c0.868507,-1.339364 2.092345,-2.009046 3.670781,-2.009046z',
        fill,
        scaleX: 0.51,
        scaleY: 0.51,
        translateX: 0,
        translateY: -4,
        disableZoomOnYTranslation: true,
        strokeWidth: 1,
      },
    },
  };

  return <LetterRenderer {...props} />;
};
