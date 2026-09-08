import Sidebar from "../common/Sidebar";
import Navbar from "../common/Navbar";

function MainLayout({ children }) {
  return (
    <div className="main-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default MainLayout;