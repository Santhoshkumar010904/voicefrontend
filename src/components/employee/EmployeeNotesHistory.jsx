function EmployeeNotesHistory() {

  const notes = [
    "Completed analytics page",
    "Meeting with design team",
    "Updated employee dashboard",
    "Fixed sidebar responsiveness",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Notes History
      </h2>

      <div className="employee-notes-history-list">

        {
          notes.map((note, index) => (
            <div
              className="employee-notes-item"
              key={index}
            >
              {note}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeNotesHistory;