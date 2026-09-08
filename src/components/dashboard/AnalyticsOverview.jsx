function AnalyticsOverview() {
  return (
    <div className="dashboard-widget">

      <h2 className="widget-title">
        Analytics Overview
      </h2>

      <div className="analytics-grid">

        <div className="analytics-card">
          <h3>Departments</h3>
          <h1>12</h1>
        </div>

        <div className="analytics-card">
          <h3>Projects</h3>
          <h1>48</h1>
        </div>

        <div className="analytics-card">
          <h3>Meetings</h3>
          <h1>18</h1>
        </div>

        <div className="analytics-card">
          <h3>Pending Tasks</h3>
          <h1>27</h1>
        </div>

      </div>

    </div>
  );
}

export default AnalyticsOverview;