const OffersCard = ({ offers }) => {
  const { image, name, offer, category } = offers;

  return (
    <div className="offers-card">
      <img src={image} alt={name} className="offer-image" />
      <span className="offer-percent">-{offer}</span>
      <div className="offer-details">
        <p className="category">{category}</p>
        <h3 className="name">{name}</h3>
      </div>
    </div>
  );
};

export default OffersCard;
