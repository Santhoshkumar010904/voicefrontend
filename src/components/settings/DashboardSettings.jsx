function DashboardSettings() {
  return (
    <div className="settings-widget">

      <h2 className="widget-title">
        Dashboard Preferences
      </h2>

      <div className="settings-options">

        <div className="setting-item">
          <span>Realtime Analytics</span>

          <input type="checkbox" defaultChecked />
        </div>

        <div className="setting-item">
          <span>Show Productivity Charts</span>

          <input type="checkbox" defaultChecked />
        </div>

      </div>

    </div>
  );
}

export default DashboardSettings;