import AdminLayout from "../../components/layout/AdminLayout";

import ActivityTimeline from "../../components/activitylogs/ActivityTimeline";

import LoginLogs from "../../components/activitylogs/LoginLogs";

import TaskLogs from "../../components/activitylogs/TaskLogs";

import AttendanceLogs from "../../components/activitylogs/AttendanceLogs";

function ActivityLogs() {
  return (
    <AdminLayout>

      <div className="activity-container">

        <div className="activity-header">

          <div>

            <h1 className="dashboard-title">
              Activity Logs
            </h1>

            <p className="dashboard-subtitle">
              Company operations history
            </p>

          </div>

        </div>

        <ActivityTimeline />

        <div className="activity-sections">

          <LoginLogs />

          <TaskLogs />

        </div>

        <div className="activity-sections">

          <AttendanceLogs />

        </div>

      </div>

    </AdminLayout>
  );
}

export default ActivityLogs;