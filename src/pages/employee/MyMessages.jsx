import EmployeeLayout from "../../components/layout/EmployeeLayout";

import EmployeeChatSidebar from "../../components/employee/EmployeeChatSidebar";

import EmployeeChatWindow from "../../components/employee/EmployeeChatWindow";

import EmployeeOnlineUsers from "../../components/employee/EmployeeOnlineUsers";

function MyMessages() {
  return (
    <EmployeeLayout>

      <div className="employee-dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              Messages
            </h1>

            <p className="dashboard-subtitle">
              Team communication system
            </p>

          </div>

        </div>

        <div className="employee-messages-layout">

          <EmployeeChatSidebar />

          <EmployeeChatWindow />

          <EmployeeOnlineUsers />

        </div>

      </div>

    </EmployeeLayout>
  );
}

export default MyMessages;