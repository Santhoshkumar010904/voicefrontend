import AdminLayout from "../../components/layout/AdminLayout";

import DashboardCards from "../../components/dashboard/DashboardCards";

import LiveActivity from "../../components/dashboard/LiveActivity";

import AnalyticsOverview from "../../components/dashboard/AnalyticsOverview";

import AIInsights from "../../components/dashboard/AIInsights";

import RealtimeCounter from "../../components/dashboard/RealtimeCounter";
import ProductivityChart from "../../components/dashboard/ProductivityChart";

import AttendanceChart from "../../components/dashboard/AttendanceChart";

import DepartmentChart from "../../components/dashboard/DepartmentChart";

function Dashboard() {
  return (
    <AdminLayout>

      <div className="dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              Admin Dashboard
            </h1>

            <p className="dashboard-subtitle">
              Welcome back Admin
            </p>

          </div>

        </div>

        <DashboardCards />

        <div className="dashboard-sections">

          <LiveActivity />

          <AnalyticsOverview />

        </div>

        <div className="dashboard-sections">

          <AIInsights />

          <RealtimeCounter />
<div className="dashboard-sections">

  <ProductivityChart />

  <AttendanceChart />

</div>

<div className="dashboard-sections">

  <DepartmentChart />

</div>

        </div>

      </div>

    </AdminLayout>
  );
}

export default Dashboard;