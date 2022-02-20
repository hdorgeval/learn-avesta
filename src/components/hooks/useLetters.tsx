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
  useLetterM,
  useLetterM2,
  useLetterM3,
  useLetterN,
  useLetterN2,
  useLetterN3,
  useLetterNg,
  useLetterO,
  useLetterOLong,
  useLetterR,
  useLetterS,
  useLetterSSH,
  useLetterT,
  useLetterU,
  useLetterV,
  useLetterV2,
  useLetterV3,
  useLetterX,
  useLetterXv,
  useLetterY,
  useLetterY2,
  useLetterY3,
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
    useLetterM(),
    useLetterM2(),
    useLetterM3(),
    useLetterN(),
    useLetterN2(),
    useLetterN3(),
    useLetterNg(),
    useIndianLetterO(),
    useIndianLetterOLong(),
    useLetterO(),
    useLetterOLong(),
    useLetterT(),
    useLetterALong(),
    useLetterR(),
    useLetterU(),
    useLetterV(),
    useLetterV2(),
    useLetterV3(),
    useLetterDj(),
    useLetterZ(),
    useLetterS(),
    useLetterSSH(),
    useLetterEh(),
    useLetterX(),
    useLetterXv(),
    useLetterY(),
    useLetterY2(),
    useLetterY3(),
  ];
};

export const useLetters = () => {
  const [letters] = useState<Letter[]>(useAllLetters());
  return letters;
};
