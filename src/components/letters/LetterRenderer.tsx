import { CSSProperties, FC, useCallback, useMemo } from 'react';
import { useAudioFromUrl } from './useAudioFromUrl';

export interface LetterRendererOwnProps {
  audioUrl?: string;
  style?: CSSProperties;
  overridenStyle?: CSSProperties;
  svg: {
    width: number;
    height: number;
    zoom?: number;
    path: {
      d: string;
      fill?: string;
      stroke?: string;
      strokeWidth: number;
      scaleX: number;
      scaleY: number;
      translateX: number;
      translateY: number;
    }
  }
}
/**
 * Letter Renderer
 */
export const LetterRenderer: FC<LetterRendererOwnProps> = ({ style, overridenStyle, svg, audioUrl }) => {
  const [startAudio] = useAudioFromUrl(audioUrl);
  const appliedZoom = useMemo(() => svg.zoom || 1, [svg.zoom]);
  const appliedFill = useMemo(() => svg.path.fill || '#f5a425', [svg.path.fill]);
  const appliedStroke = useMemo(() => svg.path.stroke || '#000000', [svg.path.stroke]);
  const appliedTransform = useMemo(() => `scale(${svg.path.scaleX * appliedZoom} ${svg.path.scaleY * appliedZoom}) translate(${svg.path.translateX},${svg.path.translateY})`, [svg.path.scaleX, svg.path.scaleY, svg.path.translateX, svg.path.translateY, appliedZoom]);
  const appliedStyle = useMemo(() => {
    return {
      ...style,
      ...overridenStyle
    };
  },[overridenStyle, style]);
  
  const handleClick = useCallback(() => {
    if (audioUrl) {
      startAudio();
    }
  }, [audioUrl, startAudio]);
  
  return (
    <span
      style={appliedStyle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/2000/svg"
        width={`${svg.width * appliedZoom}`}
        height={`${svg.height * appliedZoom}`}
        overflow="visible"
        onClick={handleClick}
      >
        <g className="avesta-char">
          <path
            d={svg.path.d}
            fill={appliedFill}
            fillRule="evenodd"
            stroke={appliedStroke}
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={svg.path.strokeWidth}
            transform={appliedTransform}
          />
        </g>
      </svg>
    </span>
  );
};
