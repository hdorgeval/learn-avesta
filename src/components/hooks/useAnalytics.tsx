import { useCallback } from "react";
import { pageview } from "react-ga";

export type AnalyticsEvent = 'load-app' | 'explore-letter' | 'go-back-to-alphabet-explorer' |'drawing' | 'letter-picker-a' | 'letter-picker-b' | 'letter-picker-x' | 'start-video-avestan-script-and-sounds' | 'start-transpose-activity' | 'transpose-activity-completed';
export const useAnalytics = () => {
  const addEvent = useCallback((event: AnalyticsEvent) => {
    try {
      pageview(event);
    } catch (error) {
      // no op
    }
  },[]);
  return [addEvent];
};