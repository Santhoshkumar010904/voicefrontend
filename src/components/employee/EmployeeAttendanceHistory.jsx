function EmployeeAttendanceHistory() {

  const history = [
    "Checked in at 9:00 AM",
    "Checked out at 6:00 PM",
    "Worked remotely yesterday",
    "Leave approved for Friday",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Attendance History
      </h2>

      <div className="employee-history-list">

        {
          history.map((item, index) => (
            <div
              className="employee-history-item"
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

export default EmployeeAttendanceHistory;