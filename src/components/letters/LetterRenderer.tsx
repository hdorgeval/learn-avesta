import { CSSProperties, FC, useCallback, useMemo } from 'react';
import { useAudioFromUrl } from '../hooks';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

export interface LetterRendererOwnProps {
  disableSound?: boolean;
  disableTranslate?: boolean;
  textToSpeech?: string;
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
      disableZoomOnYTranslation?: boolean;
    };
  };
}
/**
 * Letter Renderer
 */
export const LetterRenderer: FC<LetterRendererOwnProps> = ({
  style,
  overridenStyle,
  svg,
  audioUrl,
  textToSpeech,
  disableSound,
  disableTranslate,
}) => {
  const [startAudio] = useAudioFromUrl(audioUrl);
  const [speak] = useSpeechSynthesis();

  const appliedZoom = useMemo(() => svg.zoom || 1, [svg.zoom]);
  const appliedStrokeWidth = useMemo(() => {
    if (appliedZoom > 1) {
      return svg.path.strokeWidth;
    }
    return svg.path.strokeWidth * appliedZoom;
  }, [svg.path.strokeWidth, appliedZoom]);
  const appliedFill = useMemo(() => svg.path.fill || '#f5a425', [svg.path.fill]);
  const appliedStroke = useMemo(() => svg.path.stroke || '#000000', [svg.path.stroke]);
  const appliedTransform = useMemo(() => {
    if (disableTranslate) {
      return `scale(${svg.path.scaleX * appliedZoom} ${svg.path.scaleY * appliedZoom})`;
    }

    if (svg.path.disableZoomOnYTranslation) {
      return `scale(${svg.path.scaleX * appliedZoom} ${svg.path.scaleY * appliedZoom}) translate(${
        svg.path.translateX * appliedZoom
      },${svg.path.translateY})`;
    }

    return `scale(${svg.path.scaleX * appliedZoom} ${svg.path.scaleY * appliedZoom}) translate(${
      svg.path.translateX * appliedZoom
    },${svg.path.translateY * appliedZoom})`;
  }, [
    disableTranslate,
    svg.path.disableZoomOnYTranslation,
    svg.path.scaleX,
    svg.path.scaleY,
    svg.path.translateX,
    svg.path.translateY,
    appliedZoom,
  ]);

  const appliedStyle = useMemo(() => {
    const appliedLeftMargin = zoomifyMargin(style?.marginLeft, appliedZoom);
    if (appliedLeftMargin) {
      return {
        ...style,
        marginLeft: appliedLeftMargin,
        ...overridenStyle,
      };
    }

    return {
      ...style,
      ...overridenStyle,
    };
  }, [appliedZoom, overridenStyle, style]);

  const handleClick = useCallback(() => {
    if (disableSound) {
      return;
    }

    if (textToSpeech) {
      speak(textToSpeech);
      return;
    }
    if (audioUrl) {
      startAudio();
    }
  }, [audioUrl, disableSound, speak, startAudio, textToSpeech]);

  return (
    <span style={appliedStyle}>
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
            strokeWidth={appliedStrokeWidth}
            transform={appliedTransform}
          />
        </g>
      </svg>
    </span>
  );
};

function zoomifyMargin(
  margin: string | number | undefined,
  zoom: number,
): string | number | undefined {
  if (zoom === 1) {
    return margin;
  }

  if (typeof margin === 'number') {
    return margin * zoom;
  }

  if (typeof margin === 'string' && margin.endsWith('px')) {
    const rawValue = margin.replace('px', '');
    return `${Number(rawValue) * zoom}px`;
  }

  return margin;
}
