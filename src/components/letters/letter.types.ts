import { CSSProperties } from 'react';

export interface LetterOwnProps {
  fill?: string | 'none';
  zoom?: number ;
  overridenStyle?: CSSProperties;
  disableSound?: boolean;
  disableTranslate?: boolean;
  key?: string;
}

export interface LetterPronunciation {
  'fr'?: string;
  'en'?: string;
  'es'?: string;
  'de'?: string;
}

export type TranscriptionSymbol = 'a' | 'ā' | 'b' | 'c' | 'd' | 'e' | 'ē' | 'ə' | 'f' | 'g' | 'h' | 'i' | 'ī' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'ō' | 'p' | 'q' | 'r' | 's' | 'ś' | 'š' | 'ṣ' | 'ṣ̌' | 't' | 'θ' | 'u' | 'v' | 'w' | 'x' | 'x<raised>v'| 'y' | 'z' | '-' | '.' | '...';

export interface Letter {
  hasBeenMatched?: boolean;
  /**
   * When true, the letter will be selected among the letters with the same transcription.
   *
   * @type {boolean}
   * @memberof Letter
   */
  isPreferred?: boolean;
  
  pronunciation: LetterPronunciation;
  transcription: TranscriptionSymbol;
  render: (props?: LetterOwnProps) => JSX.Element;
}