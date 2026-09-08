import AdminLayout from "../../components/layout/AdminLayout";

import TeamChat from "../../components/messages/TeamChat";

function Messages() {
  return (
    <AdminLayout>

      <div className="messages-container">

        <div className="messages-header">

          <div>

            <h1 className="dashboard-title">
              Team Messages
            </h1>

            <p className="dashboard-subtitle">
              Internal communication system
            </p>

          </div>

        </div>

        <TeamChat />

      </div>

    </AdminLayout>
  );
}

export default Messages;