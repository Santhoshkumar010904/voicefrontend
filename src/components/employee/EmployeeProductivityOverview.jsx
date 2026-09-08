function EmployeeProductivityOverview() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Productivity Overview
      </h2>

      <div className="employee-productivity-overview">

        <div className="employee-productivity-box">
          <span>Daily Target</span>
          <h1>85%</h1>
        </div>

        <div className="employee-productivity-box">
          <span>Weekly Target</span>
          <h1>90%</h1>
        </div>

        <div className="employee-productivity-box">
          <span>Monthly Target</span>
          <h1>92%</h1>
        </div>

      </div>

    </div>
  );
}

export default EmployeeProductivityOverview;