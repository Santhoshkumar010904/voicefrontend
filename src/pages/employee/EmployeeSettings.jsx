import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeThemeSettings from "../../components/employee/EmployeeThemeSettings";

import EmployeeNotificationSettings from "../../components/employee/EmployeeNotificationSettings";

import EmployeeSecuritySettings from "../../components/employee/EmployeeSecuritySettings";

function EmployeeSettings() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              Settings
            </h1>

            <p className="dashboard-subtitle">
              Manage account preferences
            </p>

          </div>

        </div>

        <div className="employee-dashboard-sections">

          <EmployeeThemeSettings />

          <EmployeeNotificationSettings />

        </div>

        <EmployeeSecuritySettings />

      </div>

    </EmployeeLayout>
  );
}

export default EmployeeSettings;