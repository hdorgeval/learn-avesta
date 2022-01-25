import { useCallback, useMemo, useState } from "react";
import { useAnalytics, useSlicesOfShuffledLetters } from "../../hooks";
import { Letter, Transcription } from "../../letters";

export const TransposeActivity: React.FC = () => {
  const [addEvent] = useAnalytics();
  const [displayNewComerHint, setDisplayNewComerHint] = useState(true);
  const [hasStartedActivity, setHasStartedActivity] = useState(false);
  const [selectedAvestaCharacter, setSelectedAvestaCharacter] = useState<Letter | undefined>(undefined);
  const [selectedAvestaTranscription, setSelectedAvestaTranscription] = useState<Letter | undefined>(undefined);
  const slices = useSlicesOfShuffledLetters(6);
  const [currentSliceIndex, setCurrentSliceIndex] = useState(0);
  const [currentSlice, setCurrentSlice] = useState<Letter[]>(slices[currentSliceIndex]);
  const [shuffledCurrentSlice, setShuffledCurrentSlice] = useState<Letter[]>([...slices[currentSliceIndex]].sort(() => Math.random() - 0.5));
  const [isCurrentSliceTransposed, setIsCurrentSliceTransposed] = useState(false);
  const [numberOfMatchedCharacters, setNumberOfMatchedCharacters] = useState(0);

  const handleActivityStartIfNeeded = useCallback(() => {
    if (hasStartedActivity) {
      return;
    }
    setHasStartedActivity(true);
    addEvent('start-transpose-activity');
  }, [addEvent, hasStartedActivity]);

  const handleActivityCompleted = useCallback(() => {
    addEvent('transpose-activity-completed');
  }, [addEvent]);
  
  const resetActivity = useCallback(() => {
    slices.map(slice => slice.map((letter) => {
      letter.hasBeenMatched = false;
    }));
    setCurrentSlice(slices[0]);
    setShuffledCurrentSlice([...slices[0]].sort(() => Math.random() - 0.5));
    setCurrentSliceIndex(0);
    setSelectedAvestaCharacter(undefined);
    setSelectedAvestaTranscription(undefined);
    setIsCurrentSliceTransposed(false);
    setNumberOfMatchedCharacters(0);
    setHasStartedActivity(false);
  }, [slices]);
  
  const continueActivity = useCallback(() => {
    setCurrentSlice(slices[currentSliceIndex+1]);
    setShuffledCurrentSlice([...slices[currentSliceIndex + 1]].sort(() => Math.random() - 0.5));
    setCurrentSliceIndex(currentSliceIndex + 1);
    setSelectedAvestaCharacter(undefined);
    setSelectedAvestaTranscription(undefined);
    setIsCurrentSliceTransposed(false);
  }, [currentSliceIndex, slices]);
  
  const handleContinueOnNextSlice = useCallback(() => {
    if (currentSliceIndex === slices.length - 1) {
      resetActivity();
      return;
    }
    continueActivity();
  }, [continueActivity, currentSliceIndex, resetActivity, slices.length]);
  
  const percentageDone = useMemo(() => {
    let total = 0;
    slices.map(slice => slice.map(() => {
      total++;
    }));
    const result = Math.round(numberOfMatchedCharacters / total * 100);
    if (result >= 100) {
      handleActivityCompleted();
    }
    return result > 100 ? 100 : result;
  }, [handleActivityCompleted, numberOfMatchedCharacters, slices]);

  const handleCurrentSliceIsFinished = useCallback(() => {
    const isFinished = currentSlice.every(letter => letter.hasBeenMatched);
    if (isFinished) {
      setIsCurrentSliceTransposed(true);
    }
  }, [currentSlice]);

  const handleClickOnAvestaLetter = useCallback((letter: Letter) => {
    handleActivityStartIfNeeded();
    setSelectedAvestaCharacter(letter);
    if (letter.transcription === selectedAvestaTranscription?.transcription) {
      letter.hasBeenMatched = true;
      setNumberOfMatchedCharacters(numberOfMatchedCharacters + 1);
      handleCurrentSliceIsFinished();
    }
  },[handleActivityStartIfNeeded, handleCurrentSliceIsFinished, numberOfMatchedCharacters, selectedAvestaTranscription?.transcription]);

  const handleClickOnAvestaTranscription = useCallback((letter: Letter) => {
    handleActivityStartIfNeeded();
    setSelectedAvestaTranscription(letter);
    if (selectedAvestaCharacter?.transcription === letter.transcription) {
      letter.hasBeenMatched = true;
      setNumberOfMatchedCharacters(numberOfMatchedCharacters + 1);
      handleCurrentSliceIsFinished();
    }
  },[handleActivityStartIfNeeded, handleCurrentSliceIsFinished, numberOfMatchedCharacters, selectedAvestaCharacter?.transcription]);
  
  const isAvestaCharacterSelected = useCallback((letter: Letter) => {
    return selectedAvestaCharacter?.transcription === letter.transcription;
  }, [selectedAvestaCharacter?.transcription]);

  const isAvestaTranscriptionSelected = useCallback((letter: Letter) => {
    return selectedAvestaTranscription?.transcription === letter.transcription;
  }, [selectedAvestaTranscription?.transcription]);
  
  const handleNewComerHint = useCallback(() => {
    setDisplayNewComerHint(false);
  }
  , []);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="card bg-dark text-light">
            <div className="card-body">
              <div className="container">
                <div className="row row-cols-3 gx-4 justify-content-evenly align-items-center">
                  {currentSlice.map((letter, i) => (
                    <div 
                      key={`${i}`}
                      className={`col m-2 d-flex justify-content-evenly align-items-center h-100 ${isAvestaCharacterSelected(letter) ? 'bg-primary' : ''}`}
                      onClick={() => handleClickOnAvestaLetter(letter)}
                    >
                      {letter.render({overridenStyle: {marginLeft: '0px'}, disableSound: true})}
                      {letter.hasBeenMatched && (
                        <>
                          <i className="bi bi-chevron-right fs-3"></i>
                          <span className="badge badge-success fs-3 ps-0">
                            <Transcription letter={letter} />
                          </span>
                        </>
                      )}
                    </div>
                  ))} 
    
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-dark text-light h-100">
            <div className="card-body h-100">
              {isCurrentSliceTransposed ? (
                <div className="container h-100 d-flex flex-column justify-content-center">
                  <p className="card-text text-center"><i className="bi bi-check2-circle"></i> Well done ! </p>
                  <p className="card-text text-center">You have done {percentageDone}% of this activity.</p>
                  <p className="card-text text-center">Would you like to continue ? </p>
                  <button  className="btn btn-primary mt-2 me-2" onClick={handleContinueOnNextSlice}>Continue</button>
                </div>
              ) : (
                <div className="container h-100">
                  <div className="row row-cols-3 gx-4 justify-content-evenly align-items-center h-100">
                    {shuffledCurrentSlice.map((letter, i) => (
                      <div 
                        key={`${i}`}
                        className={`col text-center fs-2 ${isAvestaTranscriptionSelected(letter) ? 'bg-primary' : ''}`}
                        onClick={() => handleClickOnAvestaTranscription(letter)}
                      >
                        {!letter.hasBeenMatched && <Transcription letter={letter} />}
                      
                      </div>
                    ))} 
    
                  </div>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
      { displayNewComerHint && (
        <div className="card bg-dark text-light">
          <div className="card-body d-flex align-items-center flex-column ">
            <p className="card-text flex-fill"><i className="bi bi-lightbulb"></i> Letters have been shuffled ! Try to recover the pairs ! Select an Avestan character, then select the corresponding transposition.</p>
            <button  className="btn btn-primary mt-2 me-2" onClick={handleNewComerHint}>Got it !</button>
          </div>
        </div>
              
      )
      }
    </div>
  );
};

TransposeActivity.displayName = 'Transposer';