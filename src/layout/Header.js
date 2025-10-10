import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [buttonText, setButtonText] = useState("Log In / Sign Up");

  function handleClick() {
    buttonText == "Log In / Sign Up"
      ? setButtonText("Log Out")
      : setButtonText("Log In / Sign Up");
  }

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food Delivery App Logo" />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/browse-menu" className="nav-item">
              Browse Menu
            </Link>
          </li>
          <li>
            <Link to="/special-offers" className="nav-item">
              Special Offers
            </Link>
          </li>
          <li>
            <Link to="/restaurants" className="nav-item">
              Restaurants
            </Link>
          </li>
          <li>
            <Link to="/track-order" className="nav-item">
              Track Order
            </Link>
          </li>
        </ul>
        <button className="login-btn" type="button" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Header;
