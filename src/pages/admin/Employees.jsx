import AdminLayout from "../../components/layout/AdminLayout";

import EmployeeSearch from "../../components/employees/EmployeeSearch";

import EmployeeFilters from "../../components/employees/EmployeeFilters";

import EmployeeList from "../../components/employees/EmployeeList";

import AddEmployeeForm from "../../components/employees/AddEmployeeForm";

function Employees() {
  return (
    <AdminLayout>

      <div className="employees-container">

        <div className="employees-header">

          <div>

            <h1 className="dashboard-title">
              Employees Management
            </h1>

            <p className="dashboard-subtitle">
              Manage company employees
            </p>

          </div>

        </div>

        <div className="employees-topbar">

          <EmployeeSearch />

          <EmployeeFilters />

        </div>

        <div className="employees-sections">

          <EmployeeList />

          <AddEmployeeForm />

        </div>

      </div>

    </AdminLayout>
  );
}

export default Employees;