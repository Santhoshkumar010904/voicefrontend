function EmployeeReportHistory() {

  const reports = [
    "Weekly UI Progress Report",
    "Attendance Analytics Summary",
    "Team Sprint Completion Report",
    "Monthly Productivity Report",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Report History
      </h2>

      <div className="employee-report-history-list">

        {
          reports.map((report, index) => (
            <div
              className="employee-report-item"
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

export default EmployeeReportHistory;