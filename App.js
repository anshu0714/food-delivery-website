import ReactDOM from "react-dom/client";

const Header = () => {
  return (
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
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p className="tag-line">
          Order restaurant food, takeaway and groceries.
        </p>
        <h1 className="title">
          Feast Your Senses, <br />{" "}
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
          ></input>
          <button className="find-food-btn" type="submit">
            Search
          </button>
        </div>
      </div>
      <div className="hero-left">
        <div className="review">
          <h4>Order</h4>
          <p>We’ve Received your order!</p>
          <p>Awaiting Restaurant acceptance </p>
        </div>
        <div className="review">
          <h4>Order</h4>
          <p>We’ve Received your order!</p>
          <p>Awaiting Restaurant acceptance </p>
        </div>
        <div className="review">
          <h4>Order</h4>
          <p>We’ve Received your order!</p>
          <p>Awaiting Restaurant acceptance </p>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">search</div>
      {/* Restaurant Card */}
      <div className="restaurant-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North India, Asian"
          star="4.4"
          time="38"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Burgers, Fast Food"
          star="4.6"
          time="20"
        />
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // Destructuring props object
  const { resName, cuisine, star, time } = props;

  return (
    <div className="restaurant-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/6/a009bdbf-d06c-4342-820c-f9ac37ab58a4_e21acc8c-dc4a-4177-b5e6-f4fc1ee2251e.jpg"
        alt="res-logo"
        className="res-logo"
      />
      {/* Without destructuring we use it like this */}
      {/* <h1>{props.resName}</h1> */}
      <h1>{resName}</h1>
      <h4>{cuisine}</h4>
      <h4>{star} stars</h4>
      <h4>{time} minutes</h4>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Body />
    </div>
  );
};

const functionalRoot = ReactDOM.createRoot(document.getElementById("root"));
functionalRoot.render(<App />);
