import {
  useState,
  useContext,
} from "react";

import {
  EmployeeContext,
} from "../../context/EmployeeContext";

import {
  TaskContext,
} from "../../context/TaskContext";

function TaskForm() {

  const { employees } =
    useContext(EmployeeContext);

  const { addTask } =
    useContext(TaskContext);

  const [formData,setFormData] =
    useState({
      title:"",
      description:"",
      employee:"",
      priority:"Medium",
      status:"Pending",
      deadline:"",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    addTask(formData);

    setFormData({
      title:"",
      description:"",
      employee:"",
      priority:"Medium",
      status:"Pending",
      deadline:"",
    });

  };

  return (
    <div className="task-form-card">

      <h2 className="widget-title">
        Create Task
      </h2>

      <form
        className="task-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
        />

        <select
          name="employee"
          value={formData.employee}
          onChange={handleChange}
          required
        >

          <option value="">
            Assign Employee
          </option>

          {
            employees.map(
              (employee) => (
                <option
                  key={employee.id}
                  value={employee.name}
                >
                  {employee.name}
                </option>
              )
            )
          }

        </select>

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >

          <option>
            High
          </option>

          <option>
            Medium
          </option>

          <option>
            Low
          </option>

        </select>

        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
        />

        <button type="submit">
          Create Task
        </button>

      </form>

    </div>
  );
}

export default TaskForm;