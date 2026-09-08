function EmployeeCard({
  name,
  role,
  department,
  status,
}) {
  return (
    <div className="employee-card">

      <div className="employee-avatar">
        {name.charAt(0)}
      </div>

      <h2 className="employee-name">
        {name}
      </h2>

      <p className="employee-role">
        {role}
      </p>

      <p className="employee-department">
        {department}
      </p>

      <div
        className={
          status === "Online"
            ? "employee-status online"
            : "employee-status offline"
        }
      >
        {status}
      </div>

    </div>
  );
}

export default EmployeeCard;