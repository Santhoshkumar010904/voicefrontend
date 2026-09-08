import TaskCard from "./TaskCard";

function TaskColumn({
  title,
  tasks,
}) {
  return (
    <div className="task-column">

      <h2 className="column-title">
        {title}
      </h2>

      <div className="column-tasks">

        {
          tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              priority={task.priority}
              status={task.status}
            />
          ))
        }

      </div>

    </div>
  );
}

export default TaskColumn;