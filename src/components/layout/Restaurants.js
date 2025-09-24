import { useEffect, useState } from "react";
import Shimmer from "../ui/Shimmer";
import { RES_API } from "../../utils/apiList";
import { CLOUD_IMAGE_URL } from "../../utils/constants";

const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const fetchRestaurants = async () => {
    let data = await fetch(RES_API);
    let json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    console.log(restaurantList);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="restaurants">
      <div className="search-bar"></div>
      <div className="restaurants-container">
        {restaurantList.length === 0 && <Shimmer />}
        {restaurantList.map((restaurant) => {
          return (
            <div key={restaurant.info.id} className="restaurant-card">
              <img
                src={CLOUD_IMAGE_URL + restaurant.info.cloudinaryImageId}
                alt={restaurant.info.name}
                className="restaurant-image"
              />
              <h3>{restaurant.info.name}</h3>
              <p>Rating: {restaurant.info.avgRating}</p>
              <p>{restaurant.info.cuisines.join(", ")}</p>
              <p>{restaurant.info.costForTwo}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Restaurants;
