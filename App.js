// App.js
import ReactDOM from "react-dom/client";
import { resList, offersList } from "./AppData";

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

const RestaurantCard = ({ resData }) => (
  <div className="restaurant-card">
    <img src={resData.image} alt={resData.resName} className="res-logo" />
    <h1>{resData.resName}</h1>
    <h4>{resData.cuisine}</h4>
    <h4>{resData.star} stars</h4>
    <h4>{resData.time} minutes</h4>
  </div>
);

// FIX: Add return statement & accept only 'offer', NOT index
const OffersCard = ({ offer }) => (
  <div className="offers-card">
    <img src={offer.image} alt={offer.name} className="offer-image" />
    <div className="offer-details">
      <h3>{offer.name}</h3>
      <p>{offer.category}</p>
      <span className="offer-percent">{offer.offer} Off</span>
    </div>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="search-bar">Search</div>
    <div className="offers-section">
      <h2>Up to -40% 🎊 Exclusive deals</h2>
      <div className="offers-container">
        {offersList.map((offer, index) => (
          <OffersCard key={index} offer={offer} />
        ))}
      </div>
    </div>
    <div className="restaurant-container">
      {resList.map((restaurant, index) => (
        <RestaurantCard key={index} resData={restaurant} />
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
