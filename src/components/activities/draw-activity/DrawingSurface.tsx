import { getStroke, StrokeOptions } from 'perfect-freehand';
import React from 'react';
import { useAnalytics } from '../../hooks';

export interface DrawingPoint {
  x: number;
  y: number;
  pressure?: number;
}

export function getSvgPathFromStroke(stroke: number[][]): string {
  if (!stroke.length) return '';

  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ['M', ...stroke[0], 'Q'],
  );

  d.push('Z');
  return d.join(' ');
}

export const DrawingSurface: React.FC = ({ children }) => {
  const [addEvent] = useAnalytics();
  const [points, setPoints] = React.useState<DrawingPoint[]>([]);
  const options = React.useMemo<StrokeOptions>(() => {
    return {
      size: 11,
      thinning: 0.5,
      smoothing: 0.5,
      streamline: 0.5,
      easing: (t) => t,
      start: {
        taper: 19,
        easing: (t) => t,
        cap: true,
      },
      end: {
        taper: 40,
        easing: (t) => t,
        cap: true,
      },
    };
  }, []);

  const handlePointerDown = React.useCallback(
    (e: React.PointerEvent<SVGElement>) => {
      const target = e.target as HTMLElement;
      const nativeEvent = e.nativeEvent as PointerEvent;
      target.setPointerCapture(e.pointerId);

      const firstPoint: DrawingPoint = {
        x: nativeEvent.offsetX,
        y: nativeEvent.offsetY,
        pressure: e.pressure,
      };
      setPoints([firstPoint]);
      addEvent('drawing');
    },
    [addEvent],
  );

  const handlePointerMove = React.useCallback(
    (e: React.PointerEvent<SVGElement>) => {
      if (e.buttons !== 1) {
        return;
      }
      const nativeEvent = e.nativeEvent as PointerEvent;

      const addedPoint: DrawingPoint = {
        x: nativeEvent.offsetX,
        y: nativeEvent.offsetY,
        pressure: e.pressure,
      };
      setPoints([...points, addedPoint]);
    },
    [points],
  );

  const stroke = React.useMemo(() => getStroke(points, options), [points, options]);
  const pathData = React.useMemo(() => getSvgPathFromStroke(stroke), [stroke]);

  return (
    <div className="position-relative w-100 h-100 m-h-0">
      <div className="position-absolute w-100 h-100 top-0 ps-4 pe-4">{children}</div>
      <div className="position-absolute w-100 h-100 left-0 end-0 bottom-0 cursor-crosshair">
        <svg
          width="100%"
          height="100%"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          style={{ touchAction: 'none' }}
          overflow="visible"
        >
          <g className="avesta-char">
            {points && <path d={pathData} fill="black" stroke="black" />}
          </g>
        </svg>
      </div>
    </div>
  );
};

DrawingSurface.displayName = 'DrawingSurface';
