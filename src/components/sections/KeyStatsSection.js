import keyStats from "../../utils/keyStats";

const KeyStatsSection = () => {
  return (
    <div className="key-stats-container">
      {keyStats.map((stat) => {
        return (
          <div key={stat.id} className="key-stat">
            <h3 className="value">{stat.value}</h3>
            <p className="stat-title">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default KeyStatsSection;
