import MessageBubble from "./MessageBubble";

function ChatWindow() {

  const messages = [
    {
      sender: "John",
      message: "Completed dashboard UI",
      own: false,
    },

    {
      sender: "You",
      message: "Great work!",
      own: true,
    },

    {
      sender: "Sarah",
      message: "Analytics page updated",
      own: false,
    },
  ];

  return (
    <div className="chat-window">

      <div className="chat-messages">

        {
          messages.map((msg, index) => (
            <MessageBubble
              key={index}
              sender={msg.sender}
              message={msg.message}
              own={msg.own}
            />
          ))
        }

      </div>

      <div className="chat-input-box">

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

export default ChatWindow;