function TeamTasks() {

  const tasks = [
    "Design Dashboard UI",
    "Complete API Integration",
    "Update Attendance System",
    "Fix Notification Bugs",
  ];

  return (
    <div className="team-widget">

      <h2 className="widget-title">
        Team Tasks
      </h2>

      <div className="team-task-list">

        {
          tasks.map((task, index) => (
            <div
              className="team-task-item"
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

export default TeamTasks;