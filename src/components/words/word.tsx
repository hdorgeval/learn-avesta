import { useMemo } from "react";
import { useAllLetters } from "../hooks";
import { useMissingLetter } from "../letters";

export interface WordOwnProps {
  word: string;

}
export const Word: React.FC<WordOwnProps> = ({word}) => {
  const transcriptions = word.split('');
  const allLeters = useAllLetters();
  const missingLetter = useMissingLetter();

  const letters = useMemo(() => {
    return transcriptions.map((transcription) => {
      const letter = allLeters.find(letter => letter.transcription === transcription);
      return letter || missingLetter;
    }).reverse();
  }, [allLeters, missingLetter, transcriptions]);
  return (
    <div className="bg-dark">
      {letters.map((letter) => letter.render({zoom:0.5}))}
    </div>
  );
};