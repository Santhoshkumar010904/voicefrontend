import AdminLayout from "../../components/layout/AdminLayout";

import FileUpload from "../../components/files/FileUpload";

import SharedFiles from "../../components/files/SharedFiles";

import RecentFiles from "../../components/files/RecentFiles";

function Files() {
  return (
    <AdminLayout>

      <div className="files-container">

        <div className="files-header">

          <div>

            <h1 className="dashboard-title">
              Files & Documents
            </h1>

            <p className="dashboard-subtitle">
              Manage company documents
            </p>

          </div>

        </div>

        <div className="files-sections">

          <FileUpload />

          <RecentFiles />

        </div>

        <SharedFiles />

      </div>

    </AdminLayout>
  );
}

export default Files;