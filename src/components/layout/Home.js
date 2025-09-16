import DownloadSection from "../sections/DownloadSection.js";
import PartnerSection from "../sections/PartnerSection.js";
import OffersSection from "../sections/OffersSection.js";
import PopularCategoriesSection from "../sections/PopularCategoriesSection.js";
import PopularRestaurantsSection from "../sections/PopularRestaurantsSection.js";
import HeroSection from "../sections/HeroSection.js";

const Home = () => {
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

export default Home;
