import { FC, useCallback, useState } from 'react';
import ReactPlayer from 'react-player';
import previewAvestaSong from '../../../assets/images/audio-preview-avesta-song.png';
import avestaSong from '../../../assets/songs/avesta-song.mp3';
import { AudioPlayer, AudioProgressEvent } from '../../audio-player';
import { useAnalytics } from '../../hooks';
import { useParagraphSeparator, useSentenceSeparator, useWordSeparator } from '../../letters';
import { Sentence, SentenceOwnProps } from '../../sentences';
import { TimelineRange } from '../../words';
export const AvestaSongActivity: FC = () => {
  const [displayNewComerHint, setDisplayNewComerHint] = useState(true);
  const [addEvent] = useAnalytics();
  const [isActivityStarted, setIsActivityStarted] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [currentTimeline, setCurrentTimeline] = useState(-1);
  const [audioPlayerRef, setAudioPlayerRef] = useState<ReactPlayer | null>(null);
  const [audioPlayOnSart, setAudioPlayOnSart] = useState(false);
  const [sentences] = useState<SentenceOwnProps[]>([
    {
      transcript: 'yānīm manō yānīm vacō yānīm śyaoθnəm aṣaonō Zaraθuštrahe',
      timeline: '0-1.34 1.34-2.38 2.38-3.81 3.81-4.88 4.88-6.28 6.28-9.36 9.67-12.32 12.32-14.86',
    },
    {
      transcript: 'fərā ameṣā spəṇtā gāθā̊ gǝ̄urwāin',
      timeline: '14.86-15.75 15.81-18.30 18.69-19.73 19.73-21.25 21.25-24.57',
      isLastSentenceInParagraph: true,
    },
    {
      transcript: 'Nəmō wǝ̄ gāθā̊ aṣaonīš',
      timeline: '24.84-25.42 25.58-25.90 25.91-27.33 27.41-30.81',
    },
  ]);
  const handleNewComerHint = useCallback(() => {
    setDisplayNewComerHint(false);
  }, []);

  const sentenceSeparator = useSentenceSeparator();
  const wordSeparator = useWordSeparator();
  const paragraphSeparator = useParagraphSeparator();
  const handleOnClickPreview = useCallback(() => {
    setIsActivityStarted(true);
    addEvent('start-avesta-song-activity');
  }, [addEvent]);

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

  const handleOnAudioSeek = useCallback((seconds: number) => {
    setCurrentTimeline(seconds);
  }, []);

  const handleOnAudioProgress = useCallback((progress: AudioProgressEvent) => {
    setCurrentTimeline(progress.playedSeconds);
  }, []);

  const handleWordSeek = useCallback(
    (progress: TimelineRange) => {
      setCurrentTimeline(progress.start);
      audioPlayerRef?.seekTo(progress.start);
    },
    [audioPlayerRef],
  );

  return (
    <>
      {isActivityStarted && (
        <>
          <div className="bg-transparent">
            {sentences.map((sentence, index) => (
              <Sentence
                key={`avesta-sentence-${index}`}
                transcript={sentence.transcript}
                timeline={sentence.timeline}
                isLastSentenceInParagraph={sentence.isLastSentenceInParagraph}
                zoom={0.5}
                currentTimeline={currentTimeline}
                onWordSeek={handleWordSeek}
              />
            ))}
          </div>
          <div className="bg-transparent mt-2">
            {sentences.map((sentence, index) => (
              <Sentence
                key={`transcript-sentence-${index}`}
                transcript={sentence.transcript}
                timeline={sentence.timeline}
                isLastSentenceInParagraph={sentence.isLastSentenceInParagraph}
                zoom={0.5}
                currentTimeline={currentTimeline}
                onWordSeek={handleWordSeek}
                renderTranscriptOnly={true}
              />
            ))}
          </div>
        </>
      )}
      <AudioPlayer
        autoStart={audioPlayOnSart}
        thumbnailUrl={previewAvestaSong}
        audioUrl={avestaSong}
        onReady={handleOnAudioReady}
        onStart={handleOnAudioStart}
        onSeek={handleOnAudioSeek}
        onProgress={handleOnAudioProgress}
        onClickPreview={handleOnClickPreview}
      ></AudioPlayer>

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

      {displayNewComerHint && isAudioReady && (
        <div className="card bg-dark text-light">
          <div className="card-body d-flex align-items-center flex-column ">
            <p className="card-text flex-fill">
              <i className="bi bi-lightbulb"></i> You can click on a word to replay it.
            </p>
            <p className="card-text flex-fill">
              <i className="bi bi-lightbulb"></i> Did you notice that each word is separated from
              the next by a <span className="ps-1">{wordSeparator.render()}</span> mark?
            </p>
            <p className="card-text flex-fill">
              <i className="bi bi-lightbulb"></i> Did you also notice that{' '}
              <span className="ps-1">{sentenceSeparator.render()}</span> is used to mark the end of
              a sentence, and that <span className="ps-1">{paragraphSeparator.render()}</span> is
              used to mark the end of a paragraph?
            </p>
            <p className="card-text flex-fill">
              <i className="bi bi-info-circle"></i> This feature is in early stage : the idea is to
              be able to sync, in both direction, an audio track with corresponding Avestan text and
              transposed text. The current text has missing letters and sentences.
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

AvestaSongActivity.displayName = 'AvestSongActivity';
