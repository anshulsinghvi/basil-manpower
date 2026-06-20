import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              BASIL MANPOWER
            </h2>

            <p className="mt-4 text-slate-400">
              Premium recruitment network specializing in real estate manpower solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-yellow-400">
              Quick Links
            </h3>

            <div className="space-y-2 text-slate-300">
              <Link to="/">Home</Link><br />
              <Link to="/developers">For Developers</Link><br />
              <Link to="/careers">Careers</Link><br />
              <Link to="/about">About Us</Link><br />
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-yellow-400">
              Services
            </h3>

            <div className="space-y-2 text-slate-300">
              <p>Manpower Supply</p>
              <p>Recruitment Solutions</p>
              <p>Staff Management</p>
              <p>HR Consulting</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-yellow-400">
              Contact
            </h3>

            <div className="space-y-2 text-slate-300">
              <p>+91 99999 99999</p>
              <p>operations@basilmanpower.com</p>
              <p>Mumbai, Maharashtra</p>

              <Link
                to="/admin"
                className="inline-block mt-4 text-yellow-400"
              >
                Admin Login →
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">
          © 2026 Basil Manpower. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;