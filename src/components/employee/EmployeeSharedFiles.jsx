function EmployeeSharedFiles() {

  const files = [
    "Project Proposal.pdf",
    "UI Design.fig",
    "Analytics Report.xlsx",
    "Meeting Notes.docx",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Shared Files
      </h2>

      <div className="employee-files-list">

        {
          files.map((file, index) => (
            <div
              className="employee-file-item"
              key={index}
            >
              📄 {file}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeSharedFiles;