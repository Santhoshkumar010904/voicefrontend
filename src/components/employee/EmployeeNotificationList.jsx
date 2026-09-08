function EmployeeNotificationList() {

  const notifications = [
    "New task assigned",
    "Leave request approved",
    "Team meeting at 4 PM",
    "Attendance marked successfully",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Notifications
      </h2>

      <div className="employee-notification-list">

        {
          notifications.map((item, index) => (
            <div
              className="employee-notification-item"
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

export default EmployeeNotificationList;