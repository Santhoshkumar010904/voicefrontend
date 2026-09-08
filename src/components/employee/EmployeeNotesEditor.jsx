function EmployeeNotesEditor() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Notes Editor
      </h2>

      <textarea
        className="employee-notes-textarea"
        placeholder="Write your daily work notes..."
      ></textarea>

    </div>
  );
}

export default EmployeeNotesEditor;