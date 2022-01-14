import { useCallback, useEffect, useMemo, useState } from "react";
import { useAnalytics, useLetters } from "../hooks";
import { Letter, LetterPronunciation } from "./LetterA";

export const Explorer: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<Letter | undefined>(undefined);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const [displayNewComerHint, setDisplayNewComerHint] = useState(true);

  const letters = useLetters();
  const maxIndex =  useMemo( () => letters.length - 1, [letters]);

  const [addEvent] = useAnalytics();

  useEffect(() => {
    if (selectedIndex === -1) {
      return;
    }
    const nextIndex = selectedIndex === maxIndex ? 0 : selectedIndex + 1;
    const selector = `.carousel-indicators button[aria-label="Character ${nextIndex + 1}"]`;
    const nextButton = document.querySelector(selector) as HTMLButtonElement;
    if (nextButton) {
      nextButton.click();
    }
  }
  , [maxIndex, selectedIndex, selectedLetter]);

  const shuffledLetters = useMemo(() => {
    return letters.sort(() => Math.random() - 0.5);
  }, [letters]);

  const handleClickOnLetter = useCallback((letter: Letter,index: number) => {
    setSelectedLetter(letter);
    setSelectedIndex(index);
    addEvent('explore-letter');
  },[addEvent]);

  const displayTranscription = useCallback((transcription: string) => {
    if (!transcription.includes('<raised>')) {
      return transcription;
    }

    const parts = transcription.split('<raised>');
    return (<>
      <span>{parts[0]}</span>
      <span className="ms-0 position-absolute"  style={{marginTop: '-5px', fontSize: 'smaller'}}>{parts[1]}</span>
    </>);

  } , []);
  const goBackToCarousel = useCallback(() => {
    setSelectedLetter(undefined);
    setDisplayNewComerHint(false);
    addEvent('go-back-to-alphabet-explorer');
    
  } , [addEvent]);

  const handleNewComerHint = useCallback(() => {
    setDisplayNewComerHint(false);
  }
  , []);

  const translateCountryCode = useCallback((countryCode: string) => {
    const key = countryCode as keyof LetterPronunciation;
    switch (key) {
      case 'fr':
        return 'French';
      case 'en':
        return 'English';
      case 'de':
        return 'German';
      case 'es':
        return 'Spanish';
      default:
        return key;
    }
  }, []);
  
  return (
    <> 
      {
        !selectedLetter && (
          <>
            <div
              id="avestaAlphabetExplorer"
              className="carousel slide mt-5 pb-5 overflow-hidden"
              data-bs-ride="carousel"
              
            >
              <div className="carousel-indicators">
                {shuffledLetters.map((_, i) => (
                  <button
                    key={`${i}`}
                    type="button"
                    data-bs-target="#avestaAlphabetExplorer"
                    data-bs-slide-to={`${i}`}
                    className={i === 0 ? "active" : ""}
                    aria-current={i === 0 ? "true" : "false"}
                    aria-label={`Character ${i + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner overflow-visible mt-0 pt-0" style={{maxHeight: '50px', minHeight: '50px'}}>
                {shuffledLetters.map((letter, i) => (
                  <div 
                    key={`${i}`}
                    className={`carousel-item ${i === 0 ? 'active' : ''}`}
                    onClick={() => handleClickOnLetter(letter,i)}
                  >
                    {letter.render()}
                  </div>
                ))} 
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#avestaAlphabetExplorer"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#avestaAlphabetExplorer"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            { displayNewComerHint && (
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <p className="card-text"><i className="bi bi-lightbulb"></i> You can click on the above character to get it's sound and to display more infos.</p>
                  <a href="#" className="btn btn-primary mt-2 me-2" onClick={handleNewComerHint}>Got it !</a>
                </div>
              </div>
              
            )
            }
          </>
        )
      }

      {selectedLetter && (
        <div className="card text-light bg-dark mt-2 mb-0" style={{zIndex: 2000}}  >
          <div className="row g-0">
            <div className="col-2 d-flex flex-column justify-content-center">
              {selectedLetter.render()}
            </div>
            <div className="col-10">
              <div className="card-body">
                <div className="card-title h5 text-start">Transcription : {displayTranscription(selectedLetter.transcription)}</div>
                {
                  Object.keys(selectedLetter.pronunciation).map((countryCode) => (
                    <div className="text-start" key={countryCode}>
                      <p className="mb-1">Pronunciation in {translateCountryCode(countryCode)} : {selectedLetter.pronunciation[countryCode as keyof LetterPronunciation]}</p>
                    </div>
                  ))
                }
                <p className="text-start mb-1 fst-italic">
                  <i className="bi bi-lightbulb"></i>Pro tip : you can click on the character on the left to get it's sound.
                </p>
                <a href="#" className="btn btn-primary mt-2 me-2" onClick={goBackToCarousel}>Got it ! Continue exploring the alphabet</a>
              </div>
            </div>
          </div>
        
        </div>
      )}
    </>
  );
};

Explorer.displayName = 'LettersCarousel';
