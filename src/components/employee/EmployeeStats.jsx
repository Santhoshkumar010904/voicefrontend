function EmployeeStats() {
  return (
    <div className="employee-stats-grid">

      <div className="employee-stat-card">
        <span>Assigned Tasks</span>
        <h1>12</h1>
      </div>

      <div className="employee-stat-card">
        <span>Completed Tasks</span>
        <h1>8</h1>
      </div>

      <div className="employee-stat-card">
        <span>Attendance</span>
        <h1>96%</h1>
      </div>

      <div className="employee-stat-card">
        <span>Performance</span>
        <h1>89%</h1>
      </div>

    </div>
  );
}

export default EmployeeStats;