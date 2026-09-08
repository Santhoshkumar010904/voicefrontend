import AdminLayout from "../../components/layout/AdminLayout";

import TaskBoard from "../../components/tasks/TaskBoard";

import TaskFilters from "../../components/tasks/TaskFilters";

import TaskForm from "../../components/tasks/TaskForm";

function Tasks() {
  return (
    <AdminLayout>

      <div className="tasks-container">

        <div className="tasks-header">

          <div>

            <h1 className="dashboard-title">
              Tasks Management
            </h1>

            <p className="dashboard-subtitle">
              Manage workflows and tasks
            </p>

          </div>

        </div>

        <div className="tasks-topbar">

          <TaskFilters />

        </div>

        <div className="tasks-sections">

          <TaskBoard />

          <TaskForm />

        </div>

      </div>

    </AdminLayout>
  );
}

export default Tasks;