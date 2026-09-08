function MessageBubble({
  message,
  sender,
  own,
}) {
  return (
    <div
      className={
        own
          ? "message-bubble own-message"
          : "message-bubble"
      }
    >

      <span className="message-sender">
        {sender}
      </span>

      <p className="message-text">
        {message}
      </p>

    </div>
  );
}

export default MessageBubble;