function EmployeeCheckIn() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Attendance Actions
      </h2>

      <div className="employee-check-buttons">

        <button className="employee-checkin-btn">
          Check In
        </button>

        <button className="employee-checkout-btn">
          Check Out
        </button>

      </div>

    </div>
  );
}

export default EmployeeCheckIn;