function MeetingCard({
  title,
  time,
}) {
  return (
    <div className="meeting-card">

      <h3 className="meeting-title">
        {title}
      </h3>

      <p className="meeting-time">
        {time}
      </p>

    </div>
  );
}

export default MeetingCard;