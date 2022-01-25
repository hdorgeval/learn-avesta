import { FC, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import previewAvestaSong from '../../../assets/images/audio-preview-avesta-song.png';
import avestaSong from '../../../assets/songs/avesta-song.mp3';
import { AudioPlayer, AudioProgressEvent } from "../../audio-player";
import { useAnalytics } from "../../hooks";
import { Sentence } from "../../sentences";
import { TimelineRange } from "../../words";
export const AvestaSongActivity: FC= () => {
  const [displayNewComerHint, setDisplayNewComerHint] = useState(true);
  const [addEvent] = useAnalytics();
  const [isReady, setIsReady] = useState(false);
  const [currentTimeline, setCurrentTimeline] = useState(-1);
  const [audioPlayerRef, setAudioPlayerRef] = useState<ReactPlayer | null>(null);

  const handleNewComerHint = useCallback(() => {
    setDisplayNewComerHint(false);
  }
  , []);
  
  const handleOnReady = useCallback((player: ReactPlayer | null) => {
    addEvent('start-avesta-song-activity');
    setIsReady(true);
    setAudioPlayerRef(player);
  } , [addEvent]);

  const handleOnStart = useCallback(() => {
    setCurrentTimeline(0);
  } , []);

  const handleOnSeek = useCallback((seconds: number) => {
    setCurrentTimeline(seconds);
  } , []);

  const handleOnProgress = useCallback((progress: AudioProgressEvent) => {
    setCurrentTimeline(progress.playedSeconds);
  } , []);

  const handleWordSeek = useCallback((progress: TimelineRange) => {
    setCurrentTimeline(progress.start);
    audioPlayerRef?.seekTo(progress.start);
  } , [audioPlayerRef]);

  return (
    <>
      {isReady && (
        <div className="bg-transparent">
          <Sentence  transcript="yānīm manō yānīm vacō yānīm śyaoθnəm" timeline="0-1.34 1.34-2.38 2.38-3.81 3.81-4.88 4.88-6.28 6.28-9.36" zoom={0.5} currentTimeline={currentTimeline} onWordSeek={handleWordSeek}/>
        </div>
      )}
      <AudioPlayer 
        thumbnailUrl={previewAvestaSong}
        audioUrl={avestaSong}
        onReady={handleOnReady}
        onStart={handleOnStart}
        onSeek={handleOnSeek}
        onProgress={handleOnProgress}>
        
      </AudioPlayer>
      
      <div className="d-flex flex-column align-items-center">
        <a
          className="text-light fs-6 text-muted"
          href="https://www.youtube.com/watch?v=pPyRu7fLoFw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Audio session source"
        >
                  Credit: Prologue to the Ahunavaiti Gatha of Zarathushtra
          <i className="bi bi-box-arrow-up-right ms-2"></i>
        </a>
      </div>

      { displayNewComerHint && isReady && (
        <div className="card bg-dark text-light">
          <div className="card-body d-flex align-items-center flex-column ">
            <p className="card-text flex-fill"><i className="bi bi-lightbulb"></i> You can click on a word to replay it.</p>
            <p className="card-text flex-fill"><i className="bi bi-info-circle"></i> This feature is in early stage at the moment: the idea is to be able to sync in both direction an audio track with corresponding Avestan text and transposed text. The current text has missing letters and sentences.</p>
            <button  className="btn btn-primary mt-2 me-2" onClick={handleNewComerHint}>Got it !</button>
          </div>
        </div>
              
      )
      }
    </>
  );
};

AvestaSongActivity.displayName = 'AvestSongActivity';