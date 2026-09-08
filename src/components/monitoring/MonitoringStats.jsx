function MonitoringStats() {
  return (
    <div className="monitor-widget">

      <h2 className="widget-title">
        Productivity Stats
      </h2>

      <div className="stats-list">

        <div className="stats-item">
          <span>Average Productivity</span>
          <strong>78%</strong>
        </div>

        <div className="stats-item">
          <span>Task Completion</span>
          <strong>91%</strong>
        </div>

        <div className="stats-item">
          <span>Attendance Rate</span>
          <strong>96%</strong>
        </div>

      </div>

    </div>
  );
}

export default MonitoringStats;