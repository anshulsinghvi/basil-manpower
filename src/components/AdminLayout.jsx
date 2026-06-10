
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 p-8 lg:p-10">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
