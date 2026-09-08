import MainLayout from "./MainLayout";

function AdminLayout({ children }) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}

export default AdminLayout;