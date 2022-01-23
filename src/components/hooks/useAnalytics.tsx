import { useCallback } from "react";
import { pageview } from "react-ga";

export type AnalyticsEventForDrawingActivity = 'pick-letter-a-for-drawing' | 'pick-letter-ā-for-drawing'  | 'pick-letter-b-for-drawing' | 'pick-letter-c-for-drawing' | 'pick-letter-d-for-drawing' | 'pick-letter-e-for-drawing' | 'pick-letter-ē-for-drawing' | 'pick-letter-f-for-drawing' | 'pick-letter-g-for-drawing' | 'pick-letter-h-for-drawing' | 'pick-letter-i-for-drawing' | 'pick-letter-ī-for-drawing' | 'pick-letter-j-for-drawing' | 'pick-letter-k-for-drawing' | 'pick-letter-l-for-drawing' | 'pick-letter-m-for-drawing' | 'pick-letter-n-for-drawing' | 'pick-letter-o-for-drawing' | 'pick-letter-ō-for-drawing' | 'pick-letter-p-for-drawing' | 'pick-letter-q-for-drawing' | 'pick-letter-r-for-drawing' | 'pick-letter-s-for-drawing' | 'pick-letter-t-for-drawing' | 'pick-letter-u-for-drawing' | 'pick-letter-v-for-drawing' | 'pick-letter-w-for-drawing' | 'pick-letter-x-for-drawing' | 'pick-letter-x<raised>v-for-drawing' | 'pick-letter-y-for-drawing' | 'pick-letter-z-for-drawing' | 'pick-letter---for-drawing' | 'pick-letter-.-for-drawing' | 'pick-letter-ə-for-drawing' | 'pick-letter-ś-for-drawing' | 'pick-letter-θ-for-drawing';
export type AnalyticsEvent = 'load-app' | 'explore-letter' | 'go-back-to-alphabet-explorer' |'drawing' | 'start-video-avestan-script-and-sounds' | 'start-transpose-activity' | 'transpose-activity-completed' | 'start-avesta-song-activity' | AnalyticsEventForDrawingActivity;
export const useAnalytics = () => {
  const addEvent = useCallback((event: AnalyticsEvent) => {
    try {
      const sanitizedEvent = event.replace(/[<>]/g, '-');
      pageview(sanitizedEvent);
    } catch (error) {
      // no op
    }
  },[]);
  return [addEvent];
};