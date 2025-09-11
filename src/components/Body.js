import resList from "../utils/resList.js";
import popularRestaurants from "../utils/popularRestaurants.js";
import popularCategories from "../utils/popularCategories.js";
import offersList from "../utils/offersList.js";
import Hero from "./Hero";
import OffersCard from "./OffersCard";
import OfferToggle from "./OfferToggle";
import PopularCategoriesCard from "./PopularCategoriesCard";
import PopularRestaurantsCard from "./PopularRestaurantsCard";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { HOME_IMG_URL } from "../utils/constant.js";
import DownloadSection from "./DownloadSection.js";


const Body = () => {
  // State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <Hero />
      <div className="offers-section">
        <div className="offer-heading">
          <h2>Up to -40% 🎊 Exclusive deals</h2>
          <OfferToggle />
        </div>
        <div className="offers-container">
          {offersList.map((offer) => (
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
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
