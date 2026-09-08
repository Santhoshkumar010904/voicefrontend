function LeaveRequestForm() {
  return (
    <div className="leave-widget">

      <h2 className="widget-title">
        Leave Request
      </h2>

      <form className="leave-form">

        <input
          type="text"
          placeholder="Employee Name"
        />

        <select>
          <option>Sick Leave</option>
          <option>Casual Leave</option>
          <option>Work From Home</option>
        </select>

        <textarea
          placeholder="Reason"
        ></textarea>

        <button type="submit">
          Submit Request
        </button>

      </form>

    </div>
  );
}

export default LeaveRequestForm;