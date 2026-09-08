import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeAttendanceStats from "../../components/employee/EmployeeAttendanceStats";

import EmployeeCheckIn from "../../components/employee/EmployeeCheckIn";

import EmployeeAttendanceHistory from "../../components/employee/EmployeeAttendanceHistory";

function MyAttendance() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              My Attendance
            </h1>

            <p className="dashboard-subtitle">
              Track attendance & work hours
            </p>

          </div>

        </div>

        <EmployeeAttendanceStats />

        <div className="employee-dashboard-sections">

          <EmployeeCheckIn />

          <EmployeeAttendanceHistory />

        </div>

      </div>

    </EmployeeLayout>
  );
}

export default MyAttendance;