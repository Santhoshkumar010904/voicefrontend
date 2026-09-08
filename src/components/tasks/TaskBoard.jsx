import {
  useContext,
} from "react";

import {
  TaskContext,
} from "../../context/TaskContext";

function TaskBoard() {

  const {
    tasks,
    deleteTask,
  } = useContext(TaskContext);

  return (
    <div className="task-board-container">

      <h2 className="widget-title">
        Task Board
      </h2>

      <div className="task-board">

        {
          tasks.map((task) => (

            <div
              className="task-card"
              key={task.id}
            >

              <div className="task-card-top">

                <span
                  className={
                    task.priority
                    .toLowerCase()
                  }
                >
                  {task.priority}
                </span>

                <span className="task-status">
                  {task.status}
                </span>

              </div>

              <h2 className="task-title">
                {task.title}
              </h2>

              <p className="task-id">
                {task.id}
              </p>

              <p className="task-desc">
                {task.description}
              </p>

              <div className="task-meta">

                <p>
                  👤 {task.employee}
                </p>

                <p>
                  📅 {task.deadline}
                </p>

              </div>

              <div className="task-actions">

                <button
                  className="task-delete-btn"
                  onClick={() =>
                    deleteTask(task.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default TaskBoard;