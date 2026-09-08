function EmployeeNotificationSettings() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Notification Settings
      </h2>

      <div className="employee-settings-list">

        <div className="employee-setting-item">
          <span>Email Alerts</span>

          <input type="checkbox" defaultChecked />
        </div>

        <div className="employee-setting-item">
          <span>Push Notifications</span>

          <input type="checkbox" />
        </div>

      </div>

    </div>
  );
}

export default EmployeeNotificationSettings;