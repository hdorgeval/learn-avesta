import { FC, useCallback, useMemo } from "react";
import ReactPlayer from 'react-player';
import { useAnalytics } from "../hooks";
import './VideoPlayer.css';

export interface VideoPlayerOwnProps {
  videoUrl: string;
  startTime?: string;
  endTime?:string;
  thumbnailUrl?: string;
}
export const VideoPlayer: FC<VideoPlayerOwnProps> = ({videoUrl, startTime, endTime, thumbnailUrl}) => {
  const [addEvent] = useAnalytics();
  const framedUrl = useMemo(() => {
    if (startTime && endTime) {
      return `${videoUrl}#t=${startTime},${endTime}`;
    }
    if (startTime) {
      return `${videoUrl}#t=${startTime}`;
    }
    return videoUrl;
  }, [endTime, startTime, videoUrl]);

  const light = useMemo(() => {
    if (thumbnailUrl) {
      return thumbnailUrl;
    }
    return true;
  } , [thumbnailUrl]);

  const playing = useMemo(() => {
    if (thumbnailUrl) {
      return true;
    }
    return false;
  } , [thumbnailUrl]);
  
  const handleOnStart = useCallback(() => {
    addEvent('start-video-avestan-script-and-sounds');
  } , [addEvent]);

  return (
    <div className="position-relative w-100 h-100">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={framedUrl}
          controls={true}
          width="100%"
          height="100%"
          light={light}
          playing={playing}
          onStart={handleOnStart}
        />
      </div>
    </div>
    
  );
};

VideoPlayer.displayName = "VideoPlayer";