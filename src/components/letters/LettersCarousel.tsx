import { LetterA, LetterB, LetterC, LetterD, LetterE, LetterF, LetterG, LetterH } from '.';

export const LettersCarousel: React.FC = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide mt-5 pb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <LetterA fill="#f5a425" />
        </div>
        <div className="carousel-item">
          <LetterB fill="#f5a425" />
        </div>
        <div className="carousel-item">
          <LetterC fill="#f5a425" />
        </div>
        <div className="carousel-item">
          <LetterD fill="#f5a425" />
        </div>
        <div className="carousel-item">
          <LetterE fill="#f5a425" />
        </div>
        <div className="carousel-item">
          <LetterF fill="#f5a425" />
        </div>
        <div className="carousel-item">
          <LetterG fill="#f5a425" />
        </div>
        <div className="carousel-item">
          <LetterH fill="#f5a425" />
        </div>
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
