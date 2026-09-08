import AdminLayout from "../../components/layout/AdminLayout";

import AttendanceStats from "../../components/attendance/AttendanceStats";

import CheckInOut from "../../components/attendance/CheckInOut";

import AttendanceTable from "../../components/attendance/AttendanceTable";

import AttendanceHistory from "../../components/attendance/AttendanceHistory";

function Attendance() {
  return (
    <AdminLayout>

      <div className="attendance-container">

        <div className="attendance-header">

          <div>

            <h1 className="dashboard-title">
              Attendance Management
            </h1>

            <p className="dashboard-subtitle">
              Track employee attendance
            </p>

          </div>

        </div>

        <AttendanceStats />

        <div className="attendance-sections">

          <CheckInOut />

          <AttendanceHistory />

        </div>

        <div className="attendance-sections">

          <AttendanceTable />

        </div>

      </div>

    </AdminLayout>
  );
}

export default Attendance;