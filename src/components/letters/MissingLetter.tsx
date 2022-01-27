import { FC } from 'react';
import { Letter, LetterOwnProps } from './letter.types';
import { LetterRenderer, LetterRendererOwnProps } from './LetterRenderer';

export const useMissingLetter = (): Letter => ({
  pronunciation: {},
  transcription: '-',
  render : (props?: LetterOwnProps) => {
    return <MissingLetter {...props} />;
  },
});

/**
 * Placeholder for missing letters. 
 * @link: https://www.internationalphoneticassociation.org/IPAcharts/inter_chart_2018/IPA_2018.html
 * @audio:  
 * @alias: -
 */
export const MissingLetter: FC<LetterOwnProps> = ({ fill, overridenStyle, zoom, disableSound  }) => {
  const props: LetterRendererOwnProps = {
    disableSound,
    style: {
      marginLeft: '-0px',
    },
    overridenStyle,
    svg: {
      width: 25,
      height: 6,
      zoom,
      path: {
        d: 'm3.59872,-0.86114l93.74683,0c0.24032,6.83758 0.3007,12.59554 0.17994,17.27389c0.24032,0.11956 0.42025,0.29949 0.53981,0.53981l-0.2693,0c-0.29949,0 -0.81032,0 -1.53006,0c-2.99854,0 -4.49841,0 -4.49841,0c-3.14828,0 -5.14932,0 -6.0019,0l-0.29587,0l-0.0785,0c-0.0785,0 -0.1111,0 -0.09782,0l-84.21383,0l0,-0.3635c0,-0.3635 -0.05917,-3.27267 -0.17994,-8.72631c0,-0.84775 -0.05917,-2.20996 -0.17994,-4.08782c-0.11956,-1.87786 -0.17994,-3.30286 -0.17994,-4.27379c-0.11956,0 -0.29949,-0.06038 -0.53981,-0.17994c0.24032,-0.12197 1.43949,-0.18235 3.59873,-0.18235z',
        fill,
        scaleX: 0.2,
        scaleY: 0.3,
        translateX: 10,
        translateY: 20,
        strokeWidth: 0.5,
      }
    }
  };
  return (
    <LetterRenderer {...props} />
  );
  
};
