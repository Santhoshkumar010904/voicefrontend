import StatsCard from "./StatsCard";

function DashboardCards() {
  return (
    <div className="dashboard-grid">

      <StatsCard
        title="Total Employees"
        value="120"
        color="#3b82f6"
      />

      <StatsCard
        title="Online Employees"
        value="86"
        color="#10b981"
      />

      <StatsCard
        title="Attendance"
        value="92%"
        color="#f59e0b"
      />

      <StatsCard
        title="Productivity"
        value="78%"
        color="#8b5cf6"
      />

    </div>
  );
}

export default DashboardCards;