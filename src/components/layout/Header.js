import { LOGO_URL } from "../../utils/constants";
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
          <li>Home</li>
          <li>Browse Menu</li>
          <li>Special Offers</li>
          <li>Restaurants</li>
          <li>Track Order</li>
        </ul>
        <button className="login-btn" type="button" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Header;
