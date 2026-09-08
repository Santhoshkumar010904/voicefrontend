function EmployeeAlertPanel() {

  const alerts = [
    "Project deadline tomorrow",
    "Submit weekly report",
    "Manager requested update",
    "Meeting starts in 30 mins",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Alerts Panel
      </h2>

      <div className="employee-alert-list">

        {
          alerts.map((alert, index) => (
            <div
              className="employee-alert-item"
              key={index}
            >
              {alert}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeAlertPanel;