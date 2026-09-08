function EmployeeChatSidebar() {

  const chats = [
    "Development Team",
    "UI Designers",
    "HR Department",
    "Project Managers",
  ];

  return (
    <div className="employee-chat-sidebar">

      <h2 className="widget-title">
        Chats
      </h2>

      <div className="employee-chat-list">

        {
          chats.map((chat, index) => (
            <div
              className="employee-chat-item"
              key={index}
            >
              {chat}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeChatSidebar;