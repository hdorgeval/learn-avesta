import { useState } from 'react';
import {
  Letter,
  useIndianLetterO,
  useIndianLetterOLong,
  useLetterA,
  useLetterALong,
  useLetterB,
  useLetterC,
  useLetterD,
  useLetterDj,
  useLetterE,
  useLetterEh,
  useLetterF,
  useLetterG,
  useLetterH,
  useLetterI,
  useLetterILong,
  useLetterO,
  useLetterOLong,
  useLetterR,
  useLetterS,
  useLetterSSH,
  useLetterT,
  useLetterU,
  useLetterV,
  useLetterX,
  useLetterXv,
  useLetterY,
  useLetterZ,
} from '../letters';

export const useAllLetters = () => {
  return [
    useLetterA(),
    useLetterB(),
    useLetterC(),
    useLetterD(),
    useLetterE(),
    useLetterF(),
    useLetterG(),
    useLetterH(),
    useLetterI(),
    useLetterILong(),
    useIndianLetterO(),
    useIndianLetterOLong(),
    useLetterO(),
    useLetterOLong(),
    useLetterT(),
    useLetterALong(),
    useLetterR(),
    useLetterU(),
    useLetterV(),
    useLetterDj(),
    useLetterZ(),
    useLetterS(),
    useLetterSSH(),
    useLetterEh(),
    useLetterX(),
    useLetterXv(),
    useLetterY(),
  ];
};

export const useLetters = () => {
  const [letters] = useState<Letter[]>(useAllLetters());
  return letters;
};
