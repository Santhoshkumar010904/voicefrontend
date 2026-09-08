function TaskCard({
  title,
  priority,
  status,
}) {
  return (
    <div className="task-card">

      <div className="task-top">

        <h3 className="task-title">
          {title}
        </h3>

        <span
          className={`task-priority ${priority.toLowerCase()}`}
        >
          {priority}
        </span>

      </div>

      <p className="task-status">
        Status: {status}
      </p>

    </div>
  );
}

export default TaskCard;    