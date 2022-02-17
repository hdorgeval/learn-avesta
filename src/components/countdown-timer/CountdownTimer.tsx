import { FC, useMemo, useState } from 'react';
import './CountdownTimer.css';
export interface CountdownTimerOwnProps {
  timeleftInSeconds: number;
  progress: number;
}
export const CountdownTimer: FC<CountdownTimerOwnProps> = ({ timeleftInSeconds, progress }) => {
  const [viewboxDimension] = useState<number>(100);
  const [rawSize] = useState<string>('200px');
  const remainingTime = useMemo(() => {
    if (timeleftInSeconds < 0) {
      return `0m:00s`;
    }
    const minutes = Math.floor(timeleftInSeconds / 60);
    const seconds = timeleftInSeconds - minutes * 60;
    return `${minutes}m:${seconds.toFixed(0)}s`;
  }, [timeleftInSeconds]);

  const viewBox = useMemo(() => {
    return `0 0 ${viewboxDimension} ${viewboxDimension}`;
  }, [viewboxDimension]);

  const viewBoxCenter = useMemo(() => {
    return { x: viewboxDimension / 2, y: viewboxDimension / 2 };
  }, [viewboxDimension]);

  const radius = useMemo(() => {
    return viewboxDimension / 4;
  }, [viewboxDimension]);

  const circumferencePath = useMemo(() => {
    return `M ${viewBoxCenter.x}, ${
      viewBoxCenter.y
    } m ${-radius}, 0 a ${radius}, ${radius} 0 1,0  ${
      radius * 2
    }, 0 a ${radius}, ${radius} 0 1,0  -${radius * 2}, 0`;
  }, [radius, viewBoxCenter.x, viewBoxCenter.y]);

  const strokeDashArray = useMemo(() => {
    const l = 2 * Math.PI * radius;
    return `${(l * progress) / 100} ${l}`;
  }, [progress, radius]);

  return (
    <>
      <div className="position-relative" style={{ width: rawSize }}>
        <svg
          className="svg-timer"
          width={rawSize}
          height={rawSize}
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="none" className="">
            <circle
              cx={viewBoxCenter.x}
              cy={viewBoxCenter.y}
              r={radius}
              strokeWidth="1"
              stroke="#cfd8dc"
            ></circle>
            <path
              strokeDasharray={strokeDashArray}
              strokeWidth="1"
              className="remaining-path"
              stroke="#f5a425"
              d={circumferencePath}
            ></path>
          </g>
        </svg>
        <div
          className="position-absolute d-flex justify-content-center align-items-center top-0 "
          style={{ height: rawSize, width: rawSize }}
        >
          <span className="fs-4 text-light fw-bolder">{remainingTime}</span>
        </div>
      </div>
    </>
  );
};

CountdownTimer.displayName = 'CountdownTimer';
