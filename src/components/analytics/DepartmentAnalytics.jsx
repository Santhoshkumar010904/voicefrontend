function DepartmentAnalytics() {
  return (
    <div className="analytics-widget">

      <h2 className="widget-title">
        Department Analytics
      </h2>

      <div className="department-list">

        <div className="department-item">
          <span>Development</span>
          <strong>94%</strong>
        </div>

        <div className="department-item">
          <span>Marketing</span>
          <strong>82%</strong>
        </div>

        <div className="department-item">
          <span>HR</span>
          <strong>76%</strong>
        </div>

        <div className="department-item">
          <span>Support</span>
          <strong>88%</strong>
        </div>

      </div>

    </div>
  );
}

export default DepartmentAnalytics;