function ThemeSettings() {
  return (
    <div className="settings-widget">

      <h2 className="widget-title">
        Theme Settings
      </h2>

      <div className="settings-options">

        <div className="setting-item">
          <span>Dark Mode</span>

          <input type="checkbox" />
        </div>

        <div className="setting-item">
          <span>Glass UI Effects</span>

          <input type="checkbox" defaultChecked />
        </div>

      </div>

    </div>
  );
}

export default ThemeSettings;