function ActivityLogCard({
  title,
  time,
  type,
}) {
  return (
    <div className="activity-log-card">

      <div>

        <h3 className="activity-log-title">
          {title}
        </h3>

        <p className="activity-log-time">
          {time}
        </p>

      </div>

      <span className="activity-type">
        {type}
      </span>

    </div>
  );
}

export default ActivityLogCard;