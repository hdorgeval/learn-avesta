import { useCallback, useMemo, useState } from "react";
import { useLetters } from "../hooks";
import { Letter, LetterPronunciation } from "./LetterA";

export const Explorer: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<Letter | undefined>(undefined);
  const letters = useLetters();
  const shuffledLetters = useMemo(() => {
    return letters.sort(() => Math.random() - 0.5);
  }, [letters]);

  const handleClickOnLetter = useCallback((letter: Letter) => {
    setSelectedLetter(letter);
  },[]);

  const goBackToCarousel = useCallback(() => {
    setSelectedLetter(undefined);
  } , []);
  
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
    <> {
      !selectedLetter && (
        <div
          id="carouselExampleIndicators"
          className="carousel slide mt-5 pb-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {shuffledLetters.map((_, i) => (
              <button
                key={`${i}`}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={`${i}`}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : "false"}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner overflow-visible mt-0 pt-0" style={{maxHeight: '50px', minHeight: '50px'}}>
            {shuffledLetters.map((letter, i) => (
              <div 
                key={`${i}`}
                className={`carousel-item ${i === 0 ? 'active' : ''}`}
                onClick={() => handleClickOnLetter(letter)}
              >
                {letter.render()}
              </div>
            ))} 
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
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
              <div className="card-title h5 text-start">Transcription : {selectedLetter.transcription}</div>
              {
                Object.keys(selectedLetter.pronunciation).map((countryCode) => (
                  <div className="text-start" key={countryCode}>
                    <p className="mb-1">Pronunciation in {translateCountryCode(countryCode)} : {selectedLetter.pronunciation[countryCode as keyof LetterPronunciation]}</p>
                  </div>
                ))
              }
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
