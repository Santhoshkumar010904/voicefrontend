function TaskLogs() {

  const tasks = [
    "Dashboard UI completed",
    "Attendance system updated",
    "Notifications fixed",
    "Analytics exported",
  ];

  return (
    <div className="activity-widget">

      <h2 className="widget-title">
        Task Activity Logs
      </h2>

      <div className="activity-simple-list">

        {
          tasks.map((task, index) => (
            <div
              className="activity-simple-item"
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

export default TaskLogs;