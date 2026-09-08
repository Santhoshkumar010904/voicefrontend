import LeaveStatus from "./LeaveStatus";

function LeaveAnalytics() {
  return (
    <div className="leave-analytics-grid">

      <LeaveStatus
        title="Pending Requests"
        value="14"
      />

      <LeaveStatus
        title="Approved Leaves"
        value="38"
      />

      <LeaveStatus
        title="Rejected Leaves"
        value="4"
      />

      <LeaveStatus
        title="WFH Requests"
        value="9"
      />

    </div>
  );
}

export default LeaveAnalytics;