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
      <div className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">search</div>
      {/* Restaurant Card */}
      <RestaurantCard />
    </div>
  );
};

const RestaurantCard = () => {
  return <div className="restaurant-card">
    <h1>Meghana Foods</h1>
    
  </div>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const functionalRoot = ReactDOM.createRoot(document.getElementById("root"));
functionalRoot.render(<App />);
