function EmployeeLoginHistory() {

  const logins = [
    "Logged in at 9:00 AM",
    "Logged out at 6:00 PM",
    "Remote login yesterday",
    "Password updated successfully",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Login History
      </h2>

      <div className="employee-login-list">

        {
          logins.map((login, index) => (
            <div
              className="employee-login-item"
              key={index}
            >
              {login}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeLoginHistory;