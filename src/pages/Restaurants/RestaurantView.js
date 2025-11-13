import { useEffect, useState } from "react";
import { RES_API } from "../../utils/apiList";
import RestaurantCardShimmer from "../../components/ui/RestaurantCardShimmer";

const RestaurantView = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    let result =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[0]?.info || [];

    setResInfo(result);
  };

  return resInfo == null ? (
    <RestaurantCardShimmer />
  ) : (
    <div className="res-view">
      <h2 className="res-view-name">{resInfo.name}</h2>
      <h3 className="menu">Menu</h3>
      <ul className="menu-list">
        <li className="item">Biryani</li>
        <li className="item">Burgers</li>
        <li className="item">Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantView;
