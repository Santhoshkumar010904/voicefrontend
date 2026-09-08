function EmployeeChatWindow() {
  return (
    <div className="employee-chat-window">

      <div className="employee-chat-header">
        Development Team
      </div>

      <div className="employee-chat-messages">

        <div className="employee-message received">
          Hello team 👋
        </div>

        <div className="employee-message sent">
          Dashboard UI completed
        </div>

        <div className="employee-message received">
          Great work 🚀
        </div>

      </div>

      <div className="employee-chat-input">

        <input
          type="text"
          placeholder="Type message..."
        />

        <button>
          Send
        </button>

      </div>

    </div>
  );
}

export default EmployeeChatWindow;