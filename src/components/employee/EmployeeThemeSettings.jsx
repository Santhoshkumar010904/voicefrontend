function EmployeeThemeSettings() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Theme Settings
      </h2>

      <div className="employee-settings-list">

        <div className="employee-setting-item">
          <span>Dark Mode</span>

          <input type="checkbox" />
        </div>

        <div className="employee-setting-item">
          <span>Glass UI</span>

          <input type="checkbox" defaultChecked />
        </div>

      </div>

    </div>
  );
}

export default EmployeeThemeSettings;