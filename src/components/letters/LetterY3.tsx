import { FC } from 'react';
import letterYSound from './assets/sounds/letter-y.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterY3 = (): Letter => ({
  id: 'y3',
  pronunciation: {
    fr: 'like the y in yaourt ;',
    en: 'like the letter y in yes ;',
  },
  transcription: 'y',
  useWhenFirstLetterInWord: true,
  render: (props?: LetterOwnProps) => {
    return <LetterY3 {...props} />;
  },
});

/**
 * Letter Y like in English "yes"
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:
 * @alias: y
 * @position: used only as the first letter in words
 * @variation: Iranian version
 */
export const LetterY3: FC<LetterOwnProps> = ({
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
      width: 66,
      height: 33,
      zoom,
      path: {
        d: 'm130.04793,4.56619c-2.41619,-1.99223 -15.99283,-2.71499 -22.07282,-3.44595c-6.08091,-0.73104 -10.15454,-0.75707 -14.40808,-0.93987c-4.25355,-0.18272 -7.40849,-0.20883 -11.11229,-0.1566c-3.70379,0.05214 -6.1845,0.07834 -11.11229,0.46989c-4.92688,0.39164 -13.20862,1.07036 -18.4499,1.87966c-5.24129,0.8093 -9.19042,1.82743 -12.99871,2.97606c-3.8092,1.14871 -7.02412,2.61062 -9.85467,3.91593c-2.83055,1.30531 -5.10135,2.50616 -7.12862,3.91593c-2.02636,1.40977 -3.52933,2.79334 -5.03138,4.54243c-1.50296,1.74917 -2.92778,3.84477 -3.98367,5.95228c-1.05589,2.10751 -1.01682,5.17112 -2.35076,6.69287c-1.33486,1.52175 -4.38349,1.88203 -5.65746,2.43771c-1.27488,0.55559 -2.1872,0.89348 -3.36849,2.49923c-1.1822,1.60575 -1.78284,3.17601 -2.3444,6.01313c-0.56157,2.83703 0.35348,6.25982 1.04317,8.63448c0.68969,2.37483 2.09724,5.04207 3.09679,5.61507c0.99955,0.57216 2.52341,-1.03191 2.90052,-2.18045c0.37619,-1.14854 -0.42526,-3.44308 -0.6388,-4.71044c-0.21354,-1.26719 -0.70423,-3.75392 -0.64244,-4.97708c0.0627,-1.22325 -0.03362,-2.00914 0.49887,-2.84286c0.53249,-0.83364 1.76103,-1.8107 2.69515,-2.15915c0.93322,-0.34845 2.28716,-0.2734 2.90779,0.06837c0.61972,0.34186 0.39709,1.0516 0.81145,1.98252c0.41527,0.93083 1.22309,2.71499 1.67743,3.60264c0.45434,0.88756 0.34984,0.73096 1.04862,1.72298c0.69878,0.99202 1.9564,2.95003 3.14495,4.22914c1.18765,1.27953 2.62064,2.45427 3.98367,3.44646c1.36212,0.99134 2.5852,1.67083 4.19266,2.50582c1.60746,0.83499 3.56476,1.80098 5.45119,2.50582c1.88734,0.70484 3.52933,1.17474 5.871,1.72323c2.34077,0.54849 8.17633,1.56688 8.17633,1.56688l0,0c1.15312,0.18255 4.43801,0.86119 6.91871,1.09614c2.48161,0.23495 5.41666,0.26115 7.96733,0.31354c2.55067,0.05155 3.73923,0.13015 7.33853,0c3.59929,-0.131 9.53936,-0.54849 14.25724,-0.78344l14.04733,-0.62624c3.56386,-0.1048 5.24129,-0.0786 7.33762,0c2.09724,0.07775 3.77376,0.23495 5.24219,0.46989c1.46752,0.23495 2.37621,0.57385 3.56386,0.93979c1.18765,0.3651 3.56386,1.25249 3.56386,1.25249l2.30715,0.78344c0.48887,-0.26115 0.45162,-1.50603 0.62881,-2.34947c0.17628,-0.84344 0.37074,-1.88634 0.43253,-2.71204c0.06088,-0.8257 -0.02908,-1.5711 -0.06633,-2.2413c-0.03635,-0.67104 0.22535,-1.38602 -0.1572,-1.78239c-0.38165,-0.39637 -1.25307,-0.35242 -2.13541,-0.59666c-0.88233,-0.24509 -1.94186,-0.63132 -3.15858,-0.87133c-1.21582,-0.24002 -1.56112,-0.35918 -4.13996,-0.56793c-2.57975,-0.20875 -7.03684,-0.7116 -11.33491,-0.6854c-3.4948,0.15635 -14.45442,0.84175 -14.45442,0.84175l-9.01505,0.62709c-3.21492,0.20875 -6.81422,0.62624 -10.27357,0.62624c-3.45936,0 -7.30309,-0.131 -10.48257,-0.62624c-3.18039,-0.49609 -5.80103,-1.25333 -8.59614,-2.34947c-2.79602,-1.09698 -6.08091,-2.66302 -8.17724,-4.22964c-2.09633,-1.56637 -3.24945,-3.31546 -4.40257,-5.16901c-1.15312,-1.85346 -1.99183,-3.99419 -2.51614,-5.9522c-0.52431,-1.95792 -0.62881,-4.15088 -0.62881,-5.79551c0,-1.64472 0.27897,-2.81945 0.62881,-4.07262c0.34893,-1.25308 0.66334,-2.16676 1.46752,-3.44595c0.80328,-1.2792 2.20174,-3.05448 3.35486,-4.22922c1.15312,-1.17474 2.1663,-1.93181 3.56386,-2.81945c1.39755,-0.88764 2.83055,-1.67083 4.82238,-2.50616c1.99183,-0.83542 4.75241,-1.80132 7.12862,-2.50625c2.37621,-0.70484 3.66926,-1.14862 7.12862,-1.72298c3.45936,-0.57435 10.06367,-1.38365 13.62752,-1.72298c3.56476,-0.33941 5.17223,-0.26106 7.75743,-0.31329c2.58611,-0.05223 4.68244,-0.10446 7.75743,0c3.07589,0.10437 7.7229,0.39155 10.69338,0.6265c2.97049,0.23503 4.57704,0.41775 7.12862,0.78319c2.55067,0.36552 5.80013,0.96599 8.17633,1.40977c2.37621,0.44378 4.61702,0.93168 6.08,1.25308c1.46389,0.3214 2.6997,0.67552 2.6997,0.67552c1.71196,-1.30531 9.99097,-6.51514 7.57387,-8.50737z',
        fill,
        scaleX: 0.5,
        scaleY: 0.5,
        translateX: 0,
        translateY: 10,
        disableZoomOnYTranslation: true,
        strokeWidth: 1,
      },
    },
  };

  return <LetterRenderer {...props} />;
};
