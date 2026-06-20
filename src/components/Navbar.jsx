import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "For Developers", path: "/developers" },
  { label: "Careers", path: "/careers" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-yellow-500/20 bg-slate-950/95 px-6 py-4 backdrop-blur-xl shadow-2xl">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="Basil Manpower"
              className="h-14 w-auto object-contain"
            />

            <div>
              <h1 className="text-lg font-bold text-white">
                BASIL MANPOWER
              </h1>

              <p className="text-xs text-yellow-400">
                Premium Recruitment Network
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/developers"
              className="rounded-xl border border-yellow-500 px-6 py-3 text-sm font-semibold text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
            >
              Hire Staff
            </Link>

            <Link
              to="/telecaller"
              className="rounded-xl bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-yellow-400"
            >
              Apply For Jobs
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 rounded-2xl border border-yellow-500/20 bg-slate-950 p-4 shadow-2xl md:hidden">
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-semibold ${
                      isActive
                        ? "bg-yellow-500 text-black"
                        : "text-white hover:bg-yellow-500/10 hover:text-yellow-400"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <Link
                to="/developers"
                className="block rounded-xl border border-yellow-500 px-4 py-3 text-center text-sm font-semibold text-yellow-400"
              >
                Hire Staff
              </Link>

              <Link
                to="/telecaller"
                className="block rounded-xl bg-yellow-500 px-4 py-3 text-center text-sm font-semibold text-black"
              >
                Apply For Jobs
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;