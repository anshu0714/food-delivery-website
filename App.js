// App.js
import ReactDOM from "react-dom/client";
import {
  resList,
  offersList,
  popularCategories,
  popularRestaurants,
} from "./AppData";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://tse3.mm.bing.net/th/id/OIP.icy4vofXZVY6EVcy8J9HVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Food Delivery App Logo"
      />
    </div>
    <div className="nav-items-container">
      <ul className="nav-items">
        <li>Home</li>
        <li>Browse Menu</li>
        <li>Special Offers</li>
        <li>Restaurants</li>
        <li>Track Order</li>
      </ul>
      <button className="login-btn" type="log-in">
        Log In / Sign Up
      </button>
    </div>
  </div>
);

const Hero = () => (
  <div className="hero">
    <div className="hero-text">
      <p className="tag-line">Order restaurant food, takeaway and groceries.</p>
      <h1 className="title">
        Feast Your Senses, <br />
        <span className="title-color">Fast and Fresh</span>
      </h1>
      <p className="sub-title">Enter a postcode to see what we deliver</p>
      <div className="postcode">
        <label htmlFor="postcodeInput"></label>
        <input
          className="postcode-input"
          type="text"
          id="postcodeInput"
          placeholder="Enter postcode"
        />
        <button className="find-food-btn" type="submit">
          Search
        </button>
      </div>
    </div>
    <div className="hero-left">
      <div className="review">
        <h4>Review</h4>
        <p>John D.</p>
        <p>“Great food and quick delivery!”</p>
      </div>
      <div className="review">
        <h4>Review</h4>
        <p>Sarah K.</p>
        <p>“Loved the flavors, will order again.”</p>
      </div>
      <div className="review">
        <h4>Review</h4>
        <p>Michael P.</p>
        <p>“Packaging was neat and food was hot!”</p>
      </div>
    </div>
  </div>
);

const RestaurantCard = ({ resData }) => {
  const { image, resName, cuisine, star, time } = resData;

  return (
    <div className="restaurant-card">
      <img src={image} alt={resName} className="res-logo" />
      <h1>{resName}</h1>
      <h4>{cuisine}</h4>
      <h4>{star} stars</h4>
      <h4>{time} minutes</h4>
    </div>
  );
};

const OffersCard = ({ offers }) => {
  const { image, name, offer, category } = offers;
  return (
    <div className="offers-card">
      <img src={image} alt={name} className="offer-image" />
      <span className="offer-percent">-{offer}</span>
      <div className="offer-details">
        <p className="category">{category}</p>
        <h3 className="name">{name}</h3>
      </div>
    </div>
  );
};

const PopularCategoriesCard = ({ popular }) => {
  const { image, category, number } = popular;

  return (
    <div className="popular-card">
      <img src={image} alt={category} className="popular-image" />
      <div className="popular-details">
        <p className="category">{category}</p>
        <h3 className="number">{number} Restaurants</h3>
      </div>
    </div>
  );
};

const PopularRestaurantsCard = ({ popular }) => {
  const { image, name } = popular;

  return (
    <div className="popular-res-card">
      <img src={image} alt={name} className="popular-res-image" />
      <p className="res-name">{name}</p>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="offers-section">
      <div className="offer-heading">
        <h2>Up to -40% 🎊 Exclusive deals</h2>
        <div className="offer-toggle">
          <ul className="offer-menu">
            <li className="offer-menu-items offer-menu-active">Pizza</li>
            <li className="offer-menu-items">Coffee</li>
            <li className="offer-menu-items">Chicken</li>
            <li className="offer-menu-items">Others</li>
          </ul>
        </div>
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
    <div className="restaurant-container">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} />
      ))}
    </div>
  </div>
);

const App = () => (
  <div>
    <Header />
    <Hero />
    <Body />
  </div>
);

const functionalRoot = ReactDOM.createRoot(document.getElementById("root"));
functionalRoot.render(<App />);
