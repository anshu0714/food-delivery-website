import DownloadSection from "../sections/DownloadSection.js";
import PartnerSection from "../sections/PartnerSection.js";
import OffersSection from "../sections/OffersSection.js";
import PopularCategoriesSection from "../sections/PopularCategoriesSection.js";
import PopularRestaurantsSection from "../sections/PopularRestaurantsSection.js";
import HeroSection from "../sections/HeroSection.js";
import KeyStatsSection from "../sections/KeyStatsSection.js";
import CustomerSection from "../sections/CustomerSection.js";
import Restaurants from "./Restaurants.js";

const Home = () => {
  return (
    <div className="body">
      <HeroSection />
      <CustomerSection />
      <OffersSection />
      <PopularCategoriesSection />
      <PopularRestaurantsSection />
      <DownloadSection />
      <PartnerSection />
      <KeyStatsSection />
      <Restaurants />
    </div>
  );
};

export default Home;
