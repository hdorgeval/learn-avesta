import { FC } from 'react';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useWordSeparator = (): Letter => ({
  pronunciation: {},
  transcription: '.',
  render : (props?: LetterOwnProps) => {
    return <WordSeparator {...props} />;
  },
});

/**
 * Word separator. 
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  
 * @alias: .
 */
export const WordSeparator: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound  }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 13,
      height: 8,
      zoom,
      path: {
        d: 'm25.34182,1.52734c5.03483,-0.115 10.27845,2.22115 15.72929,7.00842c5.81307,5.10585 8.87699,10.33049 9.19176,15.67377c0.31319,6.44104 -1.25752,12.96274 -4.71373,19.56196c-4.55713,8.7979 -11.15634,13.11934 -19.79765,12.96274c-5.97125,-0.15818 -11.62772,-3.06392 -16.96941,-8.72039c-5.34328,-5.65647 -8.24902,-11.54863 -8.72039,-17.67647c-0.47137,-6.59922 1.8064,-12.92478 6.8349,-18.97338c5.02692,-6.04923 10.84157,-9.30961 17.44078,-9.78098c0.33376,-0.02942 0.66751,-0.04793 1.00443,-0.05568z',
        fill,
        scaleX: 0.14,
        scaleY: 0.14,
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
