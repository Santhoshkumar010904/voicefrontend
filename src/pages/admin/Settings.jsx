import AdminLayout from "../../components/layout/AdminLayout";

import ThemeSettings from "../../components/settings/ThemeSettings";

import NotificationSettings from "../../components/settings/NotificationSettings";

import SecuritySettings from "../../components/settings/SecuritySettings";

import ProfileSettings from "../../components/settings/ProfileSettings";

import DashboardSettings from "../../components/settings/DashboardSettings";

function Settings() {
  return (
    <AdminLayout>

      <div className="settings-container">

        <div className="settings-header">

          <div>

            <h1 className="dashboard-title">
              System Settings
            </h1>

            <p className="dashboard-subtitle">
              Manage application preferences
            </p>

          </div>

        </div>

        <div className="settings-grid">

          <ThemeSettings />

          <NotificationSettings />

        </div>

        <div className="settings-grid">

          <SecuritySettings />

          <ProfileSettings />

        </div>

        <div className="settings-grid">

          <DashboardSettings />

        </div>

      </div>

    </AdminLayout>
  );
}

export default Settings;