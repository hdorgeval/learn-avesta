import { FC, useCallback, useMemo, useState } from 'react';
import ReactPlayer from 'react-player';
import { AudioPlayer, AudioProgressEvent } from '../../audio-player';
import { CountdownTimer } from '../../countdown-timer';
import { useAnalytics } from '../../hooks';
import { AvestaWord, AvestaWordOwnProps } from '../../words';
import audioTrack from './assets/101-names.mp3';
import previewActivity from './assets/preview-101-names-of-ahura-mazda.png';
import { names101 } from './data';

export const AhuraMazda101NamesActivity: FC = () => {
  const [displayNewComerHint, setDisplayNewComerHint] = useState(true);
  const [addEvent] = useAnalytics();
  const [isActivityStarted, setIsActivityStarted] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [forceAudioToPause, setForceAudioToPause] = useState(false);
  const [forceAudioToContinue, setForceAudioToContinue] = useState(false);
  const [audioIsPaused, setAudioIsPaused] = useState(false);
  const [currentTimeline, setCurrentTimeline] = useState(-1);
  const [audioPlayerRef, setAudioPlayerRef] = useState<ReactPlayer | null>(null);
  const [audioPlayOnSart, setAudioPlayOnSart] = useState(false);
  const [names] = useState<AvestaWordOwnProps[]>(names101);
  const [currentName, setCurrentName] = useState<AvestaWordOwnProps | undefined>(undefined);
  const [currentNameIndex, setCurrentNameIndex] = useState<number>(-1);
  const [timelineInSecondsOfFirstName] = useState<number>(names[0].timeline?.start || 0);
  const [timelineInSecondsOfLastName] = useState<number>(
    names[names.length - 1].timeline?.end || 0,
  );
  const [endOfTimelineInSeconds] = useState<number>(253.24);
  const [remainingTimingInSecondsBeforeFirstName, setRemainingTimingInSecondsBeforeFirstName] =
    useState(timelineInSecondsOfFirstName);
  const [countdownProgressBeforeFirstName, setCountdownProgressBeforeFirstName] = useState(0);
  const [countdownProgressAfterLastName, setCountdownProgressAfterLastName] = useState(0);

  const [remainingTimingInSecondsAfterLastName, setRemainingTimingInSecondsAfterLastName] =
    useState(endOfTimelineInSeconds - timelineInSecondsOfLastName);

  const handleNewComerHint = useCallback(() => {
    setDisplayNewComerHint(false);
  }, []);

  const handleOnAudioReady = useCallback((player: ReactPlayer | null) => {
    setIsAudioReady(true);
    setAudioPlayerRef(player);
    setTimeout(() => {
      setAudioPlayOnSart(true);
    }, 0);
  }, []);

  const handleOnAudioStart = useCallback(() => {
    setCurrentTimeline(0);
  }, []);
  const findCurrentName = useCallback(
    (timelineInSeconds: number) => {
      const currentName = names
        .filter(
          (name) =>
            name.timeline &&
            timelineInSeconds > name.timeline.start - 1 &&
            timelineInSeconds <= name.timeline.end,
        )
        .pop();
      return currentName;
    },
    [names],
  );

  const getRemainingTimeBeforeFirstName = useCallback(
    (timelineInSeconds: number) => {
      const remainingTime = timelineInSecondsOfFirstName - timelineInSeconds;
      return remainingTime;
    },
    [timelineInSecondsOfFirstName],
  );

  const getRemainingTimeAfterLastName = useCallback(
    (timelineInSeconds: number) => {
      const remainingTime = endOfTimelineInSeconds - timelineInSeconds;
      return remainingTime;
    },
    [endOfTimelineInSeconds],
  );

  const getCountdownProgressBeforeFirstName = useCallback(
    (timelineInSeconds: number) => {
      const remainingTime = timelineInSecondsOfFirstName - timelineInSeconds;
      const ratio = (1 - remainingTime / timelineInSecondsOfFirstName) * 100;
      return ratio < 0 ? 0 : Math.floor(ratio);
    },
    [timelineInSecondsOfFirstName],
  );

  const getCountdownProgressAfterLastName = useCallback(
    (timelineInSeconds: number) => {
      if (timelineInSeconds < timelineInSecondsOfLastName) {
        return 100;
      }
      const remainingTime = endOfTimelineInSeconds - timelineInSeconds;
      const ratio =
        (1 - remainingTime / (endOfTimelineInSeconds - timelineInSecondsOfLastName)) * 100;
      return ratio < 0 ? 0 : Math.floor(ratio);
    },
    [endOfTimelineInSeconds, timelineInSecondsOfLastName],
  );

  const handleOnAudioPause = useCallback(() => {
    if (!audioIsPaused) {
      setForceAudioToPause(true);
      setForceAudioToContinue(false);
      setAudioIsPaused(true);
    }
  }, [audioIsPaused]);

  const handleOnAudioPlay = useCallback(() => {
    if (audioIsPaused) {
      if (currentNameIndex >= 0) {
        audioPlayerRef?.seekTo(names[currentNameIndex].timeline?.start || 0);
      }
      setForceAudioToPause(false);
      setForceAudioToContinue(true);
      setAudioIsPaused(false);
      return;
    }
  }, [audioIsPaused, audioPlayerRef, currentNameIndex, names]);

  const handlePauseOrPlayOfName = useCallback(() => {
    if (audioIsPaused) {
      handleOnAudioPlay();
      return;
    }

    handleOnAudioPause();
  }, [audioIsPaused, handleOnAudioPause, handleOnAudioPlay]);

  const handleOnAudioSeek = useCallback(
    (seconds: number) => {
      const newCurrentName = findCurrentName(seconds);
      const newCurrentNameIndex = newCurrentName ? names.indexOf(newCurrentName) : -1;
      setCurrentName(newCurrentName);
      setCurrentNameIndex(newCurrentNameIndex);
    },
    [findCurrentName, names],
  );

  const handleOnAudioProgress = useCallback(
    (progress: AudioProgressEvent) => {
      setCurrentTimeline(progress.playedSeconds);
      const newCurrentName = findCurrentName(progress.playedSeconds);
      const newCurrentNameIndex = newCurrentName ? names.indexOf(newCurrentName) : -1;
      setCurrentName(newCurrentName);
      setCurrentNameIndex(newCurrentNameIndex);
      setRemainingTimingInSecondsBeforeFirstName(
        getRemainingTimeBeforeFirstName(progress.playedSeconds),
      );
      setRemainingTimingInSecondsAfterLastName(
        getRemainingTimeAfterLastName(progress.playedSeconds),
      );
      setCountdownProgressBeforeFirstName(
        getCountdownProgressBeforeFirstName(progress.playedSeconds),
      );
      setCountdownProgressAfterLastName(getCountdownProgressAfterLastName(progress.playedSeconds));
    },
    [
      findCurrentName,
      getCountdownProgressAfterLastName,
      getCountdownProgressBeforeFirstName,
      getRemainingTimeAfterLastName,
      getRemainingTimeBeforeFirstName,
      names,
    ],
  );

  const handlePlayPreviousName = useCallback(() => {
    const newIndex = currentNameIndex - 1;
    if (newIndex >= 0) {
      audioPlayerRef?.seekTo(names[newIndex].timeline?.start || 0);
    }
  }, [audioPlayerRef, currentNameIndex, names]);

  const handlePlayNextName = useCallback(() => {
    const newIndex = currentNameIndex + 1;
    if (newIndex < names.length) {
      audioPlayerRef?.seekTo(names[newIndex].timeline?.start || 0);
    }
  }, [audioPlayerRef, currentNameIndex, names]);
  const handlePlayFirstName = useCallback(() => {
    audioPlayerRef?.seekTo(names[0].timeline?.start || 0);
    handleOnAudioPlay();
  }, [audioPlayerRef, handleOnAudioPlay, names]);

  const handleOnClickPreview = useCallback(() => {
    setIsActivityStarted(true);
    addEvent('start-101-names-activity');
  }, [addEvent]);

  const isFirstName = useMemo(() => currentNameIndex === 0, [currentNameIndex]);
  const isLastName = useMemo(
    () => currentNameIndex === names.length - 1,
    [currentNameIndex, names.length],
  );
  const isAtEndOfAudioTrack = useMemo(
    () => currentTimeline >= endOfTimelineInSeconds - 5,
    [currentTimeline, endOfTimelineInSeconds],
  );
  return (
    <>
      {isActivityStarted && (
        <>
          <div className="bg-transparent" style={{ minHeight: '100px' }}>
            {countdownProgressBeforeFirstName < 95 && (
              <div className="d-flex justify-content-center">
                <CountdownTimer
                  timeleftInSeconds={remainingTimingInSecondsBeforeFirstName}
                  progress={countdownProgressBeforeFirstName}
                />
              </div>
            )}

            {countdownProgressAfterLastName < 95 && (
              <div className="d-flex justify-content-center">
                <CountdownTimer
                  timeleftInSeconds={remainingTimingInSecondsAfterLastName}
                  progress={countdownProgressAfterLastName}
                />
              </div>
            )}
            {currentName && (
              <>
                <div className="d-flex flex-row justify-content-around align-items-center">
                  <AvestaWord key={currentName.transcript} {...currentName} shrink={true} />
                </div>
                <div className="d-flex flex-row justify-content-around align-items-center text-light">
                  <AvestaWord
                    key={currentName.transcript}
                    {...currentName}
                    renderTranscriptOnly={true}
                  />
                </div>
                <div className="d-flex flex-row justify-content-around align-items-center text-light">
                  <span className="font-monospace mx-2" key={currentName.transcript}>
                    {currentName.translation?.en}
                  </span>
                </div>
                <div className="d-flex flex-row justify-content-around align-items-center text-light">
                  <span className="badge rounded-pill bg-dark text-light">
                    {currentNameIndex + 1}
                  </span>
                </div>
                <div
                  className="mt-4 btn-group text-light d-flex flex-row justify-content-around align-items-center"
                  role="group"
                  aria-label="Word actions"
                >
                  <button
                    className="btn btn-outline-secondary text-light fw-bolder"
                    onClick={handlePlayPreviousName}
                    disabled={isFirstName}
                  >
                    <div className="d-flex flex-row justify-content-center align-items-center">
                      <i className="bi bi-forward icon-flipped text-light me-2"></i>
                      <span>Previous name</span>
                    </div>
                  </button>
                  <button
                    className="btn btn-outline-secondary text-light fw-bolder "
                    onClick={handlePauseOrPlayOfName}
                  >
                    {audioIsPaused ? (
                      <>
                        <div className="d-flex flex-row justify-content-center align-items-center">
                          <i className="bi bi-play-circle text-light me-2"></i>
                          <span>Play name</span>
                        </div>
                      </>
                    ) : (
                      <div className="d-flex flex-row justify-content-center align-items-center">
                        <i className="bi bi-pause-circle text-light me-2"></i>
                        <span>Pause name</span>
                      </div>
                    )}
                  </button>
                  <button
                    className="btn btn-outline-secondary text-light fw-bolder"
                    onClick={handlePlayNextName}
                    disabled={isLastName}
                  >
                    <div className="d-flex flex-row justify-content-center align-items-center">
                      <span>Next name</span>
                      <i className="bi bi-forward text-light ms-2"></i>
                    </div>
                  </button>
                </div>
              </>
            )}
            {isAtEndOfAudioTrack && (
              <div
                className="mt-4 btn-group text-light d-flex flex-row justify-content-around align-items-center"
                role="group"
                aria-label="Word actions"
              >
                <button
                  className="btn btn-outline-secondary text-light fw-bolder"
                  onClick={handlePlayFirstName}
                  disabled={isFirstName}
                >
                  <div className="d-flex flex-row justify-content-center align-items-center">
                    <i className="bi bi-skip-backward text-light me-2"></i>
                    <span>Restart at First Name</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </>
      )}
      <AudioPlayer
        autoStart={audioPlayOnSart}
        thumbnailUrl={previewActivity}
        audioUrl={audioTrack}
        forcePause={forceAudioToPause}
        forceContinue={forceAudioToContinue}
        onReady={handleOnAudioReady}
        onStart={handleOnAudioStart}
        onSeek={handleOnAudioSeek}
        onProgress={handleOnAudioProgress}
        onClickPreview={handleOnClickPreview}
        onPause={handleOnAudioPause}
        onPlay={handleOnAudioPlay}
      ></AudioPlayer>

      <div className="d-flex flex-column align-items-center">
        <a
          className="text-light fs-6 text-muted"
          href="https://ramiyarkaranjia.com/101-names-of-god/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="101 names of God source"
        >
          Credit: Ramiyar P. Karanjia
          <i className="bi bi-box-arrow-up-right ms-2"></i>
        </a>
      </div>

      {displayNewComerHint && isAudioReady && (
        <div className="card bg-dark text-light">
          <div className="card-body d-flex align-items-center flex-column ">
            <p className="card-text flex-fill">
              <i className="bi bi-info-circle"></i> This feature is in early stage : the idea is to
              be able to sync, in both direction, an audio track with the corresponding 101 Names in
              their three forms: Avestan, transposed and English translation. Some words have
              missing letters.
            </p>
            <button className="btn btn-primary mt-2 me-2" onClick={handleNewComerHint}>
              Got it !
            </button>
          </div>
        </div>
      )}
    </>
  );
};

AhuraMazda101NamesActivity.displayName = 'AhuraMazda101NamesActivity';
