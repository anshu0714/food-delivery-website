import popularCategories from "../../utils/popularCategories";
import PopularCategoriesCard from "../cards/PopularCategoriesCard";

const PopularCategoriesSection = () => {
  return (
    <div className="popular-categories">
      <h2>Popular Categories 🤩</h2>
      <div className="popular-container">
        {popularCategories.map((popular) => (
          <PopularCategoriesCard key={popular.id} popular={popular} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategoriesSection;
