import { useCallback, useMemo, useState } from 'react';
import { splitTranscript } from '../../tools/common/transcript';
import { useAllLetters, useAudioFromUrl } from '../hooks';
import {
  EncodedHtmlTranscription,
  hasTranscription,
  TranscriptionSymbol,
  useMissingLetter,
  useParagraphSeparator,
  useSentenceSeparator,
  useWordSeparator,
} from '../letters';

export interface TimelineRange {
  start: number;
  end: number;
}

export interface WordTranslation {
  fr?: string;
  en?: string;
  es?: string;
  de?: string;
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
  audioUrl?: string;
  preferredLetterIds?: string[];
  translation?: WordTranslation;
  shrink?: boolean;
}

export const AvestaWord: React.FC<AvestaWordOwnProps> = ({
  audioUrl,
  transcript,
  zoom,
  timeline,
  currentTimeline,
  isLastWordInSentence,
  isLastWordInParagraph,
  preferredLetterIds,
  renderTranscriptOnly,
  shrink,
  onWordSeek,
}) => {
  const [transcriptions] = useState(splitTranscript(transcript));
  const allLeters = useAllLetters();
  const missingLetter = useMissingLetter();
  const wordSeparator = useWordSeparator();
  const sentenceSeparator = useSentenceSeparator();
  const paragraphSeparator = useParagraphSeparator();
  const [appliedAudioUrl] = useState<string | undefined>(audioUrl);
  const [startAudio] = useAudioFromUrl(appliedAudioUrl);

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
      .map((transcription, index) => {
        const isFirstLetterInWord = index === 0;
        const isLastLetterInWord = index === transcriptions.length - 1;
        const isMiddleLetterInWord = !isFirstLetterInWord && !isLastLetterInWord;

        const lettersWithSameTranscription = allLeters.filter((letter) =>
          hasTranscription(letter, transcription),
        );

        if (lettersWithSameTranscription.length === 0) {
          return missingLetter;
        }

        const firstLetter = lettersWithSameTranscription.find(
          (l) => l.useWhenFirstLetterInWord && isFirstLetterInWord,
        );
        const middleLetter = lettersWithSameTranscription.find(
          (l) => l.useWhenInsideWord && isMiddleLetterInWord,
        );

        if (
          lettersWithSameTranscription.length > 1 &&
          Array.isArray(preferredLetterIds) &&
          preferredLetterIds.length > 0
        ) {
          const preferredLetterFromProps = lettersWithSameTranscription.find((letter) =>
            preferredLetterIds.some((id) => id === letter.id),
          );
          const preferredLetter = lettersWithSameTranscription.find((letter) => letter.isPreferred);
          return (
            preferredLetterFromProps ||
            firstLetter ||
            middleLetter ||
            preferredLetter ||
            lettersWithSameTranscription[0]
          );
        }

        if (lettersWithSameTranscription.length > 1) {
          const preferredLetter = lettersWithSameTranscription.find((letter) => letter.isPreferred);
          return firstLetter || middleLetter || preferredLetter || lettersWithSameTranscription[0];
        }

        return lettersWithSameTranscription[0];
      });
    characters.push(separator);

    return characters.reverse();
  }, [transcriptions, separator, allLeters, preferredLetterIds, missingLetter]);

  const transcriptedLetters = useMemo(() => {
    const characters = [...transcriptions];
    if (isLastWordInSentence || isLastWordInParagraph) {
      characters.push('.');
    }

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

    if (audioUrl) {
      startAudio();
    }
  }, [audioUrl, onWordSeek, startAudio, timeline]);

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
            <span key={`${letter}-${index}`}>
              <EncodedHtmlTranscription symbol={letter as TranscriptionSymbol} noSpan={true} />
            </span>
          ))}
        </div>
      ) : (
        <div
          className={`ms-2 avesta-word cursor-pointer ${isOntrack ? 'outline-2-info' : ''} ${
            shrink ? 'text-nowrap' : ''
          }`}
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
