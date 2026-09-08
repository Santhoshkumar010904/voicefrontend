function SecuritySettings() {
  return (
    <div className="settings-widget">

      <h2 className="widget-title">
        Security Settings
      </h2>

      <div className="security-list">

        <div className="security-item">
          Two-Factor Authentication
        </div>

        <div className="security-item">
          Login Session Control
        </div>

        <div className="security-item">
          Password Protection
        </div>

      </div>

    </div>
  );
}

export default SecuritySettings;