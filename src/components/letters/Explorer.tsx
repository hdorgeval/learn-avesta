import { LetterA } from "./LetterA";
import { LetterAA } from "./LetterAA";
import { LetterB } from "./LetterB";
import { LetterC } from "./LetterC";
import { LetterD } from "./LetterD";
import { LetterDj } from "./LetterDj";
import { LetterE } from "./LetterE";
import { LetterEh } from "./LetterEh";
import { LetterF } from "./LetterF";
import { LetterG } from "./LetterG";
import { LetterH } from "./LetterH";
import { LetterR } from "./LetterR";
import { LetterS } from "./LetterS";
import { LetterT } from "./LetterT";
import { LetterV } from "./LetterV";
import { LetterX } from "./LetterX";
import { LetterZ } from "./LetterZ";

export const Explorer: React.FC = () => {
  const letters = [
    <LetterA fill="#f5a425" />,
    <LetterB fill="#f5a425" />,
    <LetterC fill="#f5a425" />,
    <LetterD fill="#f5a425" />,
    <LetterE fill="#f5a425" />,
    <LetterF fill="#f5a425" />,
    <LetterG fill="#f5a425" />,
    <LetterH fill="#f5a425" />,
    <LetterT fill="#f5a425" />,
    <LetterAA fill="#f5a425" />,
    <LetterR fill="#f5a425" />,
    <LetterV fill="#f5a425" />,
    <LetterDj fill="#f5a425" />,
    <LetterZ fill="#f5a425" />,
    <LetterS fill="#f5a425" />,
    <LetterEh fill="#f5a425" />,
    <LetterX fill="#f5a425" />,
  ];

  const shuffledLetters = letters.sort(() => Math.random() - 0.5);

  return (
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
          >
            {letter}
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
  );
};

Explorer.displayName = 'LettersCarousel';