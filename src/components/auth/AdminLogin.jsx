function AdminLogin() {
  return (
    <div className="auth-form-container">

      <h1 className="auth-title">
        Admin Login
      </h1>

      <form className="auth-form">

        <input
          type="email"
          placeholder="Admin Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;