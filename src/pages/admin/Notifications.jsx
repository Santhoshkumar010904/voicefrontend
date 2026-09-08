import AdminLayout from "../../components/layout/AdminLayout";

import NotificationPanel from "../../components/notifications/NotificationPanel";

import NotificationDropdown from "../../components/notifications/NotificationDropdown";

import LiveNotification from "../../components/notifications/LiveNotification";

function Notifications() {
  return (
    <AdminLayout>

      <div className="notifications-container">

        <div className="notifications-header">

          <div>

            <h1 className="dashboard-title">
              Notifications Center
            </h1>

            <p className="dashboard-subtitle">
              Realtime company notifications
            </p>

          </div>

        </div>

        <div className="notifications-sections">

          <NotificationPanel />

          <NotificationDropdown />

        </div>

        <div className="notifications-sections">

          <LiveNotification />

        </div>

      </div>

    </AdminLayout>
  );
}

export default Notifications;