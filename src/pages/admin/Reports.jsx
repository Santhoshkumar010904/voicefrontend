import AdminLayout from "../../components/layout/AdminLayout";

import ReportForm from "../../components/reports/ReportForm";

import ReportList from "../../components/reports/ReportList";

import DailyReport from "../../components/reports/DailyReport";

import WeeklyReport from "../../components/reports/WeeklyReport";

import ProductivityReport from "../../components/reports/ProductivityReport";

import ExportReport from "../../components/reports/ExportReport";

function Reports() {
  return (
    <AdminLayout>

      <div className="reports-container">

        <div className="reports-header">

          <div>

            <h1 className="dashboard-title">
              Reports Management
            </h1>

            <p className="dashboard-subtitle">
              Company reporting system
            </p>

          </div>

        </div>

        <div className="reports-stats-grid">

          <DailyReport />

          <WeeklyReport />

          <ProductivityReport />

        </div>

        <div className="reports-sections">

          <ReportForm />

          <ReportList />

        </div>

        <div className="reports-sections">

          <ExportReport />

        </div>

      </div>

    </AdminLayout>
  );
}

export default Reports;