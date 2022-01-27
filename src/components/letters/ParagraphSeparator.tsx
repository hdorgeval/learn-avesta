import { FC } from 'react';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useParagraphSeparator = (): Letter => ({
  pronunciation: {},
  transcription: '***',
  render : (props?: LetterOwnProps) => {
    return <ParagraphSeparator {...props} />;
  },
});

/**
 * Paragraph separator. 
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  
 * @alias: ***
 */
export const ParagraphSeparator: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound  }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 31,
      height: 22,
      zoom,
      path: {
        d: 'm25.08664,69.69386c-4.4356,0 -8.50084,1.24681 -12.1966,3.74216c-4.06611,2.77203 -6.09916,6.23664 -6.09916,10.39469c0,5.91356 1.61716,9.74852 4.85149,11.50402c2.03305,1.10933 6.32945,1.66356 12.89004,1.66356c13.30593,0 19.95847,-4.71228 19.95847,-14.13771c0,-3.8805 -2.35614,-7.11483 -7.06843,-9.70212c-4.06611,-2.30974 -8.17776,-3.46461 -12.33581,-3.46461zm74.84489,-0.41589c-4.25085,0 -8.4089,1.29321 -12.47415,3.8805c-4.71228,2.86484 -7.06843,6.28305 -7.06843,10.25635c0,4.4356 2.03219,7.99301 6.0983,10.67224c3.51101,2.3106 7.62266,3.46547 12.33581,3.46547c5.17372,0 9.70212,-1.20127 13.58262,-3.60381c4.62034,-2.77203 6.93008,-6.60699 6.93008,-11.50402c0,-3.8805 -2.35614,-7.11483 -7.06843,-9.70212c-4.15805,-2.30974 -8.27056,-3.46461 -12.33581,-3.46461zm-78.03282,-14.4144c8.03855,0 15.29258,4.48114 21.76037,13.44427c6.00636,8.3161 9.00954,16.5858 9.00954,24.80909c0,5.45212 -2.07945,9.97966 -6.2375,13.58348c-4.15805,3.60381 -9.00868,5.40486 -14.55274,5.40486c-9.70212,0 -17.44078,-3.00232 -23.21599,-9.00868c-5.77521,-6.00636 -8.66239,-13.90657 -8.66239,-23.70063c0,-7.20763 1.80191,-13.02924 5.40486,-17.46398c3.9733,-4.71228 9.47183,-7.06843 16.49385,-7.06843zm77.20104,-1.38602c6.28305,0 12.42775,4.01885 18.43411,12.05826c5.54407,7.48432 8.3161,14.50634 8.3161,21.06694c0,6.56059 -1.70911,12.52055 -5.12818,17.87987c-3.8805,6.1911 -8.91674,9.28623 -15.10784,9.28623c-6.93008,0 -14.3216,-3.27987 -22.17626,-9.84046c-8.2233,-6.83814 -12.33495,-13.62902 -12.33495,-20.37436c0,-8.3161 2.60963,-15.40859 7.83061,-21.27574c5.22098,-5.86716 11.94311,-8.80073 20.16641,-8.80073zm-39.64025,-33.95784c-6.37499,0 -11.13367,0.73924 -14.27606,2.21763c-4.52754,2.12525 -6.79088,6.09847 -6.79088,11.91974c0,3.9733 1.6627,7.20729 4.98983,9.70246c3.04872,2.30974 6.60613,3.46461 10.67224,3.46461c4.43474,0 11.41122,-2.54089 20.92859,-7.62301c1.38602,-2.5872 2.0786,-4.80483 2.0786,-6.65288c0,-3.69602 -2.0786,-6.83771 -6.23664,-9.42491c-3.69576,-2.40246 -7.48432,-3.60364 -11.36568,-3.60364zm-2.91038,-15.80059c7.29957,0 14.09131,4.20428 20.37436,12.61275c5.72881,7.66932 8.59365,15.38478 8.59365,23.14648c0,6.28287 -2.58729,11.50385 -7.76186,15.6619c-4.71228,3.88136 -10.30275,5.82161 -16.77054,5.82161c-9.24068,0 -16.58666,-2.70329 -22.03792,-8.10815c-5.45126,-5.40572 -8.17776,-12.7285 -8.17776,-21.96866c0,-9.14771 2.00985,-15.96231 6.02956,-20.4437c4.01971,-4.48148 10.60264,-6.72222 19.75052,-6.72222z',
        fill,
        scaleX: 0.2,
        scaleY: 0.2,
        translateX: 0,
        translateY: 20,
        strokeWidth: 0.5,
      }
    }
  };
  return (
    <LetterRenderer {...props} />
  );
  
};
