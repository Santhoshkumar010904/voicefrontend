import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUsers,
  FaTasks,
  FaDesktop,
  FaChartBar,
  FaCalendarCheck,
  FaClipboardList,
  FaBell,
  FaCog,
  FaUserShield,
  FaUserFriends,
  FaComments,
  FaFolderOpen,
  FaHistory,
  FaCalendarAlt,
} from "react-icons/fa";

function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin/dashboard",
    },

    {
      name: "Employees",
      icon: <FaUsers />,
      path: "/admin/employees",
    },

    {
      name: "Tasks",
      icon: <FaTasks />,
      path: "/admin/tasks",
    },

    {
      name: "Monitoring",
      icon: <FaDesktop />,
      path: "/admin/monitoring",
    },

    {
      name: "Analytics",
      icon: <FaChartBar />,
      path: "/admin/analytics",
    },

    {
      name: "Attendance",
      icon: <FaCalendarCheck />,
      path: "/admin/attendance",
    },

    {
      name: "Reports",
      icon: <FaClipboardList />,
      path: "/admin/reports",
    },

    {
      name: "Notifications",
      icon: <FaBell />,
      path: "/admin/notifications",
    },

    {
      name: "Leave Management",
      icon: <FaUserShield />,
      path: "/admin/leave-management",
    },

    {
      name: "Team Management",
      icon: <FaUserFriends />,
      path: "/admin/team-management",
    },

    {
      name: "Messages",
      icon: <FaComments />,
      path: "/admin/messages",
    },

    {
      name: "Files & Documents",
      icon: <FaFolderOpen />,
      path: "/admin/files",
    },

    {
      name: "Activity Logs",
      icon: <FaHistory />,
      path: "/admin/activity-logs",
    },

    {
      name: "Calendar & Events",
      icon: <FaCalendarAlt />,
      path: "/admin/calendar",
    },

    {
      name: "Settings",
      icon: <FaCog />,
      path: "/admin/settings",
    },
  ];

  return (
    <>
      {/* Burger Icon */}
      <div
        className="burger-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>

        <div className="sidebar-logo">
          Workspace
        </div>

        <ul className="sidebar-menu">

          {menuItems.map((item, index) => (

            <li key={index}>

              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "sidebar-link active-sidebar-link"
                    : "sidebar-link"
                }
              >

                <span className="sidebar-icon">
                  {item.icon}
                </span>

                <span className="sidebar-text">
                  {item.name}
                </span>

              </NavLink>

            </li>

          ))}

        </ul>

      </div>
    </>
  );
}

export default Sidebar;