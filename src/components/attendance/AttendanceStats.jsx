import AttendanceCard from "./AttendanceCard";

function AttendanceStats() {
  return (
    <div className="attendance-stats-grid">

      <AttendanceCard
        title="Present Today"
        value="86"
      />

      <AttendanceCard
        title="Absent"
        value="12"
      />

      <AttendanceCard
        title="Remote Employees"
        value="14"
      />

      <AttendanceCard
        title="Attendance Rate"
        value="94%"
      />

    </div>
  );
}

export default AttendanceStats;