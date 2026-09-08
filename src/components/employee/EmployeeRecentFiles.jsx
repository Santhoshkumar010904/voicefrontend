function EmployeeRecentFiles() {

  const recent = [
    "Dashboard_UI.fig",
    "Attendance_Report.pdf",
    "Task_Details.docx",
    "Employee_Analytics.xlsx",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Recent Files
      </h2>

      <div className="employee-recent-files">

        {
          recent.map((file, index) => (
            <div
              className="employee-recent-file"
              key={index}
            >
              {file}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeRecentFiles;