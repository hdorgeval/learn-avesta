import { useMemo } from "react";
import { Word } from "../words/Word2";

export interface SentenceOwnProps {
  sentence: string;
  zoom: number;
}

export const Sentence: React.FC<SentenceOwnProps> = ({sentence, zoom}) => {
  const words = useMemo(() => {
    const words = sentence.split(' ');

    return words;
  }, [sentence]);
  
  return (
    <div className="d-flex flex-row flex-wrap flex-row-reverse">
      {words.map((word) => 
        <Word key={word} word={word} zoom={zoom} />
      )}
    </div>
  );
};
