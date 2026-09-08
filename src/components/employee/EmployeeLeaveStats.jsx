function EmployeeLeaveStats() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Leave Analytics
      </h2>

      <div className="employee-leave-stats-grid">

        <div className="employee-leave-stat-card">
          <span>Total Leaves</span>
          <h1>12</h1>
        </div>

        <div className="employee-leave-stat-card">
          <span>Approved</span>
          <h1>9</h1>
        </div>

        <div className="employee-leave-stat-card">
          <span>Pending</span>
          <h1>2</h1>
        </div>

      </div>

    </div>
  );
}

export default EmployeeLeaveStats;