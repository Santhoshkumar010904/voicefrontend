import EmployeeTaskCard from "./EmployeeTaskCard";

function EmployeeTaskBoard() {

  const tasks = [
    {
      title: "Dashboard UI",
      priority: "high",
      status: "In Progress",
      due: "Tomorrow",
    },

    {
      title: "Fix Attendance Bug",
      priority: "medium",
      status: "Pending",
      due: "2 Days",
    },

    {
      title: "Update Reports",
      priority: "low",
      status: "Completed",
      due: "Completed",
    },
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        My Task Board
      </h2>

      <div className="employee-task-board">

        {
          tasks.map((task, index) => (
            <EmployeeTaskCard
              key={index}
              title={task.title}
              priority={task.priority}
              status={task.status}
              due={task.due}
            />
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeTaskBoard;