import { CSSProperties, FC, useCallback, useMemo, useState } from 'react';
import { useAnalytics, useLetters } from '../../hooks';
import { Letter } from '../../letters';
import { DrawingSurface } from './DrawingSurface';

export interface LetterInDrawingSurfaceProps {
  letter: Letter;
  zoom?: number;
  overridenStyle?: CSSProperties;
}

export const LetterInDrawingSurface: FC<LetterInDrawingSurfaceProps> = ({ letter, zoom }) => {
  // switch (letter.transcription) {
  //   case 'A':
  //     return <LetterA zoom={zoom} overridenStyle={{marginLeft: '-0px'}}/>;
  //   case 'B':
  //     return <><LetterA zoom={zoom} overridenStyle={{marginRight: '-140px'}}/><LetterB zoom={zoom} overridenStyle={{marginLeft: '-0px'}}/></>;
  //   case 'X':
  //     return <><LetterAA zoom={zoom} overridenStyle={{marginRight: '0px'}}/><LetterX zoom={zoom} overridenStyle={{marginLeft: '-0px'}}/></>;
  //   case 'Y':
  //     return <><LetterA zoom={zoom} overridenStyle={{marginLeft: '-0px'}}/><LetterY zoom={zoom} overridenStyle={{marginLeft: '-0px'}}/></>;
  //   default:
  //     throw new Error(`Letter ${letter} is not yet supported`);
  // }

  return letter.render({ zoom, disableTranslate: true });
};

export const DrawingActivity: React.FC = () => {
  const [addEvent] = useAnalytics();
  const letters = useLetters();
  const [selectedLetter, setSelectedLetter] = useState<Letter>(letters[0]);
  const [hasStartedActivity, setHasStartedActivity] = useState(false);

  const currentCharacter = useMemo(() => {
    return selectedLetter.transcription;
  }, [selectedLetter.transcription]);

  const closeModal = useCallback(() => {
    const closeButton = document.getElementById('modalLetterPickerCloseButton');
    if (closeButton) {
      closeButton.click();
    }
  }, []);

  const handlePickLetter = useCallback(
    (letter: Letter) => {
      setSelectedLetter(letter);
      closeModal();
    },
    [closeModal],
  );

  const handleOnDrawing = useCallback(() => {
    addEvent(`draw-letter-${selectedLetter.transcription}-`);
    if (!hasStartedActivity) {
      addEvent(`start-drawing-activity`);
      setHasStartedActivity(true);
    }
  }, [addEvent, hasStartedActivity, selectedLetter.transcription]);

  return (
    <>
      <div className="ms-4 me-4" style={{ minHeight: '150px', height: '180px' }}>
        <DrawingSurface key={currentCharacter} onDrawing={handleOnDrawing}>
          {<LetterInDrawingSurface letter={selectedLetter} zoom={3} />}
        </DrawingSurface>
      </div>
      <div className="text-disabled text-light">
        Train yourself by drawing over the above letter
      </div>
      <div className="text-disabled text-light">Draw from right to left ! </div>
      <button
        type="button"
        className="btn btn-primary w-100 mt-4"
        data-bs-toggle="modal"
        data-bs-target="#modalLetterPicker"
      >
        {selectedLetter.render()}
        <span className="ps-2">Pick another character</span>
      </button>
      <div
        className="modal fade"
        id="modalLetterPicker"
        tabIndex={-1}
        aria-labelledby="modalLetterPicker"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark text-light">
              <h5 className="modal-title" id="modalLetterPickerLabel">
                Pick a character
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body bg-dark text-light">
              <div className="container-fluid">
                <div
                  className="row row-cols-5 gx-4 justify-content-evenly align-items-center overflow-auto"
                  style={{ maxHeight: '200px' }}
                >
                  {letters.map((letter: Letter, index) => (
                    <div
                      key={`${index}`}
                      className="col m-2 d-flex justify-content-evenly align-items-center h-100 cursor-pointer"
                      onClick={() => handlePickLetter(letter)}
                    >
                      {letter.render({ zoom: 1 })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer bg-dark text-light">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id="modalLetterPickerCloseButton"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DrawingActivity.displayName = 'DrawingActivity';
