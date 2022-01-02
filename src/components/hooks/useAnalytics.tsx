import { useCallback } from "react";
import { pageview } from "react-ga";

export type AnalyticsEvent = 'load-app' |'drawing' | 'letter-picker-a' | 'letter-picker-b' | 'letter-picker-x';
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