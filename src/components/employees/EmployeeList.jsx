import {
  useContext,
  useState,
} from "react";

import {
  EmployeeContext,
} from "../../context/EmployeeContext";

function EmployeeList() {

  const {
    employees,
    deleteEmployee,
  } = useContext(EmployeeContext);

  const [editingId,setEditingId] =
    useState(null);

  return (
    <div className="employee-list-container">

      <h2 className="widget-title">
        Employees
      </h2>

      <div className="employee-list">

        {
          employees.map((employee) => (

            <div
              className="employee-card"
              key={employee.id}
            >

              <div className="employee-card-top">

                <div className="employee-avatar">

                  {
                    employee.name
                    ?.charAt(0)
                  }

                </div>

                <span
                  className={
                    employee.status ===
                    "Active"

                    ?

                    "employee-status active"

                    :

                    "employee-status inactive"
                  }
                >
                  {employee.status}
                </span>

              </div>

              <h2 className="employee-name">
                {employee.name}
              </h2>

              <p className="employee-id">
                {employee.id}
              </p>

              <div className="employee-info">

                <p>
                  📧 {employee.email}
                </p>

                <p>
                  📞 {employee.phone}
                </p>

                <p>
                  🏢 {employee.department}
                </p>

                <p>
                  💼 {employee.role}
                </p>

              </div>

              <div className="employee-actions">

                <button
                  className="employee-edit-btn"
                  onClick={() =>
                    setEditingId(
                      employee.id
                    )
                  }
                >
                  Edit
                </button>

                <button
                  className="employee-delete-btn"
                  onClick={() =>
                    deleteEmployee(
                      employee.id
                    )
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default EmployeeList;