import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeNotesEditor from "../../components/employee/EmployeeNotesEditor";

import EmployeeNotesHistory from "../../components/employee/EmployeeNotesHistory";

import EmployeeAutoSave from "../../components/employee/EmployeeAutoSave";

function MyNotes() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              My Notes
            </h1>

            <p className="dashboard-subtitle">
              Manage daily notes & work logs
            </p>

          </div>

        </div>

        <div className="employee-dashboard-sections">

          <EmployeeNotesEditor />

          <EmployeeAutoSave />

        </div>

        <EmployeeNotesHistory />

      </div>

    </EmployeeLayout>
  );
}

export default MyNotes;