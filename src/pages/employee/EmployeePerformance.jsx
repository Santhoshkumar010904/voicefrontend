import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeePerformanceStats from "../../components/employee/EmployeePerformanceStats";

import EmployeeKPI from "../../components/employee/EmployeeKPI";

import EmployeeProductivityOverview from "../../components/employee/EmployeeProductivityOverview";

function EmployeePerformance() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              Performance
            </h1>

            <p className="dashboard-subtitle">
              Employee productivity analytics
            </p>

          </div>

        </div>

        <EmployeePerformanceStats />

        <div className="employee-dashboard-sections">

          <EmployeeKPI />

          <EmployeeProductivityOverview />

        </div>

      </div>

    </EmployeeLayout>
  );
}

export default EmployeePerformance;