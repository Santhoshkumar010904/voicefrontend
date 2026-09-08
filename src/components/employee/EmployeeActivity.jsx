function EmployeeActivity() {

  const activities = [
    "Checked in at 9:00 AM",
    "Completed dashboard task",
    "Uploaded attendance report",
    "Joined team meeting",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Recent Activity
      </h2>

      <div className="employee-activity-list">

        {
          activities.map((activity, index) => (
            <div
              className="employee-activity-item"
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

export default EmployeeActivity;