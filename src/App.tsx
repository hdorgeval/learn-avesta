import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FC } from 'react';
import './App.css';
import landingPageVideo from './assets/videos/course-video.mp4';
import { Drawer } from './components/drawings';
import { LettersCarousel } from './components/letters';

export const App: FC = () => {
  return (
    <>
      <header className="main-header clearfix bg-dark" role="header">
        <nav className="navbar navbar-expand-lg navbar-dark" id="appNav">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold text-uppercase" href="#">
              <em>Learn</em> Avesta
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#appNavBar"
              aria-controls="appNavBar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fs-1 fw-bold"></span>
            </button>
            <div className="collapse navbar-collapse" id="appNavBar">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#homeSection">Home</a>
                
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div data-bs-spy="scroll" data-bs-target="#appNav" data-bs-offset="0" tabIndex={0}>
        <section className="section main-banner bg-dark" id="homeSection" data-section="section1">
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
              <LettersCarousel />
            </div>
          </div>
        </section>

        <section className="section bg-dark coming-soon" id="learnToDrawSection" data-section="section2">
          <div className="container-fluid" style={{minHeight: '150px'}}>
            <div className="fw-bold text-uppercase text-light" >
              <i className="bi bi-brush me-2"></i> Learn to <em>draw</em> Avesta characters 
            </div>
            <div className="mt-4 ms-4" style={{minHeight: '150px', height: '150px'}}>
              <Drawer/>
            </div>
            <div className="text-disabled text-light">Train yourself by drawing over the above letter</div>
          </div>
        </section>
      </div>
      
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
      {/* <Carrier /> */}
      {/* <div>
        <DrawingSurface />
      </div> */}
    </>
  );
};

App.displayName = 'App';
