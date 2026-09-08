function NotificationSettings() {
  return (
    <div className="settings-widget">

      <h2 className="widget-title">
        Notification Settings
      </h2>

      <div className="settings-options">

        <div className="setting-item">
          <span>Email Notifications</span>

          <input type="checkbox" defaultChecked />
        </div>

        <div className="setting-item">
          <span>Push Notifications</span>

          <input type="checkbox" />
        </div>

      </div>

    </div>
  );
}

export default NotificationSettings;