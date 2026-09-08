import {
  useState,
  useContext,
} from "react";

import { useNavigate }
from "react-router-dom";

import { EmployeeContext }
from "../../context/EmployeeContext";

function EmployeeLogin() {

  const navigate = useNavigate();

  const { employees } =
    useContext(EmployeeContext);

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const employee =
      employees.find(
        (emp) =>
          emp.email === email &&
          emp.password === password
      );

    if(employee){

      localStorage.setItem(
        "loggedEmployee",
        JSON.stringify(employee)
      );

      navigate("/employee/dashboard");

    }else{
      alert("Invalid Credentials");
    }

  };

  return (
    <div className="auth-form-container">

      <h1 className="auth-title">
        Employee Login
      </h1>

      <form
        className="auth-form"
        onSubmit={handleLogin}
      >

        <input
          type="email"
          placeholder="Employee Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default EmployeeLogin;