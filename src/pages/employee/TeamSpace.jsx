import EmployeeLayout from "../../components/layout/EmployeeLayout";

import TeamMembersCard from "../../components/employee/TeamMembersCard";

import TeamTasksCard from "../../components/employee/TeamTasksCard";

import SharedNotesCard from "../../components/employee/SharedNotesCard";

function TeamSpace() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              Team Space
            </h1>

            <p className="dashboard-subtitle">
              Team collaboration workspace
            </p>

          </div>

        </div>

        <div className="employee-dashboard-sections">

          <TeamMembersCard />

          <TeamTasksCard />

        </div>

        <SharedNotesCard />

      </div>

    </EmployeeLayout>
  );
}

export default TeamSpace;