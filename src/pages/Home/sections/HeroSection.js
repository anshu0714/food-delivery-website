import { HERO_IMAGE } from "../../../utils/constants";
import reviewsList from "../../../utils/reviewsList";

const HeroSection = () => (
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
    <div className="hero-image">
      <img src={HERO_IMAGE} alt="A woman eating pizza"></img>
    </div>
    <div className="hero-left">
      {reviewsList.map((review) => {
        const { id, heading, name, comment } = review;
        return (
          <div className="review" key={id}>
            <h4>{heading}</h4>
            <p>{name}</p>
            <p>{comment}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default HeroSection;
