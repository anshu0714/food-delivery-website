import offersList from "../utils/offersList";

const OfferToggle = () => {
  const allCategories = [...new Set(offersList.map((item) => item.type))];
  const mainCategories = allCategories.slice(0, 4);
  const extraCategories = allCategories.slice(4);
  const categories =
    extraCategories.length > 0 ? [...mainCategories, "Others"] : mainCategories;

  return (
    <div className="offer-toggle">
      <ul className="offer-menu">
        {categories.map((cat) => (
          <li key={cat} className="offer-menu-items">
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferToggle;
