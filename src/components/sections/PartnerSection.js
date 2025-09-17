const PartnerSection = () => {
  return (
    <div className="partner-container">
      <div className="partners-card card-partner">
        <p className="tag">Earn more with lower fees</p>
        <div className="content">
          <p className="tagline">Signup as a business</p>
          <h3 className="heading">Partner With Us</h3>
          <button className="partner-button" type="button">
            Get Started
          </button>
        </div>
      </div>
      <div className="partners-card card-ride">
        <p className="tag">Avail exclusive perks</p>
        <div className="content">
          <p className="tagline">Signup as a rider</p>
          <h3 className="heading">Ride With Us</h3>
          <button className="partner-button" type="button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
