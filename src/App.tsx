import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FC } from 'react';
import './App.css';
import landingPageVideo from './assets/videos/course-video.mp4';
import {
  AvestaScriptAndSoundsActivity,
  AvestaSongActivity,
  DrawingActivity,
  ExploreAlphabetActivity,
  TransposeActivity,
} from './components/activities';
import { useAnalytics } from './components/hooks';
export const App: FC = () => {
  const [addEvent] = useAnalytics();
  addEvent('load-app');

  return (
    <>
      <header className="main-header clearfix bg-dark" role="menu">
        <nav className="navbar navbar-expand-lg navbar-dark" id="appNav" role="menubar">
          <div className="container-fluid" role="toolbar">
            <a className="navbar-brand fw-bold text-uppercase" href="#">
              <em>Learn</em> Avesta
            </a>
            <button
              className="navbar-toggler px-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#appNavBar"
              aria-controls="appNavBar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              role="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="appNavBar">
              <div className="navbar-nav" role="group">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#homeSection"
                  role="menuitem"
                  aria-label="Home"
                >
                  Home
                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#learnToDrawSection"
                  role="menuitem"
                  aria-label="Draw"
                >
                  Draw
                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#learnToTransposeSection"
                  role="menuitem"
                  aria-label="Transpose"
                >
                  Transpose
                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#videoAvestaScriptAndSoundsSection"
                  role="menuitem"
                  aria-label="Video session"
                >
                  Video session
                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#avestaSongSection"
                  role="menuitem"
                  aria-label="Song session"
                >
                  Song session
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div data-bs-spy="scroll" data-bs-target="#appNav" data-bs-offset="0" tabIndex={0}>
        <section
          className="section main-banner bg-dark overflow-visible"
          id="homeSection"
          data-section="section1"
        >
          <video autoPlay muted loop id="bg-video">
            <source src={landingPageVideo} type="video/mp4" />
          </video>

          <div className="video-overlay header-text">
            <div className="caption">
              <div className="text-light text-uppercase h5 fw-bold mt-3">
                The language of the divine vision
              </div>
              <a className="btn btn-lg btn-primary mt-3" href="#learnToDrawSection">
                <div className="text-uppercase fw-bold">Discover more</div>
              </a>
              <ExploreAlphabetActivity />
            </div>
          </div>
        </section>

        <section
          className="section bg-dark coming-soon"
          id="learnToDrawSection"
          data-section="section2"
        >
          <div className="container-fluid" style={{ minHeight: '150px' }}>
            <div className="fw-bold text-uppercase text-light">
              <i className="bi bi-brush me-2"></i> Learn to <em>draw</em> Avesta characters
            </div>
            <div className="mt-4">
              <DrawingActivity />
            </div>
          </div>
        </section>

        <section
          className="section bg-dark learn-transpose"
          id="learnToTransposeSection"
          data-section="section3"
        >
          <div className="container-fluid" style={{ minHeight: '150px' }}>
            <div className="fw-bold text-uppercase text-light">
              <i className="bi bi-arrows-angle-contract me-2"></i> Learn to <em>transpose</em>{' '}
              Avesta characters
            </div>
            <div className="mt-4">
              <TransposeActivity />
              {/* <ComingSoon /> */}
            </div>
          </div>
        </section>

        <section
          className="section bg-dark video-session"
          id="videoAvestaScriptAndSoundsSection"
          data-section="section3"
        >
          <div className="container-fluid" style={{ minHeight: '150px' }}>
            <div className="fw-bold text-uppercase text-light">
              <i className="bi bi-person-video me-2"></i> Video session on{' '}
              <em>Avesta Script and Sounds</em> by Almut Hintze
            </div>
            <div className="mt-4">
              <AvestaScriptAndSoundsActivity />
            </div>
          </div>
        </section>

        <section
          className="section bg-dark video-session"
          id="avestaSongSection"
          data-section="section4"
        >
          <div className="container-fluid" style={{ minHeight: '150px' }}>
            <div className="fw-bold text-uppercase text-light">
              <i className="bi bi-music-note-list me-2"></i> Song session on <em>Yasna 28</em>
            </div>
            <div className="mt-4">
              <AvestaSongActivity />
            </div>
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
      {/* <Carrier />
      <div className="bg-dark">
        <AvestaWord transcript="henri" zoom={0.5} />
        <Sentence transcript="yānīm manō yānīm vacō" zoom={0.5} />
      </div> */}
    </>
  );
};

App.displayName = 'App';
