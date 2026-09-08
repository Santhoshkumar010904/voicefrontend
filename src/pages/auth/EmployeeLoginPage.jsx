import {
  useState,
  useContext,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  EmployeeContext,
} from "../../context/EmployeeContext";

function EmployeeLoginPage() {

  const navigate =
    useNavigate();

  const { employees } =
    useContext(EmployeeContext);

  const [employeeId,setEmployeeId] =
    useState("");

  const [password,setPassword] =
    useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const employee =
      employees.find(
        (emp) =>
          emp.id === employeeId &&
          emp.password === password
      );

    if(employee){

      sessionStorage.setItem(
        "loggedEmployee",
        JSON.stringify(employee)
      );

      navigate(
        "/employee/dashboard"
      );

    }else{

      alert(
        "Invalid Employee ID or Password"
      );

    }

  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Employee Login
        </h1>

        <p>
          Login with your employee credentials
        </p>

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          <input
            type="text"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e)=>
              setEmployeeId(
                e.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>
              setPassword(
                e.target.value
              )
            }
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default EmployeeLoginPage;