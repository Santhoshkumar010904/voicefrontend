import { Routes, Route, Navigate } from "react-router-dom";

/* =========================
   PUBLIC PAGES
========================= */
import Landing from "./pages/Landing";
import HomeDashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Compose from "./pages/Compose";

/* =========================
   ADMIN PAGES
========================= */

import Dashboard from "./pages/admin/Dashboard";
import Employees from "./pages/admin/Employees";
import Tasks from "./pages/admin/Tasks";
import Monitoring from "./pages/admin/Monitoring";
import Analytics from "./pages/admin/Analytics";
import Attendance from "./pages/admin/Attendance";
import Reports from "./pages/admin/Reports";
import Notifications from "./pages/admin/Notifications";
import LeaveManagement from "./pages/admin/LeaveManagement";
import TeamManagement from "./pages/admin/TeamManagement";
import Messages from "./pages/admin/Messages";
import Files from "./pages/admin/Files";
import ActivityLogs from "./pages/admin/ActivityLogs";
import Calendar from "./pages/admin/Calendar";
import Settings from "./pages/admin/Settings";

/* =========================
   AUTH PAGES
========================= */

import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ConnectGmail from "./pages/auth/ConnectGmail";

import AdminLoginPage from "./pages/auth/AdminLoginPage";
import EmployeeLoginPage from "./pages/auth/EmployeeLoginPage";

/* =========================
   EMPLOYEE PAGES
========================= */

import MyDashboard from "./pages/employee/MyDashboard";
import MyTasks from "./pages/employee/MyTasks";
import MyAttendance from "./pages/employee/MyAttendance";
import MyNotes from "./pages/employee/MyNotes";
import MyReports from "./pages/employee/MyReports";
import MyMessages from "./pages/employee/MyMessages";
import LeaveRequests from "./pages/employee/LeaveRequests";
import MyProfile from "./pages/employee/MyProfile";
import TeamSpace from "./pages/employee/TeamSpace";
import ActivityHistory from "./pages/employee/ActivityHistory";
import EmployeeNotifications from "./pages/employee/EmployeeNotifications";
import EmployeePerformance from "./pages/employee/EmployeePerformance";
import EmployeeFiles from "./pages/employee/EmployeeFiles";
import EmployeeSettings from "./pages/employee/EmployeeSettings";

function AppRoutes() {
  return (
    <Routes>

      {/* =========================
          DEFAULT ROUTE
      ========================= */}

      <Route path="/" element={<Landing />} />

      <Route path="/dashboard" element={<HomeDashboard />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/compose" element={<Compose />} />

      {/* =========================
          AUTH ROUTES
      ========================= */}

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/connect-gmail" element={<ConnectGmail />} />

      <Route
        path="/admin-login"
        element={<AdminLoginPage />}
      />

      <Route
        path="/employee-login"
        element={<EmployeeLoginPage />}
      />

      {/* =========================
          ADMIN ROUTES
      ========================= */}

      <Route
        path="/admin/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/admin/employees"
        element={<Employees />}
      />

      <Route
        path="/admin/tasks"
        element={<Tasks />}
      />

      <Route
        path="/admin/monitoring"
        element={<Monitoring />}
      />

      <Route
        path="/admin/analytics"
        element={<Analytics />}
      />

      <Route
        path="/admin/attendance"
        element={<Attendance />}
      />

      <Route
        path="/admin/reports"
        element={<Reports />}
      />

      <Route
        path="/admin/notifications"
        element={<Notifications />}
      />

      <Route
        path="/admin/leave-management"
        element={<LeaveManagement />}
      />

      <Route
        path="/admin/team-management"
        element={<TeamManagement />}
      />

      <Route
        path="/admin/messages"
        element={<Messages />}
      />

      <Route
        path="/admin/files"
        element={<Files />}
      />

      <Route
        path="/admin/activity-logs"
        element={<ActivityLogs />}
      />

      <Route
        path="/admin/calendar"
        element={<Calendar />}
      />

      <Route
        path="/admin/settings"
        element={<Settings />}
      />

      {/* =========================
          EMPLOYEE ROUTES
      ========================= */}

      <Route
        path="/employee/dashboard"
        element={<MyDashboard />}
      />

      <Route
        path="/employee/tasks"
        element={<MyTasks />}
      />

      <Route
        path="/employee/attendance"
        element={<MyAttendance />}
      />

      <Route
        path="/employee/notes"
        element={<MyNotes />}
      />

      <Route
        path="/employee/reports"
        element={<MyReports />}
      />

      <Route
        path="/employee/messages"
        element={<MyMessages />}
      />

      <Route
        path="/employee/leave"
        element={<LeaveRequests />}
      />

      <Route
        path="/employee/profile"
        element={<MyProfile />}
      />

      <Route
        path="/employee/team-space"
        element={<TeamSpace />}
      />

      <Route
        path="/employee/activity-history"
        element={<ActivityHistory />}
      />

      <Route
        path="/employee/notifications"
        element={<EmployeeNotifications />}
      />

      <Route
        path="/employee/performance"
        element={<EmployeePerformance />}
      />

      <Route path="/employee/files"element={<EmployeeFiles />}/>
      <Route path="/employee/settings"element={<EmployeeSettings />}/>

    </Routes>
  );
}

export default AppRoutes;