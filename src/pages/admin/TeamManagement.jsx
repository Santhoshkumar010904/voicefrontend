import AdminLayout from "../../components/layout/AdminLayout";

import TeamPerformance from "../../components/team/TeamPerformance";

import TeamMembers from "../../components/team/TeamMembers";

import TeamActivity from "../../components/team/TeamActivity";

import TeamTasks from "../../components/team/TeamTasks";

function TeamManagement() {
  return (
    <AdminLayout>

      <div className="team-container">

        <div className="team-header">

          <div>

            <h1 className="dashboard-title">
              Team Management
            </h1>

            <p className="dashboard-subtitle">
              Manage company teams & collaboration
            </p>

          </div>

        </div>

        <TeamPerformance />

        <div className="team-sections">

          <TeamMembers />

          <TeamActivity />

        </div>

        <div className="team-sections">

          <TeamTasks />

        </div>

      </div>

    </AdminLayout>
  );
}

export default TeamManagement;