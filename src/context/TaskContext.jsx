import {
  createContext,
  useState,
} from "react";

export const TaskContext =
  createContext();

function TaskProvider({
  children,
}) {

  const [tasks,setTasks] =
    useState([]);

  const addTask = (task) => {

    const newTask = {
      ...task,

      id:
        "TASK" +
        Math.floor(
          1000 + Math.random() * 9000
        ),
    };

    setTasks((prev) => [
      ...prev,
      newTask,
    ]);

  };

  const deleteTask = (id) => {

    setTasks(
      tasks.filter(
        (task) =>
          task.id !== id
      )
    );

  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;