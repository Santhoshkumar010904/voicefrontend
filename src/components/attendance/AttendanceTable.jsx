function AttendanceTable() {

  const employees = [
    {
      name: "John Doe",
      status: "Present",
      hours: "8h 20m",
    },

    {
      name: "Sarah Smith",
      status: "Remote",
      hours: "7h 40m",
    },

    {
      name: "Emma Wilson",
      status: "Absent",
      hours: "-",
    },
  ];

  return (
    <div className="attendance-widget">

      <h2 className="widget-title">
        Attendance Table
      </h2>

      <table className="attendance-table">

        <thead>

          <tr>
            <th>Employee</th>
            <th>Status</th>
            <th>Work Hours</th>
          </tr>

        </thead>

        <tbody>

          {
            employees.map((employee, index) => (
              <tr key={index}>

                <td>{employee.name}</td>

                <td>{employee.status}</td>

                <td>{employee.hours}</td>

              </tr>
            ))
          }

        </tbody>

      </table>

    </div>
  );
}

export default AttendanceTable;