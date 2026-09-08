function LiveNotification() {

  const liveNotifications = [
    "Emma completed attendance",
    "John uploaded project files",
    "Meeting starts in 10 minutes",
    "System backup completed",
  ];

  return (
    <div className="notification-widget">

      <h2 className="widget-title">
        Live Notifications
      </h2>

      <div className="live-notification-list">

        {
          liveNotifications.map((item, index) => (
            <div
              className="live-notification-item"
              key={index}
            >
              {item}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default LiveNotification;