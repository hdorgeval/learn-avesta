import { useState } from "react";
import { Letter, useLetterA, useLetterALong, useLetterB, useLetterC, useLetterD, useLetterDj, useLetterE, useLetterEh, useLetterF, useLetterG, useLetterH, useLetterI, useLetterILong, useLetterO, useLetterO2, useLetterO2Long, useLetterOLong, useLetterR, useLetterS, useLetterT, useLetterV, useLetterX, useLetterXv, useLetterY, useLetterZ } from "../letters";

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
    useLetterI() ,
    useLetterILong() ,
    useLetterO() ,
    useLetterOLong() ,
    useLetterO2() ,
    useLetterO2Long() ,
    useLetterT() ,
    useLetterALong() ,
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