import { TranscriptionSymbol } from '../../../components/letters';

const symbols = ['x<raised>v', 'ā̊', 'ǝ̄', 'ā', 'ē', 'ī', 'ō', 'ś', 'ū', 'ŋ', 'ṣ̌', 'ṣ', 'ŋ́', 'x́'];

export function splitTranscript(transcript: string): (TranscriptionSymbol | string)[] {
  const result: (TranscriptionSymbol | string)[] = [];
  let remaining = transcript;

  while (remaining.length > 0) {
    const symbol = symbols.find((s) => remaining.startsWith(s));
    if (symbol) {
      result.push(symbol);
      remaining = remaining.replace(symbol, '');
      continue;
    }
    const firstCharacter = remaining[0];
    result.push(firstCharacter);
    remaining = remaining.replace(firstCharacter, '');
  }

  return result;
}
