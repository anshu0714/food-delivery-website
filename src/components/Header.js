import { LOGO_URL } from "../utils/constant";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={LOGO_URL} alt="Food Delivery App Logo" />
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

export default Header;
