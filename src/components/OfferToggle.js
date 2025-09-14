import { useState } from "react";
import offersList from "../utils/offersList";

const OfferToggle = ({ onCategoryChange }) => {
  const allCategories = [...new Set(offersList.map((item) => item.type))];
  const mainCategories = allCategories.slice(0, 4);
  const extraCategories = allCategories.slice(4);
  const categories =
    extraCategories.length > 0 ? [...mainCategories, "Others"] : mainCategories;

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleClick = (cat) => {
    setActiveCategory(cat);
    const filtered =
      cat === "Others"
        ? offersList.filter((offer) => !mainCategories.includes(offer.type))
        : offersList.filter((offer) => offer.type === cat);
    onCategoryChange(filtered);
  };

  return (
    <div className="offer-toggle">
      <ul className="offer-menu">
        {categories.map((cat) => (
          <li
            key={cat}
            className={`offer-menu-items ${
              activeCategory === cat ? "offer-menu-active" : ""
            }`}
            onClick={() => handleClick(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferToggle;
