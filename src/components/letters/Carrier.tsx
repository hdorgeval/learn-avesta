import {
  LetterA,
  LetterAA,
  LetterB,
  LetterC,
  LetterD,
  LetterE,
  LetterF,
  LetterG,
  LetterH,
  LetterT
} from '.';

export const Carrier: React.FC = () => {
  return (
    <div className="bg-dark">
      <LetterC fill="#f5a425" />
      <LetterAA fill="#f5a425" />
      <LetterA fill="#f5a425" />
      <LetterG fill="#f5a425" />
      <LetterA fill="#f5a425" />
      <LetterB fill="#f5a425" />
      <LetterC fill="#f5a425" />
      <LetterB fill="#f5a425" />
      <LetterD fill="#f5a425" />
      <LetterE fill="#f5a425" />
      <LetterF fill="#f5a425" />
      <LetterA fill="#f5a425" />
      <LetterH fill="#f5a425" />
      <LetterT fill="#f5a425" />
    </div>
  );
};

Carrier.displayName = 'Carrier';
