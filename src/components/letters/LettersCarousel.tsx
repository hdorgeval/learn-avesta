import { LetterA, LetterAA, LetterB, LetterC, LetterD, LetterE, LetterF, LetterG, LetterH, LetterR, LetterT } from '.';

export const LettersCarousel: React.FC = () => {
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
  ];

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide mt-5 pb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {letters.map((_, i) => (
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
      <div className="carousel-inner overflow-visible">
        {letters.map((letter, i) => (
          <div 
            key={`${i}`}
            className={`carousel-item ${i === 0 ? 'active' : ''}`}>
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

LettersCarousel.displayName = 'LettersCarousel';
