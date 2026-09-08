function EmployeeAttendanceStats() {
  return (
    <div className="employee-attendance-grid">

      <div className="employee-attendance-card">
        <span>Attendance Rate</span>
        <h1>96%</h1>
      </div>

      <div className="employee-attendance-card">
        <span>Present Days</span>
        <h1>24</h1>
      </div>

      <div className="employee-attendance-card">
        <span>Leave Days</span>
        <h1>2</h1>
      </div>

      <div className="employee-attendance-card">
        <span>Work Hours</span>
        <h1>168h</h1>
      </div>

    </div>
  );
}

export default EmployeeAttendanceStats;