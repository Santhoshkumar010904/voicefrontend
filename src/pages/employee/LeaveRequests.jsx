import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeLeaveForm from "../../components/employee/EmployeeLeaveForm";

import EmployeeLeaveHistory from "../../components/employee/EmployeeLeaveHistory";

import EmployeeLeaveStats from "../../components/employee/EmployeeLeaveStats";

function LeaveRequests() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              Leave Requests
            </h1>

            <p className="dashboard-subtitle">
              Manage leave applications
            </p>

          </div>

        </div>

        <div className="employee-dashboard-sections">

          <EmployeeLeaveForm />

          <EmployeeLeaveStats />

        </div>

        <EmployeeLeaveHistory />

      </div>

    </EmployeeLayout>
  );
}

export default LeaveRequests;