import NotificationItem from "./NotificationItem";

function NotificationPanel() {

  const notifications = [
    {
      title: "New employee registered",
      time: "2 min ago",
    },

    {
      title: "Task deadline updated",
      time: "10 min ago",
    },

    {
      title: "Attendance report submitted",
      time: "20 min ago",
    },

    {
      title: "System analytics updated",
      time: "45 min ago",
    },
  ];

  return (
    <div className="notification-widget">

      <h2 className="widget-title">
        Notifications
      </h2>

      <div className="notification-list">

        {
          notifications.map((notification, index) => (
            <NotificationItem
              key={index}
              title={notification.title}
              time={notification.time}
            />
          ))
        }

      </div>

    </div>
  );
}

export default NotificationPanel;