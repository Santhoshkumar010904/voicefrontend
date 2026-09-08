function NotificationItem({
  title,
  time,
}) {
  return (
    <div className="notification-item-card">

      <div>

        <h3 className="notification-title">
          {title}
        </h3>

        <p className="notification-time">
          {time}
        </p>

      </div>

      <button className="mark-read-btn">
        Read
      </button>

    </div>
  );
}

export default NotificationItem;