import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeSharedFiles from "../../components/employee/EmployeeSharedFiles";

import EmployeeRecentFiles from "../../components/employee/EmployeeRecentFiles";

import EmployeeFileUpload from "../../components/employee/EmployeeFileUpload";

function EmployeeFiles() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              Shared Files
            </h1>

            <p className="dashboard-subtitle">
              Team documents & uploads
            </p>

          </div>

        </div>

        <div className="employee-dashboard-sections">

          <EmployeeFileUpload />

          <EmployeeRecentFiles />

        </div>

        <EmployeeSharedFiles />

      </div>

    </EmployeeLayout>
  );
}

export default EmployeeFiles;