import resList from "../utils/resList.js";
import popularRestaurants from "../utils/popularRestaurants.js";
import popularCategories from "../utils/popularCategories.js";
import offersList from "../utils/offersList.js";
import Hero from "./Hero";
import OffersCard from "./OffersCard";
import OfferToggle from "./OfferToggle";
import PopularCategoriesCard from "./PopularCategoriesCard";
import PopularRestaurantsCard from "./PopularRestaurantsCard";
import { useState } from "react";
import { HOME_IMG_URL } from "../utils/constant.js";
import DownloadSection from "./DownloadSection.js";

const Body = () => {
  const allCategories = [...new Set(offersList.map((item) => item.type))];
  const firstCategory = allCategories[0];

  // State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredOffers, setFilteredOffers] = useState(
    offersList.filter((offer) => offer.type === firstCategory)
  );

  return (
    <div className="body">
      <Hero />
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
      <div className="popular-categories">
        <h2>Popular Categories 🤩</h2>
        <div className="popular-container">
          {popularCategories.map((popular) => (
            <PopularCategoriesCard key={popular.id} popular={popular} />
          ))}
        </div>
      </div>
      <div className="popular-restaurants">
        <h2>Popular Restaurants</h2>
        <div className="popular-res-container">
          {popularRestaurants.map((popular) => (
            <PopularRestaurantsCard key={popular.id} popular={popular} />
          ))}
        </div>
      </div>
      <div className="download-container">
        <img
          className="image"
          src={HOME_IMG_URL}
          alt="Two friend taking selfie while eating food"
        ></img>
        <DownloadSection />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          type="button"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.star > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
    </div>
  );
};

export default Body;
