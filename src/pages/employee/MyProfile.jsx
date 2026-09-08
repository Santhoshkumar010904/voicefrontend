import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeProfileCard from "../../components/employee/EmployeeProfileCard";

import EmployeeProfileForm from "../../components/employee/EmployeeProfileForm";

import EmployeeAvailability from "../../components/employee/EmployeeAvailability";

function MyProfile() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              My Profile
            </h1>

            <p className="dashboard-subtitle">
              Manage employee profile
            </p>

          </div>

        </div>

        <div className="employee-dashboard-sections">

          <EmployeeProfileCard />

          <EmployeeProfileForm />

        </div>

        <EmployeeAvailability />

      </div>

    </EmployeeLayout>
  );
}

export default MyProfile;