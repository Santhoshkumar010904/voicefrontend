function LiveActivity() {

  const activities = [
    "John completed UI Design Task",
    "Sarah checked in",
    "Michael uploaded project files",
    "Emma submitted weekly report",
    "David updated analytics dashboard",
  ];

  return (
    <div className="dashboard-widget">

      <h2 className="widget-title">
        Live Activity
      </h2>

      <div className="activity-list">

        {
          activities.map((activity, index) => (
            <div
              className="activity-item"
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

export default LiveActivity;