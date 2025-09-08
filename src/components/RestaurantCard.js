const RestaurantCard = ({ resData }) => {
  const { image, resName, cuisine, star, time } = resData;

  return (
    <div className="restaurant-card">
      <img src={image} alt={resName} className="res-logo" />
      <h1>{resName}</h1>
      <h4>{cuisine}</h4>
      <h4>{star} stars</h4>
      <h4>{time} minutes</h4>
    </div>
  );
};

export default RestaurantCard;