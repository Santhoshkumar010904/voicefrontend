function NotificationDropdown() {
  return (
    <div className="notification-widget">

      <h2 className="widget-title">
        Notification Summary
      </h2>

      <div className="notification-summary">

        <div className="summary-card">
          <span>Unread</span>
          <h1>12</h1>
        </div>

        <div className="summary-card">
          <span>Read</span>
          <h1>84</h1>
        </div>

      </div>

    </div>
  );
}

export default NotificationDropdown;