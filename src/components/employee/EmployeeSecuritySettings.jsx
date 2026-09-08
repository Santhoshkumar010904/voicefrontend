function EmployeeSecuritySettings() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Security Settings
      </h2>

      <div className="employee-security-list">

        <div className="employee-security-item">
          Two-Factor Authentication
        </div>

        <div className="employee-security-item">
          Password Protection
        </div>

        <div className="employee-security-item">
          Login Activity Monitoring
        </div>

      </div>

    </div>
  );
}

export default EmployeeSecuritySettings;