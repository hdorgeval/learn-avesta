import { useState } from "react";
import { Letter, useIndianLetterO, useLetterA, useLetterALong, useLetterB, useLetterC, useLetterD, useLetterDj, useLetterE, useLetterEh, useLetterF, useLetterG, useLetterH, useLetterI, useLetterILong, useLetterO2, useLetterO2Long, useLetterOLongIndian, useLetterR, useLetterS, useLetterT, useLetterU, useLetterV, useLetterX, useLetterXv, useLetterY, useLetterZ } from "../letters";

export const useAllLetters = () => { 
  return [
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
    useIndianLetterO() ,
    useLetterOLongIndian() ,
    useLetterO2() ,
    useLetterO2Long() ,
    useLetterT() ,
    useLetterALong() ,
    useLetterR() ,
    useLetterU() ,
    useLetterV() ,
    useLetterDj() ,
    useLetterZ() ,
    useLetterS() ,
    useLetterEh() ,
    useLetterX() ,
    useLetterXv() ,
    useLetterY() ,
  ];
};

export const useLetters = () => {
  const [letters] = useState<Letter[]>(useAllLetters());
  return letters;
};