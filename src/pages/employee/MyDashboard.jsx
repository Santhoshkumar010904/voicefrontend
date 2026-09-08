import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeStats from "../../components/employee/EmployeeStats";

import EmployeeTaskProgress from "../../components/employee/EmployeeTaskProgress";

import EmployeeActivity from "../../components/employee/EmployeeActivity";

import EmployeeQuickActions from "../../components/employee/EmployeeQuickActions";

import EmployeePerformanceCard from "../../components/employee/EmployeePerformanceCard";

function MyDashboard() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              My Dashboard
            </h1>

            <p className="dashboard-subtitle">
              Welcome back employee
            </p>

          </div>

        </div>

        <EmployeeStats />

        <div className="employee-dashboard-sections">

          <EmployeeTaskProgress />

          <EmployeePerformanceCard />

        </div>

        <div className="employee-dashboard-sections">

          <EmployeeActivity />

          <EmployeeQuickActions />

        </div>

      </div>

    </EmployeeLayout>
  );
}

export default MyDashboard;