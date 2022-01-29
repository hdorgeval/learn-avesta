import { useCallback, useMemo, useState } from 'react';
import { splitTranscript } from '../../tools/common/transcript';
import { useAllLetters } from '../hooks';
import {
  useMissingLetter,
  useParagraphSeparator,
  useSentenceSeparator,
  useWordSeparator,
} from '../letters';

export interface TimelineRange {
  start: number;
  end: number;
}

export interface AvestaWordOwnProps {
  transcript: string;
  zoom: number;
  timeline?: TimelineRange;
  currentTimeline?: number;
  onWordSeek?: (timeline: TimelineRange) => void;
  isLastWordInSentence?: boolean;
  isLastWordInParagraph?: boolean;
  renderTranscriptOnly?: boolean;
}

export const AvestaWord: React.FC<AvestaWordOwnProps> = ({
  transcript,
  zoom,
  timeline,
  currentTimeline,
  isLastWordInSentence,
  isLastWordInParagraph,
  renderTranscriptOnly,
  onWordSeek,
}) => {
  const [transcriptions] = useState(splitTranscript(transcript));
  const allLeters = useAllLetters();
  const missingLetter = useMissingLetter();
  const wordSeparator = useWordSeparator();
  const sentenceSeparator = useSentenceSeparator();
  const paragraphSeparator = useParagraphSeparator();

  const separator = useMemo(() => {
    if (isLastWordInParagraph) {
      return paragraphSeparator;
    }

    if (isLastWordInSentence) {
      return sentenceSeparator;
    }

    return wordSeparator;
  }, [
    isLastWordInParagraph,
    isLastWordInSentence,
    paragraphSeparator,
    sentenceSeparator,
    wordSeparator,
  ]);
  const avestanLetters = useMemo(() => {
    const characters = transcriptions
      .map((t) => t.toLowerCase())
      .map((transcription) => {
        const lettersWithSameTranscription = allLeters.filter(
          (letter) => letter.transcription === transcription,
        );

        if (lettersWithSameTranscription.length === 0) {
          return missingLetter;
        }

        if (lettersWithSameTranscription.length > 1) {
          const preferredLetter = lettersWithSameTranscription.find((letter) => letter.isPreferred);
          return preferredLetter || lettersWithSameTranscription[0];
        }

        return lettersWithSameTranscription[0];
      });
    characters.push(separator);

    return characters.reverse();
  }, [transcriptions, separator, allLeters, missingLetter]);

  const transcriptedLetters = useMemo(() => {
    const characters = [...transcriptions];
    if (isLastWordInSentence || isLastWordInParagraph) {
      characters.push('.');
    }
    // eslint-disable-next-line no-console
    console.log(characters);
    return characters;
  }, [isLastWordInParagraph, isLastWordInSentence, transcriptions]);

  const isOntrack = useMemo(() => {
    if (timeline && currentTimeline) {
      return currentTimeline >= timeline.start - 0.5 && currentTimeline < timeline.end;
    }
    return false;
  }, [currentTimeline, timeline]);

  const appliedFontSizeForTranscriptText = useMemo(() => {
    if (zoom < 1) {
      return 'fs-6';
    }
    if (zoom === 1) {
      return 'fs-5';
    }

    return 'fs-4';
  }, [zoom]);

  const handleClick = useCallback(() => {
    if (onWordSeek && timeline) {
      onWordSeek(timeline);
    }
  }, [onWordSeek, timeline]);

  return (
    <>
      {renderTranscriptOnly ? (
        <div
          className={`me-2 ${appliedFontSizeForTranscriptText} fw-bolder avesta-word cursor-pointer ${
            isOntrack ? 'outline-2-info' : ''
          }`}
          onClick={handleClick}
        >
          {transcriptedLetters.map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </div>
      ) : (
        <div
          className={`ms-2 avesta-word cursor-pointer ${isOntrack ? 'outline-2-info' : ''}`}
          onClick={handleClick}
        >
          {avestanLetters.map((letter, index) =>
            letter.render({ zoom, key: `${letter.transcription}-${index}`, disableSound: true }),
          )}
        </div>
      )}
    </>
  );
};
