function TeamTasksCard() {

  const tasks = [
    "Finish Dashboard UI",
    "Fix Analytics Graph",
    "Update Task System",
    "Prepare Team Report",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Team Tasks
      </h2>

      <div className="team-task-list">

        {
          tasks.map((task, index) => (
            <div
              className="team-task-card"
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

export default TeamTasksCard;