function StatsCard({
  title,
  value,
  color,
}) {
  return (
    <div className="stats-card">

      <h3 className="stats-title">
        {title}
      </h3>

      <h1
        className="stats-value"
        style={{ color }}
      >
        {value}
      </h1>

    </div>
  );
}

export default StatsCard;