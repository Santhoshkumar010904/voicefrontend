import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeReportForm from "../../components/employee/EmployeeReportForm";

import EmployeeReportHistory from "../../components/employee/EmployeeReportHistory";

import EmployeeWorkSummary from "../../components/employee/EmployeeWorkSummary";

function MyReports() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              My Reports
            </h1>

            <p className="dashboard-subtitle">
              Submit & manage reports
            </p>

          </div>

        </div>

        <div className="employee-dashboard-sections">

          <EmployeeReportForm />

          <EmployeeWorkSummary />

        </div>

        <EmployeeReportHistory />

      </div>

    </EmployeeLayout>
  );
}

export default MyReports;