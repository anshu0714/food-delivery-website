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

export default Hero;
