function EmployeeWorkSummary() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Work Summary
      </h2>

      <div className="employee-work-summary">

        <div className="employee-summary-card">
          <span>Tasks Completed</span>
          <h1>18</h1>
        </div>

        <div className="employee-summary-card">
          <span>Reports Submitted</span>
          <h1>12</h1>
        </div>

        <div className="employee-summary-card">
          <span>Performance</span>
          <h1>91%</h1>
        </div>

      </div>

    </div>
  );
}

export default EmployeeWorkSummary;