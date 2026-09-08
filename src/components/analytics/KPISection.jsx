function KPISection() {
  return (
    <div className="analytics-widget">

      <h2 className="widget-title">
        KPI Metrics
      </h2>

      <div className="kpi-grid">

        <div className="kpi-card">
          <span>Growth</span>
          <h1>+18%</h1>
        </div>

        <div className="kpi-card">
          <span>Efficiency</span>
          <h1>91%</h1>
        </div>

        <div className="kpi-card">
          <span>Attendance</span>
          <h1>96%</h1>
        </div>

        <div className="kpi-card">
          <span>Projects</span>
          <h1>148</h1>
        </div>

      </div>

    </div>
  );
}

export default KPISection;