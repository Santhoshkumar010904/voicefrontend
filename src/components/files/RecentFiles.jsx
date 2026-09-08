function RecentFiles() {

  const recentFiles = [
    "Dashboard_UI.fig",
    "EmployeeData.xlsx",
    "MeetingNotes.docx",
    "MonthlyAnalytics.pdf",
  ];

  return (
    <div className="recent-files-widget">

      <h2 className="widget-title">
        Recent Files
      </h2>

      <div className="recent-files-list">

        {
          recentFiles.map((file, index) => (
            <div
              className="recent-file-item"
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

export default RecentFiles;