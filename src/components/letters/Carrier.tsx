import { LetterA, LetterB, LetterC, LetterD, LetterE, LetterF } from '.';

export const Carrier: React.FC = () => {
  return (
    <div className="bg-dark">
      <LetterC fill="#f5a425" />
      <LetterA fill="#f5a425" />
      <LetterB fill="#f5a425" />
      <LetterC fill="#f5a425" />
      <LetterB fill="#f5a425" />
      <LetterD fill="#f5a425" />
      <LetterE fill="#f5a425" />
      <LetterF fill="#f5a425" />
    </div>
  );
};

Carrier.displayName = 'Carrier';
