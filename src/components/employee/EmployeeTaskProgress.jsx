function EmployeeTaskProgress() {

  const tasks = [
    "Dashboard UI Design",
    "Analytics Report",
    "Fix Login Module",
    "Update Team Notes",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Task Progress
      </h2>

      <div className="employee-task-list">

        {
          tasks.map((task, index) => (
            <div
              className="employee-task-item"
              key={index}
            >
              {task}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeTaskProgress;