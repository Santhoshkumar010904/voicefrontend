import {
  FaSearch,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <div className="navbar">

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search..."
        />

      </div>

      <div className="navbar-right">

        <ThemeToggle />

        <div className="notification-icon">

          <FaBell className="icon" />

          <span className="notification-count">
            3
          </span>

        </div>

        <FaUserCircle className="profile-icon" />

      </div>

    </div>
  );
}

export default Navbar;