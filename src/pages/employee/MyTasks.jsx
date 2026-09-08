import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeTaskStats from "../../components/employee/EmployeeTaskStats";

import EmployeeTaskBoard from "../../components/employee/EmployeeTaskBoard";

function MyTasks() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              My Tasks
            </h1>

            <p className="dashboard-subtitle">
              Manage assigned tasks
            </p>

          </div>

        </div>

        <EmployeeTaskStats />

        <EmployeeTaskBoard />

      </div>

    </EmployeeLayout>
  );
}

export default MyTasks;