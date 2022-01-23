import { useCallback, useMemo } from "react";
import { AvestaWord, TimelineRange } from "../words/AvestaWord";

export interface SentenceOwnProps {
  transcript: string;
  timeline?: string;
  currentTimeline?: number;
  zoom?: number;
  onWordSeek?: (timeline: TimelineRange) => void;
}

export const Sentence: React.FC<SentenceOwnProps> = ({transcript, zoom, timeline, currentTimeline, onWordSeek}) => {

  const appliedZoom = useMemo(() => {
    return zoom || 1;
  } , [zoom]);

  const words = useMemo(() => {
    const words = transcript.split(' ');
    return words;
  }, [transcript]);
  
  const timelines = useMemo(() => {
    const timelines = timeline ? timeline.split(' ') : [];
    const result = timelines.map((timeline) => {
      const [start, end] = timeline.split('-').map(s => Number(s));
      return {start, end};
    });
    return result;
  } , [timeline]);

  const getTimelineForWordAtIndex = useCallback((index: number) => {
    if (timelines[index]) {
      return timelines[index];
    }
    return undefined;
  }
  , [timelines]);

  return (
    <div className="d-flex flex-row flex-wrap flex-row-reverse">
      {words.map((word, index) => 
        <AvestaWord key={`${word}-${index}`} transcript={word} zoom={appliedZoom} timeline={getTimelineForWordAtIndex(index)} currentTimeline={currentTimeline} onWordSeek={onWordSeek} />
      )}
    </div>
  );
};
