function EmployeeFilters() {
  return (
    <div className="employee-filters">

      <select>
        <option>All Departments</option>
        <option>Development</option>
        <option>Design</option>
        <option>HR</option>
      </select>

      <select>
        <option>All Status</option>
        <option>Online</option>
        <option>Offline</option>
      </select>

    </div>
  );
}

export default EmployeeFilters;