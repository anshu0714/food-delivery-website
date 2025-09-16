import DownloadSection from "./DownloadSection.js";
import PartnerSection from "./PartnerSection.js";
import OffersSection from "./OffersSection.js";
import PopularCategoriesSection from "./PopularCategoriesSection.js";
import PopularRestaurantsSection from "./PopularRestaurantsSection.js";
import HeroSection from "./HeroSection.js";

const Body = () => {
  return (
    <div className="body">
      <HeroSection />
      <OffersSection />
      <PopularCategoriesSection />
      <PopularRestaurantsSection />
      <DownloadSection />
      <PartnerSection />
    </div>
  );
};

export default Body;
