import EmployeeSidebar from "../common/EmployeeSidebar";

import Navbar from "../common/Navbar";

function EmployeeLayout({
  children,
}) {
  return (
    <div className="employee-layout">

      <EmployeeSidebar />

      <div className="employee-main-content">

        <Navbar />

        <div className="employee-page-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default EmployeeLayout;