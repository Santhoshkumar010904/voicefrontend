function EmployeeProductivityLogs() {

  const logs = [
    "Productivity reached 92%",
    "Completed 8 tasks this week",
    "Improved attendance performance",
    "Maintained daily work target",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Productivity Logs
      </h2>

      <div className="employee-productivity-list">

        {
          logs.map((log, index) => (
            <div
              className="employee-productivity-item"
              key={index}
            >
              {log}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeProductivityLogs;