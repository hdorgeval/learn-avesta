import { useEffect, useState } from 'react';

export function useDebouncedState<T>(
  initialValue: T,
  delayInMilliseconds: number,
): [T, (val: T) => void] {
  const [memoizedValue, setMemoizedValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);
  let timerId: number | undefined;
  useEffect(() => {
    if (!timerId) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timerId = window.setTimeout(() => {
        timerId = undefined;
        if (memoizedValue !== debouncedValue) {
          setDebouncedValue(memoizedValue);
        }
      }, delayInMilliseconds);
    }
    return () => {
      if (timerId) {
        window.clearTimeout(timerId);
        timerId = undefined;
      }
    };
  }, [memoizedValue]);

  return [debouncedValue, setMemoizedValue];
}
