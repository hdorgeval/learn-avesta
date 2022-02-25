import { FC } from 'react';
import yavéSound from './assets/sounds/words/yavé.mp3';
import { Letter, LetterOwnProps } from './letter.models';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useLetterV2 = (): Letter => ({
  id: 'v2',
  pronunciation: {
    fr: 'like the letter v in avesta ;',
    en: 'like the letter v in flavour.',
  },
  transcription: 'v',
  alternateTranscriptions: ['w'],
  useWhenInsideWord: true,
  sampleWord: {
    transcript: 'yāvē',
    audioUrl: yavéSound,
  },
  render: (props?: LetterOwnProps) => {
    return <LetterV2 {...props} />;
  },
});

export const LetterV2: FC<LetterOwnProps> = ({
  fill,
  overridenStyle,
  zoom,
  disableSound,
  disableTranslate,
}) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    disableTranslate,
    textToSpeech: '/v/',
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 21,
      height: 31,
      zoom,
      path: {
        d: 'm0.96405,4.30708c6.85254,0 16.59037,10.50775 28.85282,31.52326c11.90179,20.01477 17.67235,33.69148 17.67235,41.03028c0,8.17265 -5.4099,22.43286 -16.95103,42.78111c-12.26245,21.18271 -21.27895,31.77329 -27.41017,31.77329c-2.16396,0 -3.24594,-3.00129 -3.24594,-9.00541c0,-6.67262 2.16396,-14.17816 6.49188,-22.51662c2.52462,-4.67022 6.13122,-11.67632 11.18047,-21.01675c2.52462,-5.50344 3.96726,-11.09095 3.96726,-16.76175c0,-2.50185 -1.8033,-7.83917 -5.04924,-16.01182c-1.44264,-3.66932 -3.6066,-9.17339 -6.49188,-16.51219c-6.13122,-17.17929 -9.37717,-32.19037 -9.73783,-45.03324c0,-0.16674 0.36066,-0.25018 0.72132,-0.25018z m55.7844,4.30708c6.85254,0 16.22971,10.50775 28.49216,31.52326c11.90179,20.01477 18.03301,33.69148 18.03301,41.03028c0,8.17265 -5.77056,22.43286 -17.31169,42.78111c-12.26245,21.18271 -21.27895,31.77329 -27.41017,31.77329c-2.16396,0 -3.24594,-3.00129 -3.24594,-9.00541c0,-6.67262 2.16396,-14.17816 6.49188,-22.51662c2.52462,-4.67022 6.13122,-11.67632 11.18047,-21.01675c2.52462,-5.50344 3.96726,-11.09095 3.96726,-16.76175c0,-2.50185 -1.8033,-7.83917 -4.68858,-16.01182c-1.8033,-3.66932 -3.96726,-9.17339 -6.49188,-16.51219c-6.49188,-17.17929 -9.73783,-32.19037 -10.09849,-45.03324c0,-0.16674 0.36066,-0.25018 1.08198,-0.25018z',
        fill,
        scaleX: 0.2,
        scaleY: 0.2,
        translateX: 0,
        translateY: -10,
        strokeWidth: 1,
      },
    },
  };
  return <LetterRenderer {...props} />;
};
