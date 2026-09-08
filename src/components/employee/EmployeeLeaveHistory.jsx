function EmployeeLeaveHistory() {

  const leaves = [
    "Sick Leave - Approved",
    "WFH Request - Pending",
    "Casual Leave - Approved",
    "Medical Leave - Rejected",
  ];

  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Leave History
      </h2>

      <div className="employee-leave-history-list">

        {
          leaves.map((leave, index) => (
            <div
              className="employee-leave-item"
              key={index}
            >
              {leave}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeLeaveHistory;