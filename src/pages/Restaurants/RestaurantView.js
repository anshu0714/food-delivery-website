const RestaurantView = () => {
  return (
    <div className="res-view">
      <h2 className="res-view-name">Name of the Restaurant</h2>
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
