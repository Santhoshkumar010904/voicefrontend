import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeActivityTimeline from "../../components/employee/EmployeeActivityTimeline";

import EmployeeProductivityLogs from "../../components/employee/EmployeeProductivityLogs";

import EmployeeLoginHistory from "../../components/employee/EmployeeLoginHistory";

function ActivityHistory() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              Activity History
            </h1>

            <p className="dashboard-subtitle">
              Employee operation logs
            </p>

          </div>

        </div>

        <div className="employee-dashboard-sections">

          <EmployeeActivityTimeline />

          <EmployeeProductivityLogs />

        </div>

        <EmployeeLoginHistory />

      </div>

    </EmployeeLayout>
  );
}

export default ActivityHistory;