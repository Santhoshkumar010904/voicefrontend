import { Link } from "react-router-dom";

function RoleSelector() {
  return (
    <div className="role-selector">

      <h1 className="auth-main-title">
        Workspace Portal
      </h1>

      <p className="auth-subtitle">
        Select login type
      </p>

      <div className="role-buttons">

        <Link
          to="/admin-login"
          className="role-btn"
        >
          Admin Login
        </Link>

        <Link
          to="/employee-login"
          className="role-btn"
        >
          Employee Login
        </Link>

      </div>

    </div>
  );
}

export default RoleSelector;