import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-slate-950 to-black px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[160px]" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-start gap-8 lg:grid-cols-2">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
                Premium Recruitment Network
              </div>

             <h1 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Connecting
                <span className="block bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  Real Estate Developers
                </span>
                With Skilled Manpower
              </h1>

              <p className="mt-4 text-base leading-7 text-slate-300">
                We provide verified, role-specific professional manpower to
                manage sales galleries, launches, office operations, and site
                experiences across India.
              </p>

             {/* Roles */}
<div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
  {[
    "Tele-callers",
    "Valets",
    "Hostesses",
    "Housekeeping",
    "GRE",
    "Anchors",
  ].map((role) => (
    <span
      key={role}
      className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2.5 text-sm font-medium text-yellow-300 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500/20 hover:scale-105"
    >
      {role}
    </span>
  ))}
</div>

{/* Buttons */}
<div className="mt-8 flex flex-col sm:flex-row gap-4">
  <Link
    to="/developers"
    className="w-full sm:w-56 rounded-2xl border-2 border-yellow-500 px-8 py-4 text-center font-semibold text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-105"
  >
    Hire Staff
  </Link>

  <Link
    to="/telecaller"
    className="w-full sm:w-56 rounded-2xl bg-yellow-500 px-8 py-4 text-center font-semibold text-black transition-all duration-300 hover:bg-yellow-400 hover:scale-105"
  >
    Apply For Jobs
  </Link>
</div>
</div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:max-w-xl lg:ml-auto self-start">

      <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 sm:text-sm">
                  Verified Candidates
                </p>
                <h3 className="mt-2 text-3xl font-bold text-white sm:text-5xl">
                  16,500+
                </h3>
              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-4 sm:p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 sm:text-sm">
                  Developers 
                </p>
                <h3 className="mt-2 text-3xl font-bold text-white sm:text-5xl">
                  50+
                </h3>
              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-4 sm:p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 sm:text-sm">
                  Specialized Roles
                </p>
                <h3 className="mt-2 text-3xl font-bold text-white sm:text-5xl">
                 6+
                </h3>
              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-4 sm:p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 sm:text-sm">
                  Decade Experience
                </p>
                <h3 className="mt-2 text-3xl font-bold text-white sm:text-5xl">
                  2+
                </h3>
              </div>

            </div>

          </div>
        </div>
        
      </section>
    </motion.div>
  );
}

export default Hero;