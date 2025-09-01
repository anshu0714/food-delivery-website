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
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">search</div>
      {/* Restaurant Card */}
      <div className="restaurant-container">
        <div className="restaurant-container">
          {resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};
const resList = [
  {
    resName: "KFC",
    cuisine: "Burgers, Fast Food",
    star: "4.6",
    time: "20",
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
  },
  {
    resName: "McDonald's",
    cuisine: "Burgers, Beverages",
    star: "4.4",
    time: "18",
    image: "https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg",
  },
  {
    resName: "Domino's Pizza",
    cuisine: "Pizza, Fast Food",
    star: "4.2",
    time: "25",
    image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
  },
  {
    resName: "Subway",
    cuisine: "Healthy Food, Sandwiches",
    star: "4.3",
    time: "22",
    image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg",
  },
  {
    resName: "Burger King",
    cuisine: "Burgers, Beverages",
    star: "4.1",
    time: "19",
    image: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg",
  },
  {
    resName: "Pizza Hut",
    cuisine: "Pizza, Fast Food",
    star: "4.0",
    time: "24",
    image: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg",
  },
  {
    resName: "Starbucks",
    cuisine: "Coffee, Beverages",
    star: "4.7",
    time: "15",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
  },
  {
    resName: "Taco Bell",
    cuisine: "Mexican, Fast Food",
    star: "4.2",
    time: "23",
    image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg",
  },
  {
    resName: "Haldiram's",
    cuisine: "Indian, Sweets",
    star: "4.5",
    time: "20",
    image:
      "https://images.pexels.com/photos/18488304/pexels-photo-18488304.jpeg",
  },
  {
    resName: "Bikanervala",
    cuisine: "North Indian, Mithai",
    star: "4.3",
    time: "21",
    image: "https://images.pexels.com/photos/8887055/pexels-photo-8887055.jpeg",
  },
  {
    resName: "Cafe Coffee Day",
    cuisine: "Coffee, Snacks",
    star: "4.0",
    time: "17",
    image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg",
  },
  {
    resName: "Barbeque Nation",
    cuisine: "BBQ, North Indian",
    star: "4.6",
    time: "30",
    image:
      "https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg",
  },
  {
    resName: "Wow! Momo",
    cuisine: "Momos, Fast Food",
    star: "4.2",
    time: "16",
    image: "https://images.pexels.com/photos/33670191/pexels-photo-33670191.jpeg",
  },
  {
    resName: "Faasos",
    cuisine: "Rolls, North Indian",
    star: "4.4",
    time: "22",
    image: "https://images.pexels.com/photos/33709307/pexels-photo-33709307.jpeg",
  },
  {
    resName: "Behrouz Biryani",
    cuisine: "Biryani, Mughlai",
    star: "4.6",
    time: "28",
    image: "https://images.pexels.com/photos/4910320/pexels-photo-4910320.jpeg",
  },
  {
    resName: "FreshMenu",
    cuisine: "Healthy Food, Salads",
    star: "4.1",
    time: "18",
    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg",
  },
  {
    resName: "Chai Point",
    cuisine: "Tea, Snacks",
    star: "4.3",
    time: "14",
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
  },
  {
    resName: "The Belgian Waffle Co.",
    cuisine: "Desserts, Waffles",
    star: "4.7",
    time: "19",
    image: "https://media.istockphoto.com/id/1382005630/photo/chocolate-waffle.jpg?b=1&s=612x612&w=0&k=20&c=dLbcyJONf7ZenmKbFmVbA_UNmTh0nXunJpDhJjTEvEs=",
  },
  {
    resName: "Chinese Wok",
    cuisine: "Chinese, Asian",
    star: "4.2",
    time: "26",
    image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
  },
  {
    resName: "Giani's",
    cuisine: "Ice Cream, Desserts",
    star: "4.5",
    time: "12",
    image: "",
  },
];

const RestaurantCard = ({ resData }) => {
  return (
    <div className="restaurant-card">
      <img src={resData.image} alt={resData.resName} className="res-logo" />
      {/* Without destructuring we use it like this */}
      {/* <h1>{props.resName}</h1> */}
      <h1>{resData.resName}</h1>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.star} stars</h4>
      <h4>{resData.time} minutes</h4>
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
