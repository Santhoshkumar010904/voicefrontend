function OnlineUsers() {

  const users = [
    "John Doe",
    "Sarah Smith",
    "Emma Wilson",
    "David Lee",
  ];

  return (
    <div className="online-users-widget">

      <h2 className="widget-title">
        Online Users
      </h2>

      <div className="online-users-list">

        {
          users.map((user, index) => (
            <div
              className="online-user-item"
              key={index}
            >

              <div className="online-dot"></div>

              <span>{user}</span>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default OnlineUsers;