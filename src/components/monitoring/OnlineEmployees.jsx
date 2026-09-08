function OnlineEmployees() {

  const employees = [
    "John Doe",
    "Sarah Smith",
    "Emma Wilson",
    "Michael Brown",
    "David Lee",
  ];

  return (
    <div className="monitor-widget">

      <h2 className="widget-title">
        Online Employees
      </h2>

      <div className="online-list">

        {
          employees.map((employee, index) => (
            <div
              className="online-item"
              key={index}
            >

              <div className="online-dot"></div>

              <span>{employee}</span>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default OnlineEmployees;