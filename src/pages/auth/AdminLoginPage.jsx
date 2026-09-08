import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

function AdminLogin() {

  const navigate =
    useNavigate();

  const [username,setUsername] =
    useState("");

  const [password,setPassword] =
    useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if(
      username === "admin" &&
      password === "admin123"
    ){

      navigate("/admin/dashboard");

    }else{

      alert("Invalid Credentials");

    }

  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Admin Login
        </h1>

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>
              setUsername(
                e.target.value
              )
            }
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
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;