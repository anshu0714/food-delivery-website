import { CLOUD_IMAGE_URL } from "../../../utils/constants";

const RestaurantCard = ({ info }) => {
  const getRatingColor = (rating) => {
    if (rating >= 4) return "#22c55e";
    if (rating >= 3) return "#facc15";
    return "#ef4444";
  };

  return (
    <div className="res-card">
      <div className="image-wrapper">
        <img
          src={CLOUD_IMAGE_URL + info.cloudinaryImageId}
          alt={info.name}
          className="res-image"
        />
        <span
          className="rating-badge"
          style={{ backgroundColor: getRatingColor(info.avgRating) }}
        >
          ⭐ {info.avgRating}
        </span>
      </div>
      <div className="res-content">
        <h3 className="res-name">{info.name}</h3>
        <div className="cuisine-container">
          {info.cuisines.slice(0, 3).map((cuisine, index) => (
            <span key={index} className="cuisine-chip">
              {cuisine}
            </span>
          ))}
        </div>
        <p className="res-pricing">{info.costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
