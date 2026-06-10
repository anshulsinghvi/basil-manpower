
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Telecaller", path: "/telecaller" },
  { label: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <div className="glass flex items-center justify-between rounded-[24px] border border-white/20 px-6 py-4 shadow-premium">

          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <img
  src="/logo.jpeg"
  alt="Basil Manpower"
  className="h-14 w-auto object-contain"
/>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Basil Manpower
              </h1>

              <p className="text-xs text-slate-500">
                Recruitment Network
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                      : "text-slate-700 hover:bg-white/60"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/admin"
              className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
            >
              Admin Login
            </Link>

            <Link
              to="/telecaller"
              className="btn-premium rounded-2xl px-5 py-3 text-sm font-semibold"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>

        {open && (
          <div className="glass mt-3 rounded-[24px] p-4 shadow-premium md:hidden">
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-sm font-semibold ${
                      isActive
                        ? "bg-sky-500 text-white"
                        : "text-slate-700 hover:bg-white/50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <Link
                to="/admin"
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700"
              >
                Admin Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;