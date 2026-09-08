function LiveMonitoring() {
  return (
    <div className="monitor-widget">

      <h2 className="widget-title">
        Live Monitoring
      </h2>

      <div className="monitor-status-grid">

        <div className="monitor-status-card">
          <span>Online Employees</span>
          <h1>86</h1>
        </div>

        <div className="monitor-status-card">
          <span>Working Remotely</span>
          <h1>14</h1>
        </div>

        <div className="monitor-status-card">
          <span>Idle Employees</span>
          <h1>7</h1>
        </div>

      </div>

    </div>
  );
}

export default LiveMonitoring;