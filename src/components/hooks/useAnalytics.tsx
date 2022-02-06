import { useCallback } from 'react';
import { pageview } from 'react-ga';

export type AnalyticsEventForDrawingActivity =
  | 'pick-letter---for-drawing'
  | 'pick-letter-.-for-drawing'
  | 'pick-letter-...-for-drawing'
  | 'pick-letter-***-for-drawing'
  | 'pick-letter-a-for-drawing'
  | 'pick-letter-å-for-drawing'
  | 'pick-letter-ā-for-drawing'
  | 'pick-letter-ā̊-for-drawing'
  | 'pick-letter-b-for-drawing'
  | 'pick-letter-c-for-drawing'
  | 'pick-letter-d-for-drawing'
  | 'pick-letter-e-for-drawing'
  | 'pick-letter-ē-for-drawing'
  | 'pick-letter-ǝ̄-for-drawing'
  | 'pick-letter-ə-for-drawing'
  | 'pick-letter-f-for-drawing'
  | 'pick-letter-g-for-drawing'
  | 'pick-letter-h-for-drawing'
  | 'pick-letter-i-for-drawing'
  | 'pick-letter-ī-for-drawing'
  | 'pick-letter-j-for-drawing'
  | 'pick-letter-k-for-drawing'
  | 'pick-letter-l-for-drawing'
  | 'pick-letter-m-for-drawing'
  | 'pick-letter-n-for-drawing'
  | 'pick-letter-ṇ-for-drawing'
  | 'pick-letter-ŋ-for-drawing'
  | 'pick-letter-ŋ́-for-drawing'
  | 'pick-letter-o-for-drawing'
  | 'pick-letter-ō-for-drawing'
  | 'pick-letter-p-for-drawing'
  | 'pick-letter-q-for-drawing'
  | 'pick-letter-r-for-drawing'
  | 'pick-letter-s-for-drawing'
  | 'pick-letter-ś-for-drawing'
  | 'pick-letter-š-for-drawing'
  | 'pick-letter-ṣ-for-drawing'
  | 'pick-letter-ṣ̌-for-drawing'
  | 'pick-letter-t-for-drawing'
  | 'pick-letter-u-for-drawing'
  | 'pick-letter-v-for-drawing'
  | 'pick-letter-w-for-drawing'
  | 'pick-letter-x-for-drawing'
  | 'pick-letter-x́-for-drawing'
  | 'pick-letter-x<raised>v-for-drawing'
  | 'pick-letter-y-for-drawing'
  | 'pick-letter-z-for-drawing'
  | 'pick-letter-θ-for-drawing'
  | 'drawing';

export type AnalyticsEventForAlphabetExplorerActivity =
  | 'explore-letter'
  | 'go-back-to-alphabet-explorer'
  | 'display-picker-letter-modal-in-alphabet-explorer'
  | 'explore-letter---'
  | 'explore-letter-.-'
  | 'explore-letter-...-'
  | 'explore-letter-***-'
  | 'explore-letter-a-'
  | 'explore-letter-å-'
  | 'explore-letter-ā-'
  | 'explore-letter-ā̊-'
  | 'explore-letter-b-'
  | 'explore-letter-c-'
  | 'explore-letter-d-'
  | 'explore-letter-e-'
  | 'explore-letter-ē-'
  | 'explore-letter-ǝ̄-'
  | 'explore-letter-ə-'
  | 'explore-letter-f-'
  | 'explore-letter-g-'
  | 'explore-letter-h-'
  | 'explore-letter-i-'
  | 'explore-letter-ī-'
  | 'explore-letter-j-'
  | 'explore-letter-k-'
  | 'explore-letter-l-'
  | 'explore-letter-m-'
  | 'explore-letter-n-'
  | 'explore-letter-ṇ-'
  | 'explore-letter-ŋ-'
  | 'explore-letter-ŋ́-'
  | 'explore-letter-o-'
  | 'explore-letter-ō-'
  | 'explore-letter-p-'
  | 'explore-letter-q-'
  | 'explore-letter-r-'
  | 'explore-letter-s-'
  | 'explore-letter-ś-'
  | 'explore-letter-š-'
  | 'explore-letter-ṣ-'
  | 'explore-letter-ṣ̌-'
  | 'explore-letter-t-'
  | 'explore-letter-u-'
  | 'explore-letter-v-'
  | 'explore-letter-w-'
  | 'explore-letter-x-'
  | 'explore-letter-x́-'
  | 'explore-letter-x<raised>v-'
  | 'explore-letter-y-'
  | 'explore-letter-z-'
  | 'explore-letter-θ-';

export type AnalyticsEvent =
  | 'load-app'
  | 'start-video-avestan-script-and-sounds'
  | 'start-transpose-activity'
  | 'transpose-activity-completed'
  | 'start-avesta-song-activity'
  | AnalyticsEventForAlphabetExplorerActivity
  | AnalyticsEventForDrawingActivity;
export const useAnalytics = () => {
  const addEvent = useCallback((event: AnalyticsEvent) => {
    try {
      const sanitizedEvent = event.replace(/[<>]/g, '-');
      pageview(sanitizedEvent);
    } catch (error) {
      // no op
    }
  }, []);
  return [addEvent];
};
