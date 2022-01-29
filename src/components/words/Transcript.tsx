export interface HtmlTranscriptOwnProps {
  transcript: string;
}
export const HtmlTranscript: React.FC<HtmlTranscriptOwnProps> = ({ transcript }) => {
  const transcription = transcript;

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

HtmlTranscript.displayName = 'Transcription';
