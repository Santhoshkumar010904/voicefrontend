function LeaveStatus({
  title,
  value,
}) {
  return (
    <div className="leave-status-card">

      <span>
        {title}
      </span>

      <h1>
        {value}
      </h1>

    </div>
  );
}

export default LeaveStatus;