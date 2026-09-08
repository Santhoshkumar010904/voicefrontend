function EmployeeAvailability() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Availability Status
      </h2>

      <div className="employee-availability-box">

        <div className="availability-item available">
          Available
        </div>

        <div className="availability-item busy">
          Busy
        </div>

        <div className="availability-item offline">
          Offline
        </div>

      </div>

    </div>
  );
}

export default EmployeeAvailability;