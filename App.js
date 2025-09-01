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
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg"
  },
  {
    resName: "McDonald's",
    cuisine: "Burgers, Beverages",
    star: "4.4",
    time: "18",
    image: "https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg"
  },
  {
    resName: "Domino's Pizza",
    cuisine: "Pizza, Fast Food",
    star: "4.2",
    time: "25",
    image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg"
  },
  {
    resName: "Subway",
    cuisine: "Healthy Food, Sandwiches",
    star: "4.3",
    time: "22",
    image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg"
  },
  {
    resName: "Burger King",
    cuisine: "Burgers, Beverages",
    star: "4.1",
    time: "19",
    image: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg"
  },
  {
    resName: "Pizza Hut",
    cuisine: "Pizza, Fast Food",
    star: "4.0",
    time: "24",
    image: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg"
  },
  {
    resName: "Starbucks",
    cuisine: "Coffee, Beverages",
    star: "4.7",
    time: "15",
    image: "https://b.zmtcdn.com/data/pictures/chains/8/35008/703ffbb5de67e078d3f7df6f2a6a07b3.jpg"
  },
  {
    resName: "Taco Bell",
    cuisine: "Mexican, Fast Food",
    star: "4.2",
    time: "23",
    image: "https://b.zmtcdn.com/data/pictures/chains/2/35002/77bfe8b116b0ed0dca2b1fe97958a3d3.jpg"
  },
  {
    resName: "Haldiram's",
    cuisine: "Indian, Sweets",
    star: "4.5",
    time: "20",
    image: "https://b.zmtcdn.com/data/pictures/chains/1/35001/63559b2bb2c7087f3aa1e50ab6966482.jpg"
  },
  {
    resName: "Bikanervala",
    cuisine: "North Indian, Mithai",
    star: "4.3",
    time: "21",
    image: "https://b.zmtcdn.com/data/pictures/chains/9/35009/7c939e0d4e2f43fa43a5b775d390d05e.jpg"
  },
  {
    resName: "Cafe Coffee Day",
    cuisine: "Coffee, Snacks",
    star: "4.0",
    time: "17",
    image: "https://b.zmtcdn.com/data/pictures/chains/8/35008/322d39ac787f63ff12aeb97a39f3b6d2.jpg"
  },
  {
    resName: "Barbeque Nation",
    cuisine: "BBQ, North Indian",
    star: "4.6",
    time: "30",
    image: "https://b.zmtcdn.com/data/pictures/chains/9/35009/9c92f82ac6a9b9a53f50857c7e4f4c6b.jpg"
  },
  {
    resName: "Wow! Momo",
    cuisine: "Momos, Fast Food",
    star: "4.2",
    time: "16",
    image: "https://b.zmtcdn.com/data/pictures/chains/3/35003/d3b59d62ef5f32d6cf44e2d328d7e109.jpg"
  },
  {
    resName: "Faasos",
    cuisine: "Rolls, North Indian",
    star: "4.4",
    time: "22",
    image: "https://b.zmtcdn.com/data/pictures/chains/6/35006/b8b26cbcb814a478b0b0a6d8a42a996a.jpg"
  },
  {
    resName: "Behrouz Biryani",
    cuisine: "Biryani, Mughlai",
    star: "4.6",
    time: "28",
    image: "https://b.zmtcdn.com/data/pictures/chains/4/35004/00b481c2c8a3543b2adbc2c2c2b45fd5.jpg"
  },
  {
    resName: "FreshMenu",
    cuisine: "Healthy Food, Salads",
    star: "4.1",
    time: "18",
    image: "https://b.zmtcdn.com/data/pictures/chains/5/35005/19787c62eab4167b5a9f878c95628a33.jpg"
  },
  {
    resName: "Chai Point",
    cuisine: "Tea, Snacks",
    star: "4.3",
    time: "14",
    image: "https://b.zmtcdn.com/data/pictures/chains/6/35006/9db8712f2e7c8d52efedec4f3c9f2af4.jpg"
  },
  {
    resName: "The Belgian Waffle Co.",
    cuisine: "Desserts, Waffles",
    star: "4.7",
    time: "19",
    image: "https://b.zmtcdn.com/data/pictures/chains/7/35007/8c5b57f871f2b791a2ebd938c74a0e2d.jpg"
  },
  {
    resName: "Chinese Wok",
    cuisine: "Chinese, Asian",
    star: "4.2",
    time: "26",
    image: "https://b.zmtcdn.com/data/pictures/chains/8/35008/5e86b6df8d8473f88cf8e9a6c29a2bbf.jpg"
  },
  {
    resName: "Giani's",
    cuisine: "Ice Cream, Desserts",
    star: "4.5",
    time: "12",
    image: "https://b.zmtcdn.com/data/pictures/chains/9/35009/2b0d3f4f9a7eeb2ef2d1bdf4c6f7bc77.jpg"
  }
];


const RestaurantCard = ({ resData }) => {
  return (
    <div className="restaurant-card">
      <img
        src={resData.image}
        alt={resData.resName}
        className="res-logo"
      />
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
