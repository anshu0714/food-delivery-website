const RestaurantCardShimmer = () => {
  return (
    <div className="restaurants-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image shimmer"></div>
            <div className="shimmer-line shimmer short"></div>
            <div className="shimmer-line shimmer"></div>
            <div className="shimmer-line shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default RestaurantCardShimmer;
