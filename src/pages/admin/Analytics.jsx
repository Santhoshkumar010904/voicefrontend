import AdminLayout from "../../components/layout/AdminLayout";

import AnalyticsCards from "../../components/analytics/AnalyticsCards";

import PerformanceGraph from "../../components/analytics/PerformanceGraph";

import DepartmentAnalytics from "../../components/analytics/DepartmentAnalytics";

import WeeklyReportChart from "../../components/analytics/WeeklyReportChart";

import KPISection from "../../components/analytics/KPISection";

function Analytics() {
  return (
    <AdminLayout>

      <div className="analytics-container">

        <div className="analytics-header">

          <div>

            <h1 className="dashboard-title">
              Analytics Dashboard
            </h1>

            <p className="dashboard-subtitle">
              Company performance insights
            </p>

          </div>

        </div>

        <AnalyticsCards />

        <div className="analytics-sections">

          <PerformanceGraph />

          <DepartmentAnalytics />

        </div>

        <div className="analytics-sections">

          <WeeklyReportChart />

          <KPISection />

        </div>

      </div>

    </AdminLayout>
  );
}

export default Analytics;