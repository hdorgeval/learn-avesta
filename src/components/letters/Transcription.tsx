import { ReactElement } from 'react';
import { Letter, TranscriptionSymbol } from './letter.models';

export interface TranscriptionOwnProps {
  letter: Letter;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transcriptionRecords: Partial<Record<TranscriptionSymbol, ReactElement<any, any>>> = {
  ṣ: (
    <>
      <span>&#7779;</span>
    </>
  ),
  ṣ̌: (
    <>
      <span>&#7779;</span>
      <span
        className="position-absolute"
        style={{ marginTop: '0px', marginLeft: '-0.5em', fontSize: 'smaller' }}
      >
        &#711;
      </span>
    </>
  ),
  ǝ̄: (
    <>
      <span>&#601;</span>
      <span
        className="position-absolute"
        style={{ marginTop: '-0.3em', marginLeft: '-0.6rem', fontSize: 'smaller' }}
      >
        -
      </span>
    </>
  ),
  'x<raised>v': (
    <>
      <span>x</span>
      <span className="ms-0 position-absolute" style={{ marginTop: '-3px', fontSize: '0.65em' }}>
        v
      </span>
    </>
  ),
};

export interface EncodedHtmlTranscriptionOwnProps {
  symbol: TranscriptionSymbol;
  noSpan?: boolean;
}

export const EncodedHtmlTranscription: React.FC<EncodedHtmlTranscriptionOwnProps> = ({
  symbol,
  noSpan,
}) => {
  if (transcriptionRecords[symbol]) {
    return transcriptionRecords[symbol] || null;
  }
  if (noSpan) {
    return <>{symbol}</>;
  }

  return <span>{symbol}</span>;
};

export const Transcription: React.FC<TranscriptionOwnProps> = ({ letter }) => {
  return <EncodedHtmlTranscription symbol={letter.transcription} />;
};
Transcription.displayName = 'Transcription';

export const AlternateTranscriptions: React.FC<TranscriptionOwnProps> = ({ letter }) => {
  if (!Array.isArray(letter.alternateTranscriptions)) {
    return null;
  }

  if (!letter.alternateTranscriptions) {
    return null;
  }

  return (
    <>
      {letter.alternateTranscriptions.map((alternateTranscription, index) => (
        <span key={alternateTranscription} className="">
          <EncodedHtmlTranscription symbol={alternateTranscription} />
          {letter.alternateTranscriptions && index < letter.alternateTranscriptions.length - 1 && (
            <span className="px-2">&#8226;</span>
          )}
        </span>
      ))}
    </>
  );
};
AlternateTranscriptions.displayName = 'AlternateTranscriptions';
