import { CSSProperties, useCallback, useMemo, useState } from "react";
import { useAnalytics } from "../hooks";
import { LetterA, LetterB } from "../letters";
import { LetterName } from "../letters/LetterNames";
import { DrawingSurface } from "./DrawingSurface";

export interface useLetterProps {
  letter: LetterName;
  zoom?: number;
  overridenStyle?: CSSProperties;
  
}

export const useLetter = ({letter, zoom}:useLetterProps ) => {
  switch (letter) {
    case 'A':
      return <LetterA zoom={zoom} overridenStyle={{marginLeft: '-0px'}}/>;
    case 'B':
      return <><LetterB zoom={zoom} /></>;
    default:
      break;
  }
};

export const useLetterInDrawingSurface = ({letter, zoom}:useLetterProps ) => {
  switch (letter) {
    case 'A':
      return <LetterA zoom={zoom} overridenStyle={{marginLeft: '-0px'}}/>;
    case 'B':
      return <><LetterA zoom={zoom} overridenStyle={{marginRight: '-140px'}}/><LetterB zoom={zoom} overridenStyle={{marginLeft: '-0px'}}/></>;
    default:
      break;
  }
};

export const Drawer: React.FC = () => {
  const [addEvent] = useAnalytics();
  const [currentCharacter, setCurrentCharacter] = useState<LetterName>('A');
  const closeModal = useCallback(() => {
    const closeButton = document.getElementById('modalLetterPickerCloseButton');
    if (closeButton) {
      closeButton.click();
    }
      
  }
  , []);

  const handlePickLetterA = useCallback(() => {
    setCurrentCharacter('A');
    closeModal();
    addEvent('letter-picker-a');
  }, [addEvent, closeModal]);
  const handlePickLetterB = useCallback(() => {
    setCurrentCharacter('B');
    closeModal();
    addEvent('letter-picker-b');
  }, [addEvent, closeModal]);
  
  const zoomFactorInDrawer = useMemo((): number => {
    switch (currentCharacter) {
      case 'B':
        return 3;
            
      default:
        return 5;
    }
  }, [currentCharacter]);

  return (
    <>
      <div className="ms-4 me-4" style={{minHeight: '150px', height: '150px'}}>
        <DrawingSurface key={currentCharacter}>
          {
            useLetterInDrawingSurface({letter: currentCharacter, zoom: zoomFactorInDrawer})
          }
        </DrawingSurface>
      </div>
      <div className="text-disabled text-light">Train yourself by drawing over the above letter(s)</div>
      <div className="text-disabled text-light">Draw from right to left ! </div>
      <button type="button" className="btn btn-primary w-100 mt-4" data-bs-toggle="modal" data-bs-target="#modalLetterPicker">
        {useLetter({letter: currentCharacter, zoom: 1})}
        <span className="ps-2">Pick another character</span>
      </button>
      <div className="modal fade" id="modalLetterPicker" tabIndex={-1} aria-labelledby="modalLetterPicker" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLetterPickerLabel">Pick a character</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary" type="button" onClick={handlePickLetterA}><LetterA zoom={1}/></button>
                <button className="btn btn-primary" type="button" onClick={handlePickLetterB}><LetterB fill="#f5a425" zoom={1}/></button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="modalLetterPickerCloseButton">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

