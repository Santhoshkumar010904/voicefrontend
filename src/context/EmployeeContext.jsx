import {
  createContext,
  useState,
} from "react";

export const EmployeeContext =
  createContext();

function EmployeeProvider({
  children,
}) {

  const [employees,setEmployees] =
    useState([]);

  const addEmployee = (employee) => {

    const newEmployee = {
      ...employee,

      id:
        "EMP" +
        Math.floor(
          1000 + Math.random() * 9000
        ),
    };

    setEmployees((prev) => [
      ...prev,
      newEmployee,
    ]);

  };

  const deleteEmployee = (id) => {

    setEmployees(
      employees.filter(
        (employee) =>
          employee.id !== id
      )
    );

  };

  const editEmployee = (
    id,
    updatedEmployee
  ) => {

    setEmployees(
      employees.map((employee) =>
        employee.id === id
          ? updatedEmployee
          : employee
      )
    );

  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        deleteEmployee,
        editEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;