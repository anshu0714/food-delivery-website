const PopularRestaurantsCard = ({ popular }) => {
  const { image, name } = popular;

  return (
    <div className="popular-res-card">
      <img src={image} alt={name} className="popular-res-image" />
      <p className="res-name">{name}</p>
    </div>
  );
};

export default PopularRestaurantsCard;