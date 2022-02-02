import { Letter } from './letter.types';

export interface TranscriptionOwnProps {
  letter: Letter;
}
export const Transcription: React.FC<TranscriptionOwnProps> = ({ letter }) => {
  const transcription = letter.transcription;
  if (transcription === 'ṣ̌') {
    const parts = transcription.split('');
    return (
      <>
        <span>{parts[0]}</span>
        <span
          className="position-absolute"
          style={{ marginTop: '0px', marginLeft: '-0.5em', fontSize: 'smaller' }}
        >
          &#711;
        </span>
      </>
    );
  }

  if (!transcription.includes('<raised>')) {
    return <span>{transcription}</span>;
  }

  const parts = transcription.split('<raised>');
  return (
    <>
      <span>{parts[0]}</span>
      <span className="ms-0 position-absolute" style={{ marginTop: '-5px', fontSize: 'smaller' }}>
        {parts[1]}
      </span>
    </>
  );
};

Transcription.displayName = 'Transcription';
