function ReportList() {

  const reports = [
    "UI Development Weekly Report",
    "Employee Productivity Analysis",
    "Monthly Attendance Report",
    "Task Completion Report",
  ];

  return (
    <div className="report-widget">

      <h2 className="widget-title">
        Reports History
      </h2>

      <div className="report-list">

        {
          reports.map((report, index) => (
            <div
              className="report-item"
              key={index}
            >
              {report}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default ReportList;