import AdminLayout from "../../components/layout/AdminLayout";

import LeaveAnalytics from "../../components/leave/LeaveAnalytics";

import LeaveRequestForm from "../../components/leave/LeaveRequestForm";

import LeaveRequestsList from "../../components/leave/LeaveRequestsList";

import LeaveApproval from "../../components/leave/LeaveApproval";

function LeaveManagement() {
  return (
    <AdminLayout>

      <div className="leave-container">

        <div className="leave-header">

          <div>

            <h1 className="dashboard-title">
              Leave Management
            </h1>

            <p className="dashboard-subtitle">
              Manage employee leave requests
            </p>

          </div>

        </div>

        <LeaveAnalytics />

        <div className="leave-sections">

          <LeaveRequestForm />

          <LeaveRequestsList />

        </div>

        <div className="leave-sections">

          <LeaveApproval />

        </div>

      </div>

    </AdminLayout>
  );
}

export default LeaveManagement;