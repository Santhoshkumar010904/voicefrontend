function EmployeeOnlineUsers() {

  const users = [
    "John",
    "Sarah",
    "Emma",
    "David",
  ];

  return (
    <div className="employee-online-users">

      <h2 className="widget-title">
        Online Users
      </h2>

      <div className="employee-users-list">

        {
          users.map((user, index) => (
            <div
              className="employee-user-item"
              key={index}
            >
              <span className="online-dot"></span>

              {user}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeOnlineUsers;