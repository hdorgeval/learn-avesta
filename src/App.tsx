import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FC } from 'react';
import './App.css';
import landingPageVideo from './assets/videos/course-video.mp4';
import { LetterA, LetterB, LetterC, LetterD } from './components/letters';

export const App: FC = () => {
  return (
    <>
      <header className="main-header clearfix bg-dark" role="header">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold text-uppercase" href="#">
              <em>Learn</em> Avesta
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fs-1 fw-bold"></span>
            </button>
          </div>
        </nav>
      </header>
      <section className="section main-banner bg-dark" id="top" data-section="section1">
        <video autoPlay muted loop id="bg-video">
          <source src={landingPageVideo} type="video/mp4" />
        </video>

        <div className="video-overlay header-text">
          <div className="caption">
            <div className="text-light text-uppercase h5 fw-bold mt-3">
              The language of the divine vision
            </div>
            <button type="button" className="btn btn-lg btn-primary mt-3" disabled>
              <div className="text-uppercase fw-bold">Discover more</div>
              <div className="fs-7">(will be available soon)</div>
            </button>
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
          </div>
        </div>
      </section>
      <footer className="bg-dark text-light">
        <div className="d-flex flex-column align-items-center">
          <span>This site is in beta.</span>
          <a
            className=" text-light bg-dark"
            href="https://github.com/hdorgeval/learn-avesta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub source"
          >
            Feel free to give any feedback on <i className="bi bi-github text-light me-0"></i>
            <i className="bi bi-box-arrow-up-right ms-2"></i>
          </a>
        </div>
      </footer>
      {/* <div>
        <LetterC fill="#f5a425" />
        <LetterA fill="#f5a425" />
        <LetterB fill="#f5a425" />
        <LetterC fill="#f5a425" />
        <LetterB fill="#f5a425" />
        <LetterD fill="#f5a425" />
      </div> */}
    </>
  );
};

App.displayName = 'App';
