import { useCallback, useMemo } from "react";
import { useAllLetters } from "../hooks";
import { useMissingLetter, useSentenceSeparator, useWordSeparator } from "../letters";

export interface TimelineRange {
  start: number;
  end: number;
}

export interface AvestaWordOwnProps {
  transcript: string;
  zoom: number;
  timeline?: TimelineRange;
  currentTimeline?: number
  onWordSeek?: (timeline: TimelineRange) => void;
  isLastWordInSentence?: boolean;
  isLastWordInParagraph?: boolean;
}

export const AvestaWord: React.FC<AvestaWordOwnProps> = ({transcript, zoom, timeline, currentTimeline, isLastWordInSentence, onWordSeek}) => {
  const transcriptions = transcript.split('');
  const allLeters = useAllLetters();
  const missingLetter = useMissingLetter();
  const wordSeparator = useWordSeparator();
  const sentenceSeparator = useSentenceSeparator();

  const separator = useMemo(() => {
    if (isLastWordInSentence) {
      return sentenceSeparator;
    }
    return wordSeparator;
  } , [isLastWordInSentence, sentenceSeparator, wordSeparator]);
  const letters = useMemo(() => {
    const characters =  transcriptions.map(t => t.toLowerCase()).map((transcription) => {
      const letter = allLeters.find(letter => letter.transcription === transcription);
      return letter || missingLetter;
    });
    characters.push(separator);
    return characters.reverse();
  }, [transcriptions, separator, allLeters, missingLetter]);

  const isOntrack = useMemo(() => {
    if (timeline && currentTimeline) {
      return currentTimeline >= timeline.start -0.5 && currentTimeline < timeline.end;
    }
    return false;
  } , [currentTimeline, timeline]);

  const handleClick = useCallback(() => {
    if (onWordSeek && timeline) {
      onWordSeek(timeline);
    }
  } , [onWordSeek, timeline]);

  return (
    <div 
      className={`ms-2 avesta-word cursor-pointer ${isOntrack ? 'outline-2-info' : ''}`}
      onClick={handleClick}
    >
      {letters.map((letter, index) => letter.render({zoom, key: `${letter.transcription}-${index}`, disableSound: true}))}
    </div>
  );
};