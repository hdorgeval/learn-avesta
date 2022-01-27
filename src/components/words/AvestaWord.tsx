import { useCallback, useMemo } from "react";
import { useAllLetters } from "../hooks";
import { useMissingLetter, useParagraphSeparator, useSentenceSeparator, useWordSeparator } from "../letters";

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

export const AvestaWord: React.FC<AvestaWordOwnProps> = ({transcript, zoom, timeline, currentTimeline, isLastWordInSentence, isLastWordInParagraph, onWordSeek}) => {
  const transcriptions = transcript.split('');
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
  } , [isLastWordInParagraph, isLastWordInSentence, paragraphSeparator, sentenceSeparator, wordSeparator]);
  const letters = useMemo(() => {
    const characters =  transcriptions.map(t => t.toLowerCase()).map((transcription) => {
      const lettersWithSameTranscription = allLeters.filter(letter => letter.transcription === transcription);
      
      if (lettersWithSameTranscription.length === 0) {
        return missingLetter;
      }

      if (lettersWithSameTranscription.length >  1) {
        const preferredLetter = lettersWithSameTranscription.find(letter => letter.isPreferred);
        return preferredLetter || lettersWithSameTranscription[0];
      }

      return lettersWithSameTranscription[0];
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

AvestaWord.displayName = 'AvestaWord';