import partnerList from "../../../utils/partnerList";

const PartnerSection = () => {
  return (
    <div className="partner-container">
      {partnerList.map((partner) => {
        return (
          <div
            className={`partners-card ${partner.className}`}
            key={partner.id}
          >
            <p className="tag">{partner.tag}</p>
            <div className="content">
              <p className="tagline">{partner.tagline}</p>
              <h3 className="heading">{partner.heading}</h3>
              <button className="partner-button" type="button">
                {partner.buttonText}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PartnerSection;
