import { useMemo } from "react";
import { useAllLetters } from "../hooks";
import { useMissingLetter, useWordSeparator } from "../letters";

export interface WordOwnProps {
  word: string;
  zoom: number;
}
export const Word: React.FC<WordOwnProps> = ({word, zoom}) => {
  const transcriptions = word.split('');
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
  return (
    <div className="ms-2">
      {letters.map((letter) => letter.render({zoom}))}
    </div>
  );
};