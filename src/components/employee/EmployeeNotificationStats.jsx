function EmployeeNotificationStats() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Notification Analytics
      </h2>

      <div className="employee-notification-stats">

        <div className="employee-notification-card">
          <span>Total Alerts</span>
          <h1>18</h1>
        </div>

        <div className="employee-notification-card">
          <span>Unread</span>
          <h1>6</h1>
        </div>

        <div className="employee-notification-card">
          <span>Messages</span>
          <h1>12</h1>
        </div>

      </div>

    </div>
  );
}

export default EmployeeNotificationStats;