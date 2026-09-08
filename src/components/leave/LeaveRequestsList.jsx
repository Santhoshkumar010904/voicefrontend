function LeaveRequestsList() {

  const requests = [
    {
      name: "John Doe",
      type: "Sick Leave",
      status: "Pending",
    },

    {
      name: "Sarah Smith",
      type: "Work From Home",
      status: "Approved",
    },

    {
      name: "Emma Wilson",
      type: "Casual Leave",
      status: "Rejected",
    },
  ];

  return (
    <div className="leave-widget">

      <h2 className="widget-title">
        Leave Requests
      </h2>

      <div className="leave-list">

        {
          requests.map((request, index) => (
            <div
              className="leave-item"
              key={index}
            >

              <div>

                <h3>{request.name}</h3>

                <p>{request.type}</p>

              </div>

              <span
                className={`leave-badge ${request.status.toLowerCase()}`}
              >
                {request.status}
              </span>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default LeaveRequestsList;