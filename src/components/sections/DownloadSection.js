import { GOOGLE_PLAY_STORE_ICON, HOME_IMG_URL } from "../../utils/constant";

const DownloadSection = () => {
  return (
    <div className="download-container">
      <img
        className="image"
        src={HOME_IMG_URL}
        alt="Two friend taking selfie while eating food"
      ></img>
      <div className="download-details">
        <h2>Ordering is more</h2>
        <h3>
          <span className="styled-text">Personalized</span> & Instant
        </h3>
        <p>Download the app for faster ordering</p>
        <img
          className="download-logo"
          src={GOOGLE_PLAY_STORE_ICON}
          alt="Get it on Google Play"
        />
      </div>
    </div>
  );
};

export default DownloadSection;
