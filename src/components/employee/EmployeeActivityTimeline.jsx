function EmployeeActivityTimeline() {

  const activities = [
    "Completed dashboard task",
    "Checked in at 9:00 AM",
    "Uploaded project report",
    "Updated attendance status",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Activity Timeline
      </h2>

      <div className="employee-activity-timeline">

        {
          activities.map((activity, index) => (
            <div
              className="employee-timeline-item"
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

export default EmployeeActivityTimeline;