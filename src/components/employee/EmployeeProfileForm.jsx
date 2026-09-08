function EmployeeProfileForm() {
  return (
    <div className="employee-widget">

      <h2 className="widget-title">
        Update Profile
      </h2>

      <form className="employee-profile-form">

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="text"
          placeholder="Phone Number"
        />

        <input
          type="text"
          placeholder="Department"
        />

        <button type="submit">
          Save Changes
        </button>

      </form>

    </div>
  );
}

export default EmployeeProfileForm;