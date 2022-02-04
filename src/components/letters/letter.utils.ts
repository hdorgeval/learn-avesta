import { Letter } from './letter.types';

export function hasTranscription(letter: Letter, transcription: string): boolean {
  if (letter.transcription === transcription) {
    return true;
  }

  if (Array.isArray(letter.alternateTranscriptions)) {
    return letter.alternateTranscriptions.some(
      (altTranscription) => altTranscription === transcription,
    );
  }

  return false;
}
