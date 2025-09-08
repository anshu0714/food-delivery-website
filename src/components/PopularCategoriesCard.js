const PopularCategoriesCard = ({ popular }) => {
  const { image, category, number } = popular;

  return (
    <div className="popular-card">
      <img src={image} alt={category} className="popular-image" />
      <div className="popular-details">
        <p className="category">{category}</p>
        <h3 className="number">{number} Restaurants</h3>
      </div>
    </div>
  );
};

export default PopularCategoriesCard;
