import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Requirements",
      path: "/admin/requirements",
      icon: <Briefcase size={18} />,
    },
    {
      name: "Candidates",
      path: "/admin/candidates",
      icon: <Users size={18} />,
    },
    {
      name: "Messages",
      path: "/admin/messages",
      icon: <MessageSquare size={18} />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <Settings size={18} />,
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="h-screen w-72 border-r border-slate-800 bg-slate-950 text-white">
        <div className="flex h-full flex-col p-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold">
              Basil<span className="text-sky-400"> Admin</span>
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Recruitment Management
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                    active
                      ? "bg-sky-500 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto border-t border-slate-800 pt-6">
            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 px-4 py-3 text-sm font-semibold text-white"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      

      
    </>
  );
};

export default AdminSidebar;