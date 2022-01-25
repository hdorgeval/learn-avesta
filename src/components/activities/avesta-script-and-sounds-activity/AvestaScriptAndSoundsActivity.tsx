import previewAvestaScriptAndSounds from '../../../assets/images/video-preview-avestan-script-and-sounds.png';
import { VideoPlayer } from "../../video-player";
export const AvestaScriptAndSoundsActivity: React.FC = () => {

  return (
    <>
      <VideoPlayer 
        thumbnailUrl={previewAvestaScriptAndSounds}
        videoUrl="https://spw.uni-goettingen.de/projects/aig/mp4/AVE-INT-003.mp4" startTime="18:35" 
      />
      <div className="d-flex flex-column align-items-center">
        <a
          className="text-light fs-6 text-muted"
          href="https://spw.uni-goettingen.de/projects/aig/lng-ave.html"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Video session source"
        >
                  Credit: spw.uni-goettingen.de/projects/aig/lng-ave.html
          <i className="bi bi-box-arrow-up-right ms-2"></i>
        </a>
      </div>
    </>
  );
};