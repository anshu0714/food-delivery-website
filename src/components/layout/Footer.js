import { LOGO_URL } from "../../utils/constants";

const Footer = function () {
  return (
    <footer className="footer-container">
      <div className="company-details">
        <img className="company-logo" src={LOGO_URL} alt="Company Logo" />
        <p className="company-registration">
          Company # 490039-445, Registered with House of companies.
        </p>
      </div>

      <div className="subscribe-details">
        <h4 className="subscribe-heading">
          Get Exclusives Deals in Your Inbox
        </h4>
        <div className="subscribe-box">
          <input
            className="subscribe-input"
            type="text"
            placeholder="Enter your email"
          />
          <button className="subscribe-button" type="button">
            Subscribe
          </button>
        </div>
        <p className="subscribe-policy">
          we won't spam, read our{" "}
          <a className="policy-link" href="#">
            email policy
          </a>
        </p>
      </div>

      <div className="legal-pages">
        <ul className="legal-list">
          <li className="legal-item">Terms and conditions</li>
          <li className="legal-item">Privacy</li>
          <li className="legal-item">Cookies</li>
          <li className="legal-item">Modern Slavery Statement</li>
        </ul>
      </div>

      <div className="important-links">
        <ul className="links-list">
          <li className="links-item">Get Help</li>
          <li className="links-item">Add Your Restaurant</li>
          <li className="links-item">Sign Up to Deliver</li>
          <li className="links-item">Create a Business Account</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
