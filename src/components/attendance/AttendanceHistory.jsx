function AttendanceHistory() {

  const history = [
    "John checked in at 9:00 AM",
    "Sarah started remote work",
    "Emma marked absent",
    "David checked out at 6:15 PM",
  ];

  return (
    <div className="attendance-widget">

      <h2 className="widget-title">
        Attendance History
      </h2>

      <div className="attendance-history-list">

        {
          history.map((item, index) => (
            <div
              className="history-item"
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

export default AttendanceHistory;