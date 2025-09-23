import offersList from "../../utils/offersList";
import { useState } from "react";
import OfferToggle from "../ui/OfferToggle";
import OffersCard from "../cards/OffersCard";

const OffersSection = () => {
  const allCategories = [...new Set(offersList.map((item) => item.type))];
  const firstCategory = allCategories[0];

  // State Variable
  const [filteredOffers, setFilteredOffers] = useState(
    offersList.filter((offer) => offer.type === firstCategory)
  );

  return (
    <div className="offers-section">
      <div className="offer-heading">
        <h2>Up to -40% 🎊 Exclusive deals</h2>
        <OfferToggle onCategoryChange={setFilteredOffers} />
      </div>
      <div className="offers-container">
        {filteredOffers.map((offer) => (
          <OffersCard key={offer.id} offers={offer} />
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
