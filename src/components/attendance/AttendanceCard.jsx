function AttendanceCard({
  title,
  value,
}) {
  return (
    <div className="attendance-card">

      <span>
        {title}
      </span>

      <h1>
        {value}
      </h1>

    </div>
  );
}

export default AttendanceCard;