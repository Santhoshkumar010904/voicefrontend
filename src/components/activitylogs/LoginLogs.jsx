function LoginLogs() {

  const logins = [
    "John logged in at 9:00 AM",
    "Sarah logged in at 9:15 AM",
    "Emma logged in at 9:20 AM",
    "David logged out at 6:00 PM",
  ];

  return (
    <div className="activity-widget">

      <h2 className="widget-title">
        Login Logs
      </h2>

      <div className="activity-simple-list">

        {
          logins.map((log, index) => (
            <div
              className="activity-simple-item"
              key={index}
            >
              {log}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default LoginLogs;