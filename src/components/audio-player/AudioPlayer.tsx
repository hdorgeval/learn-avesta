import { FC, useCallback, useMemo, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import './AudioPlayer.css';

export interface AudioProgressEvent {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

export interface AudioPlayerOwnProps {
  audioUrl: string;
  autoStart: boolean;
  forcePause?: boolean;
  forceContinue?: boolean;
  startTime?: string;
  endTime?: string;
  thumbnailUrl?: string;
  onClickPreview?: () => void;
  onPause?: () => void;
  onPlay?: () => void;
  onReady?: (player: ReactPlayer | null) => void;
  onStart?: () => void;
  onSeek?: (seconds: number) => void;
  onProgress?: (progress: AudioProgressEvent) => void;
}

export const AudioPlayer: FC<AudioPlayerOwnProps> = ({
  audioUrl,
  autoStart,
  endTime,
  forceContinue,
  forcePause,
  startTime,
  thumbnailUrl,
  onClickPreview,
  onPause,
  onPlay,
  onProgress,
  onReady,
  onSeek,
  onStart,
}) => {
  const [isReady, setIsReady] = useState(false);
  const reactPlayerRef = useRef<ReactPlayer>(null);

  const framedUrl = useMemo(() => {
    if (startTime && endTime) {
      return `${audioUrl}#t=${startTime},${endTime}`;
    }
    if (startTime) {
      return `${audioUrl}#t=${startTime}`;
    }
    return audioUrl;
  }, [endTime, startTime, audioUrl]);

  const light = useMemo(() => {
    if (thumbnailUrl) {
      return thumbnailUrl;
    }
    return true;
  }, [thumbnailUrl]);

  const playing = useMemo(() => {
    if (forceContinue) {
      return true;
    }

    if (forcePause) {
      return false;
    }

    if (autoStart) {
      return true;
    }

    return false;
  }, [forceContinue, forcePause, autoStart]);

  const wrapperClassName = useMemo(() => {
    return isReady ? 'audio-player-wrapper-on-ready' : 'audio-player-wrapper';
  }, [isReady]);

  const handleOnReady = useCallback(() => {
    setIsReady(true);
    if (onReady) {
      onReady(reactPlayerRef.current);
    }
  }, [onReady]);

  const handleOnClickPreview = useCallback(() => {
    if (onClickPreview) {
      onClickPreview();
    }
  }, [onClickPreview]);

  return (
    <div className="position-relative w-100 h-100 mt-4">
      <div className={wrapperClassName}>
        <ReactPlayer
          ref={reactPlayerRef}
          className="audio-react-player"
          url={framedUrl}
          controls={true}
          width="100%"
          height="100%"
          light={light}
          playing={playing}
          onStart={onStart}
          onReady={handleOnReady}
          onSeek={onSeek}
          onProgress={onProgress}
          onClickPreview={handleOnClickPreview}
          onPause={onPause}
          onPlay={onPlay}
        />
      </div>
    </div>
  );
};

AudioPlayer.displayName = 'AudioPlayer';
