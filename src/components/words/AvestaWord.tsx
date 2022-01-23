import { useCallback, useMemo } from "react";
import { useAllLetters } from "../hooks";
import { useMissingLetter, useWordSeparator } from "../letters";

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
}

export const AvestaWord: React.FC<AvestaWordOwnProps> = ({transcript, zoom, timeline, currentTimeline, onWordSeek}) => {
  const transcriptions = transcript.split('');
  // eslint-disable-next-line no-console
  console.log('transcriptions', transcriptions);
  const allLeters = useAllLetters();
  const missingLetter = useMissingLetter();
  const separator = useWordSeparator();
  const letters = useMemo(() => {
    const characters =  transcriptions.map((transcription) => {
      const letter = allLeters.find(letter => letter.transcription === transcription);
      return letter || missingLetter;
    });
    characters.push(separator);
    return characters.reverse();
  }, [allLeters, missingLetter, separator, transcriptions]);

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
      className={`ms-2 avesta-word ${isOntrack ? 'outline-2-info' : ''}`}
      onClick={handleClick}
    >
      {letters.map((letter, index) => letter.render({zoom, key: `${letter.transcription}-${index}`, disableSound: true}))}
    </div>
  );
};