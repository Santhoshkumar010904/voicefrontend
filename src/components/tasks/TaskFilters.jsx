function TaskFilters() {
  return (
    <div className="task-filters">

      <select>
        <option>All Priority</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select>
        <option>All Status</option>
        <option>Todo</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

    </div>
  );
}

export default TaskFilters;