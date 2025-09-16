import PopularRestaurantsCard from "./PopularRestaurantsCard";
import popularRestaurants from "../utils/popularRestaurants";

const PopularRestaurantsSection = () => {
  return (
    <div className="popular-restaurants">
      <h2>Popular Restaurants</h2>
      <div className="popular-res-container">
        {popularRestaurants.map((popular) => (
          <PopularRestaurantsCard key={popular.id} popular={popular} />
        ))}
      </div>
    </div>
  );
};

export default PopularRestaurantsSection;
