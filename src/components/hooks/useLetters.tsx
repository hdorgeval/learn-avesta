import { useState } from "react";
import { Letter, useLetterA, useLetterAA, useLetterB, useLetterC, useLetterD, useLetterDj, useLetterE, useLetterEh, useLetterF, useLetterG, useLetterH, useLetterR, useLetterS, useLetterT, useLetterV, useLetterX, useLetterXv, useLetterY, useLetterZ } from "../letters";

export const useLetters = () => {
  const [letters] = useState<Letter[]>([
    useLetterA(),
    useLetterB() ,
    useLetterC() ,
    useLetterD() ,
    useLetterE() ,
    useLetterF() ,
    useLetterG() ,
    useLetterH() ,
    useLetterT() ,
    useLetterAA() ,
    useLetterR() ,
    useLetterV() ,
    useLetterDj() ,
    useLetterZ() ,
    useLetterS() ,
    useLetterEh() ,
    useLetterX() ,
    useLetterXv() ,
    useLetterY() ,
  ]);

  return letters;
};