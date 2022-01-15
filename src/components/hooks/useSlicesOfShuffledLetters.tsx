import { useMemo, useState } from "react";
import { Letter } from "../letters";
import { useLetters } from "./useLetters";

export const useSlicesOfShuffledLetters = (size: number) => {
  const letters = useLetters();
  const [sliceSize] = useState(size);
  const shuffledLetters = useMemo(() => {
    return letters.sort(() => Math.random() - 0.5);
  }, [letters]);

  const slices = useMemo(() => {
    const slices: Letter[][] = [];
    for (let i = 0; i < shuffledLetters.length; i += sliceSize) {
      slices.push(shuffledLetters.slice(i, i + sliceSize));
    }
    return slices;
  }, [shuffledLetters, sliceSize]);

  const [shuffledSlices] = useState(slices);
  return shuffledSlices;
};