function AttendanceLogs() {

  const attendance = [
    "John checked in",
    "Sarah started remote work",
    "Emma marked absent",
    "David checked out",
  ];

  return (
    <div className="activity-widget">

      <h2 className="widget-title">
        Attendance Logs
      </h2>

      <div className="activity-simple-list">

        {
          attendance.map((item, index) => (
            <div
              className="activity-simple-item"
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

export default AttendanceLogs;