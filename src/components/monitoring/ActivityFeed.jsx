function ActivityFeed() {

  const activities = [
    "Emma updated attendance",
    "John submitted report",
    "Sarah completed UI task",
    "Michael joined meeting",
  ];

  return (
    <div className="monitor-widget">

      <h2 className="widget-title">
        Activity Feed
      </h2>

      <div className="activity-feed">

        {
          activities.map((activity, index) => (
            <div
              className="feed-item"
              key={index}
            >
              {activity}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default ActivityFeed;