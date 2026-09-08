function ChatSidebar() {

  const chats = [
    "Development Team",
    "Marketing Team",
    "HR Department",
    "Project Managers",
  ];

  return (
    <div className="chat-sidebar">

      <h2 className="widget-title">
        Teams
      </h2>

      <div className="chat-list">

        {
          chats.map((chat, index) => (
            <div
              className="chat-item"
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

export default ChatSidebar;