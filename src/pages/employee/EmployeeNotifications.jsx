import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeNotificationList from "../../components/employee/EmployeeNotificationList";

import EmployeeNotificationStats from "../../components/employee/EmployeeNotificationStats";

import EmployeeAlertPanel from "../../components/employee/EmployeeAlertPanel";

function EmployeeNotifications() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              Notifications
            </h1>

            <p className="dashboard-subtitle">
              Employee notification center
            </p>

          </div>

        </div>

        <div className="employee-dashboard-sections">

          <EmployeeNotificationList />

          <EmployeeNotificationStats />

        </div>

        <EmployeeAlertPanel />

      </div>

    </EmployeeLayout>
  );
}

export default EmployeeNotifications;