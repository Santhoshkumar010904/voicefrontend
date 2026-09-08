import AdminLayout from "../../components/layout/AdminLayout";

import LiveMonitoring from "../../components/monitoring/LiveMonitoring";

import OnlineEmployees from "../../components/monitoring/OnlineEmployees";

import ActivityFeed from "../../components/monitoring/ActivityFeed";

import WorkStatusBoard from "../../components/monitoring/WorkStatusBoard";

import MonitoringStats from "../../components/monitoring/MonitoringStats";

function Monitoring() {
  return (
    <AdminLayout>

      <div className="monitoring-container">

        <div className="monitoring-header">

          <div>

            <h1 className="dashboard-title">
              Monitoring Center
            </h1>

            <p className="dashboard-subtitle">
              Realtime workforce monitoring
            </p>

          </div>

        </div>

        <div className="monitoring-grid">

          <LiveMonitoring />

          <OnlineEmployees />

        </div>

        <div className="monitoring-grid">

          <ActivityFeed />

          <WorkStatusBoard />

        </div>

        <div className="monitoring-grid">

          <MonitoringStats />

        </div>

      </div>

    </AdminLayout>
  );
}

export default Monitoring;