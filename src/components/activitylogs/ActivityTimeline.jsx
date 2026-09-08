import ActivityLogCard from "./ActivityLogCard";

function ActivityTimeline() {

  const logs = [
    {
      title: "John logged into dashboard",
      time: "2 mins ago",
      type: "Login",
    },

    {
      title: "Sarah completed attendance",
      time: "12 mins ago",
      type: "Attendance",
    },

    {
      title: "Emma updated task board",
      time: "25 mins ago",
      type: "Task",
    },

    {
      title: "David exported analytics report",
      time: "40 mins ago",
      type: "Report",
    },
  ];

  return (
    <div className="activity-widget">

      <h2 className="widget-title">
        Realtime Activity Timeline
      </h2>

      <div className="activity-log-list">

        {
          logs.map((log, index) => (
            <ActivityLogCard
              key={index}
              title={log.title}
              time={log.time}
              type={log.type}
            />
          ))
        }

      </div>

    </div>
  );
}

export default ActivityTimeline;