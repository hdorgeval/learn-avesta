import { CSSProperties } from 'react';

export interface LetterOwnProps {
  fill?: string | 'none';
  zoom?: number;
  overridenStyle?: CSSProperties;
  disableSound?: boolean;
  disableTranslate?: boolean;
  key?: string;
}

export interface LetterPronunciation {
  fr?: string;
  en?: string;
  es?: string;
  de?: string;
}

// a,ā,å,ā̊,ą,ą̇,b,β,c,d,δ,e,ē,ə,ǝ̄,f,g,ġ,γ,h,i,ī,j,k,m,m̨,n,ń,ṇ,ŋ,ŋ́,ŋᵛ,o,ō,p,r,s,š,š́,ṣ̌,t,t̰,ϑ,u,ū,v,x,x́,x,y,ẏ,z,ž
export type TranscriptionSymbol =
  | 'a'
  | 'ā'
  | 'å'
  | 'ā̊'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'ē'
  | 'ə'
  | 'ǝ̄'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'ī'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'ŋ́'
  | 'ŋ'
  | 'o'
  | 'ō'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 'ś'
  | 'š'
  | 'ṣ'
  | 'ṣ̌'
  | 't'
  | 'θ'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'x́'
  | 'x<raised>v'
  | 'y'
  | 'z'
  | '-'
  | '.'
  | '...'
  | '***';

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
