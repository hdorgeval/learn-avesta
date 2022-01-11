import { useLetterA, useLetterAA, useLetterB, useLetterC, useLetterD, useLetterDj, useLetterE, useLetterEh, useLetterF, useLetterG, useLetterH, useLetterR, useLetterS, useLetterT, useLetterV, useLetterX, useLetterXv, useLetterZ } from "../letters";

export const useLetters = () => {
  const letters = [
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
  ];

  return letters;
};