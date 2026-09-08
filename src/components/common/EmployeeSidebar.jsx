import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaTasks,
  FaCalendarCheck,
  FaStickyNote,
  FaClipboardList,
  FaComments,
  FaUserShield,
  FaUserCircle,
  FaHistory,
  FaUsers,
  FaBell,
  FaChartLine,
  FaFolderOpen,
  FaCog,
} from "react-icons/fa";

function EmployeeSidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        Employee Panel
      </div>

      <ul className="sidebar-menu">

        <li>
          <NavLink
            to="/employee/dashboard"
            className="sidebar-link"
          >
            <FaHome />
            <span>My Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/tasks"
            className="sidebar-link"
          >
            <FaTasks />
            <span>My Tasks</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/attendance"
            className="sidebar-link"
          >
            <FaCalendarCheck />
            <span>Attendance</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/notes"
            className="sidebar-link"
          >
            <FaStickyNote />
            <span>Notes</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/reports"
            className="sidebar-link"
          >
            <FaClipboardList />
            <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/messages"
            className="sidebar-link"
          >
            <FaComments />
            <span>Messages</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/leave"
            className="sidebar-link"
          >
            <FaUserShield />
            <span>Leave Requests</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/profile"
            className="sidebar-link"
          >
            <FaUserCircle />
            <span>Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/activity-history"
            className="sidebar-link"
          >
            <FaHistory />
            <span>Activity History</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/team-space"
            className="sidebar-link"
          >
            <FaUsers />
            <span>Team Space</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/notifications"
            className="sidebar-link"
          >
            <FaBell />
            <span>Notifications</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/performance"
            className="sidebar-link"
          >
            <FaChartLine />
            <span>Performance</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/files"
            className="sidebar-link"
          >
            <FaFolderOpen />
            <span>Files</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employee/settings"
            className="sidebar-link"
          >
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default EmployeeSidebar;