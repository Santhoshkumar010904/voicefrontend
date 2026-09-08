function EmployeeTaskCard({
  title,
  priority,
  status,
  due,
}) {
  return (
    <div className="employee-task-card">

      <div className="employee-task-top">

        <h3>{title}</h3>

        <span
          className={`employee-priority ${priority}`}
        >
          {priority}
        </span>

      </div>

      <p className="employee-task-status">
        Status: {status}
      </p>

      <p className="employee-task-due">
        Due: {due}
      </p>

    </div>
  );
}

export default EmployeeTaskCard;