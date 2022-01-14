import { useCallback, useMemo, useState } from "react";
import { useLetters } from "../hooks";
import { Letter } from "../letters";

export const Transposer: React.FC = () => {
  const letters = useLetters();
  const [selectedAvestaCharacter, setSelectedAvestaCharacter] = useState<Letter | undefined>(undefined);
  const shuffledLetters = useMemo(() => {
    return letters.sort(() => Math.random() - 0.5);
  }, [letters]);

  const handleClickOnAvestaLetter = useCallback((letter: Letter) => {
    setSelectedAvestaCharacter(letter);
  },[]);
  
  const isAvestaCharacterSelected = useCallback((letter: Letter) => {
    return selectedAvestaCharacter?.transcription === letter.transcription;
  }, [selectedAvestaCharacter?.transcription]);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="card bg-dark text-light">
            <div className="card-body">
              <div className="container">
                <div className="row row-cols-4 gx-2 justify-content-evenly align-items-center">
                  {shuffledLetters.map((letter, i) => (
                    <div 
                      key={`${i}`}
                      className={`col ${isAvestaCharacterSelected(letter) ? 'bg-primary' : ''}`}
                      onClick={() => handleClickOnAvestaLetter(letter)}
                    >
                      {letter.render({overridenStyle: {marginLeft: '0px'}, disableSound: true})}
                    </div>
                  ))} 
    
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Transposer.displayName = 'Transposer';