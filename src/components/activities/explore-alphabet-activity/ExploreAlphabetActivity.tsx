import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAnalytics, useLetters } from '../../hooks';
import { Letter, LetterPronunciation } from '../../letters';
import { AlternateTranscriptions, Transcription } from '../../letters/Transcription';
import { AvestaWord } from '../../words';

export const ExploreAlphabetActivity: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<Letter | undefined>(undefined);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [displayCarrousel, setDisplayCarrousel] = useState<boolean>(true);
  const [displayNewComerHint, setDisplayNewComerHint] = useState(true);
  const [displayLetterPickerHint, setDisplayLetterPickerHint] = useState(false);
  const [displayLetterPickerButton, setDisplayLetterPickerButton] = useState(false);
  const [displayLetterPickerModal, setdisplayLetterPickerModal] = useState(false);
  const [userHasAckedLetterPickerHint, setuserHasAckedLetterPickerHint] = useState(false);
  const [hasStartedActivity, setHasStartedActivity] = useState(false);

  const letters = useLetters();
  const maxIndex = useMemo(() => letters.length - 1, [letters]);

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
  }, [maxIndex, selectedIndex, selectedLetter]);

  const shuffledLetters = useMemo(() => {
    return [...letters].sort(() => Math.random() - 0.5);
  }, [letters]);
  const hasAlternateTranscriptions = useMemo(() => {
    return (
      selectedLetter &&
      Array.isArray(selectedLetter.alternateTranscriptions) &&
      selectedLetter.alternateTranscriptions.length >= 1
    );
  }, [selectedLetter]);

  const hasOtherShapes = useMemo(() => {
    return (
      selectedLetter &&
      letters.filter((letter) => letter.transcription === selectedLetter.transcription).length > 1
    );
  }, [letters, selectedLetter]);
  const hasMulitpleOtherShapes = useMemo(() => {
    return (
      selectedLetter &&
      letters.filter((letter) => letter.transcription === selectedLetter.transcription).length > 2
    );
  }, [letters, selectedLetter]);

  const hasAdditionalDetails = useMemo(() => {
    return (
      selectedLetter &&
      selectedLetter.additionalDetails &&
      selectedLetter.additionalDetails.length > 0
    );
  }, [selectedLetter]);

  const shouldBeUsedInsideWord = useMemo(() => {
    return selectedLetter && selectedLetter.useWhenInsideWord;
  }, [selectedLetter]);

  const shouldBeUsedAtTheBeginningOfWord = useMemo(() => {
    return selectedLetter && selectedLetter.useWhenFirstLetterInWord;
  }, [selectedLetter]);

  const otherShapes = useMemo(() => {
    if (!selectedLetter) {
      return [];
    }
    return letters
      .filter((letter) => letter.transcription === selectedLetter.transcription)
      .filter((letter) => letter.id !== selectedLetter.id);
  }, [letters, selectedLetter]);

  const hasMultipleAlternateTranscriptions = useMemo(() => {
    return (
      selectedLetter &&
      Array.isArray(selectedLetter.alternateTranscriptions) &&
      selectedLetter.alternateTranscriptions.length > 1
    );
  }, [selectedLetter]);

  const handleClickOnLetter = useCallback(
    (letter: Letter, index: number) => {
      setSelectedLetter(letter);
      setSelectedIndex(index);
      setDisplayCarrousel(false);
      setdisplayLetterPickerModal(false);
      addEvent(`explore-letter-${letter.transcription}-`);
      if (!hasStartedActivity) {
        addEvent(`start-explore-alphabet-activity`);
        setHasStartedActivity(true);
      }
    },
    [addEvent, hasStartedActivity],
  );

  const goBackToCarousel = useCallback(() => {
    setSelectedLetter(undefined);
    setDisplayCarrousel(true);
    setDisplayNewComerHint(false);
    userHasAckedLetterPickerHint
      ? setDisplayLetterPickerHint(false)
      : setDisplayLetterPickerHint(true);
    setDisplayLetterPickerButton(true);
    setdisplayLetterPickerModal(false);
  }, [userHasAckedLetterPickerHint]);

  const handleClickOnPickerLetterButton = useCallback(() => {
    setSelectedLetter(undefined);
    setDisplayCarrousel(false);
    setDisplayLetterPickerButton(false);
    setdisplayLetterPickerModal(true);
    addEvent('display-picker-letter-modal-in-alphabet-explorer');
  }, [addEvent]);
  const handleNewComerHint = useCallback(() => {
    setDisplayNewComerHint(false);
  }, []);

  const handlePickerLetterHint = useCallback(() => {
    setDisplayLetterPickerHint(false);
    setuserHasAckedLetterPickerHint(true);
  }, []);

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
      {displayCarrousel && (
        <>
          <div
            id="avestaAlphabetExplorer"
            className="carousel slide mt-2 pt-4 pb-5 overflow-hidden"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {shuffledLetters.map((_, i) => (
                <button
                  key={`${i}`}
                  type="button"
                  data-bs-target="#avestaAlphabetExplorer"
                  data-bs-slide-to={`${i}`}
                  className={i === 0 ? 'active' : ''}
                  aria-current={i === 0 ? 'true' : 'false'}
                  aria-label={`Character ${i + 1}`}
                ></button>
              ))}
            </div>
            <div
              className="carousel-inner overflow-visible mt-0 pt-0"
              style={{ maxHeight: '50px', minHeight: '50px' }}
            >
              {shuffledLetters.map((letter, i) => (
                <div
                  key={`${i}`}
                  className={`cursor-pointer carousel-item ${i === 0 ? 'active' : ''}`}
                  onClick={() => handleClickOnLetter(letter, i)}
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
          {displayNewComerHint && (
            <div className="card bg-dark text-light">
              <div className="card-body">
                <p className="card-text">
                  <i className="bi bi-lightbulb"></i> Welcome ! Start your avestic journey by
                  exploring the alphabet ! You can click on the above character to get it's sound
                  and to display more infos.
                </p>
                <button className="btn btn-primary mt-2 me-2" onClick={handleNewComerHint}>
                  Got it !
                </button>
              </div>
            </div>
          )}
          {displayLetterPickerButton && (
            <button
              className="btn btn-primary mt-2 me-2 w-100"
              onClick={handleClickOnPickerLetterButton}
            >
              Pick another character
            </button>
          )}
          {displayLetterPickerHint && (
            <div className="card bg-dark text-light">
              <div className="card-body">
                <p className="card-text">
                  <i className="bi bi-lightbulb"></i> Now you can either pick the above letter or,
                  if this letter has no more secrets for you, you can fetch the next one by using
                  the arrows <span className="fw-bold fs-4">&#62;</span> and{' '}
                  <span className="fw-bold fs-4">&#60;</span>, or you can pick a letter of your
                  choice.
                </p>
                <button className="btn btn-primary mt-2 me-2" onClick={handlePickerLetterHint}>
                  Got it !
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {selectedLetter && (
        <div className="card text-light bg-dark mt-2 mb-0" style={{ zIndex: 2000 }}>
          <div className="row g-0">
            <div className="col-2 d-flex flex-column justify-content-center">
              <span className="cursor-pointer">{selectedLetter.render()}</span>
            </div>
            <div className="col-10">
              <div className="card-body">
                <div className="card-title h5 text-start border-bottom border-bottom-1 border-secondary pb-2">
                  Transcription : <Transcription letter={selectedLetter} />
                </div>
                {hasAlternateTranscriptions && (
                  <div className="card-title h6 text-start border-bottom border-bottom-1 border-secondary pb-2">
                    Alternate transcription{hasMultipleAlternateTranscriptions && <>s</>} :{' '}
                    <AlternateTranscriptions letter={selectedLetter} />
                  </div>
                )}
                {hasOtherShapes && (
                  <div className="card-title h6 text-start border-bottom border-bottom-1 border-secondary pb-2 d-flex justify-content-start align-items-center h-100">
                    Other shape{hasMulitpleOtherShapes && <>s</>} :{' '}
                    {otherShapes.map((letter: Letter, index) => (
                      <span
                        key={`${index}`}
                        className="m-2  cursor-pointer"
                        onClick={() => handleClickOnLetter(letter, index)}
                      >
                        {letter.render({ zoom: 1 })}
                      </span>
                    ))}
                  </div>
                )}
                {Object.keys(selectedLetter.pronunciation).map((countryCode) => (
                  <div
                    className="text-start border-bottom border-bottom-1 border-secondary pb-2 mt-2"
                    key={countryCode}
                  >
                    <p className="mb-1">
                      Pronunciation in {translateCountryCode(countryCode)} :{' '}
                      {selectedLetter.pronunciation[countryCode as keyof LetterPronunciation]}
                    </p>
                  </div>
                ))}
                {shouldBeUsedInsideWord && (
                  <div className="text-start border-bottom border-bottom-1 border-secondary pb-2 mt-2">
                    <p className="mb-1">Should be used inside a word.</p>
                  </div>
                )}
                {shouldBeUsedAtTheBeginningOfWord && (
                  <div className="text-start border-bottom border-bottom-1 border-secondary pb-2 mt-2">
                    <p className="mb-1">Should be used at the beginning of a word.</p>
                  </div>
                )}
                {hasAdditionalDetails && (
                  <div className="text-start border-bottom border-bottom-1 border-secondary pb-2 mt-2">
                    <p className="mb-1">{selectedLetter.additionalDetails}</p>
                  </div>
                )}
                {selectedLetter.sampleWord && (
                  <>
                    <div className="d-flex flex-row flex-wrap justify-content-start text-start border-bottom border-bottom-1 border-secondary pb-2 mt-2">
                      <p className="mb-1">Sample word : </p>
                      <AvestaWord
                        key={selectedLetter.id}
                        transcript={selectedLetter.sampleWord?.transcript}
                        zoom={0.5}
                        audioUrl={selectedLetter.sampleWord?.audioUrl}
                        preferredLetterIds={[selectedLetter.id]}
                      />
                    </div>
                    <p className="text-start mb-1 fst-italic">
                      <i className="bi bi-lightbulb"></i>Tip : you can click on the word above to
                      get it's sound.
                    </p>
                  </>
                )}
                <p className="text-start mb-1 fst-italic">
                  <i className="bi bi-lightbulb"></i>Tip : you can click on the character on the
                  left to get it's sound;
                </p>
                <button className="btn btn-primary mt-2 me-2" onClick={goBackToCarousel}>
                  Got it ! Continue exploring the alphabet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {displayLetterPickerModal && (
        <div
          className="card text-light bg-dark mt-2 mb-0 modal-dialog modal-dialog-centered"
          style={{ zIndex: 2000 }}
        >
          <div className="modal-content" style={{ minHeight: '150px', height: '180px' }}>
            <div className="modal-header bg-dark text-light">
              <h5 className="modal-title">Pick a character</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={goBackToCarousel}
              ></button>
            </div>
            <div className="modal-body bg-dark text-light">
              <div className="container-fluid">
                <div
                  className="row row-cols-5 gx-4 justify-content-evenly align-items-center overflow-auto"
                  style={{ maxHeight: '200px' }}
                >
                  {shuffledLetters.map((letter: Letter, index) => (
                    <div
                      key={`${index}`}
                      className="col m-2 d-flex justify-content-evenly align-items-center h-100 cursor-pointer"
                      onClick={() => handleClickOnLetter(letter, index)}
                    >
                      {letter.render({ zoom: 1 })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer bg-dark text-light">
              <button type="button" className="btn btn-secondary" onClick={goBackToCarousel}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ExploreAlphabetActivity.displayName = 'ExploreAlphabetActivity';
