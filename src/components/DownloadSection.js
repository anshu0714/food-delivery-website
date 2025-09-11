import { GOOGLE_PLAY_STORE_ICON } from "../utils/constant";

const DownloadSection = () => {
  return (
    <div className="download-details">
      <h2>Ordering is more</h2>
      <h3>
        <span className="styled-text">Personalized</span> & Instant
      </h3>
      <p>Download the app for faster ordering</p>
      <img className="download-logo" src={GOOGLE_PLAY_STORE_ICON} alt="Get it on Google Play" />
    </div>
  );
};

export default DownloadSection;
