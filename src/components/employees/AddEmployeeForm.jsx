import {
  useState,
  useContext,
} from "react";

import {
  EmployeeContext,
} from "../../context/EmployeeContext";

function AddEmployeeForm() {

  const { addEmployee } =
    useContext(EmployeeContext);

  const [formData,setFormData] =
    useState({
      name:"",
      email:"",
      password:"",
      phone:"",
      department:"Development",
      role:"",
      status:"Active",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    addEmployee(formData);

    setFormData({
      name:"",
      email:"",
      password:"",
      phone:"",
      department:"Development",
      role:"",
      status:"Active",
    });

  };

  return (
    <div className="employee-form-card">

      <h2 className="widget-title">
        Add Employee
      </h2>

      <form
        className="employee-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option>
            Development
          </option>

          <option>
            HR
          </option>

          <option>
            Marketing
          </option>

          <option>
            Testing
          </option>

          <option>
            Design
          </option>

        </select>

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>
            Active
          </option>

          <option>
            Inactive
          </option>
        </select>

        <button type="submit">
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default AddEmployeeForm;