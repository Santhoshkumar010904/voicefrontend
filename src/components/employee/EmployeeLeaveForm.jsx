function EmployeeLeaveForm() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Request Leave
      </h2>

      <form className="employee-leave-form">

        <input
          type="text"
          placeholder="Leave Reason"
        />

        <select>
          <option>Sick Leave</option>
          <option>Casual Leave</option>
          <option>Work From Home</option>
        </select>

        <input type="date" />

        <button type="submit">
          Submit Request
        </button>

      </form>

    </div>
  );
}

export default EmployeeLeaveForm;