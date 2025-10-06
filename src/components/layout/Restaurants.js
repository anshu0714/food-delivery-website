import { useEffect, useState } from "react";
import { RES_API } from "../../utils/apiList";
import { CLOUD_IMAGE_URL } from "../../utils/constants";
import RestaurantCardShimmer from "../ui/RestaurantCardShimmer";

const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchRestaurants = async () => {
    let data = await fetch(RES_API);
    let json = await data.json();
    let result =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestaurantList(result);
    setFilteredRestaurants(result);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const getRatingColor = (rating) => {
    if (rating >= 4) return "#22c55e"; // green
    if (rating >= 3) return "#facc15"; // yellow
    return "#ef4444"; // red
  };

  return (
    <div className="res">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="search-btn"
          onClick={() => {
            const filtered = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Search
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.length === 0 && <RestaurantCardShimmer />}
        {filteredRestaurants.map((restaurant) => {
          const info = restaurant.info;
          return (
            <div key={info.id} className="res-card">
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
        })}
      </div>
    </div>
  );
};

export default Restaurants;
