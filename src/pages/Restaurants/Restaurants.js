import { useEffect, useState } from "react";
import { RES_API } from "../../utils/apiList";
import RestaurantCardShimmer from "../../components/ui/RestaurantCardShimmer";
import SearchBar from "./sections/SearchBar";
import RestaurantCard from "./sections/RestaurantCard";

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

  const handleSearch = () => {
    const filtered = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <div className="res">
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={handleSearch}
      />

      <div className="res-container">
        {filteredRestaurants.length === 0 && <RestaurantCardShimmer />}
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} info={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
