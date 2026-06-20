import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero({ websiteStats })  {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-slate-950 to-black px-4 py-32 sm:px-6 lg:px-8">
        
        {/* Gold Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[160px]" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[160px]" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left Side */}
            <div>
              <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
                Premium Recruitment Network
              </div>

              <h1 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Connecting
                <span className="block bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  Real Estate Developers
                </span>
                With Skilled Manpower
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                We provide verified, role-specific professional manpower to
                manage sales galleries, launches, office operations, and site
                experiences across India.
              </p>

              {/* Buttons */}
             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/developers"
                  className="w-full sm:w-auto rounded-2xl border border-yellow-500 px-8 py-4 text-center font-semibold text-yellow-400">
                  Hire Staff
                </Link>

                <Link
                  to="/telecaller"
                  className="w-full sm:w-auto rounded-2xl bg-yellow-500 px-8 py-4 text-center font-semibold text-black">
                  Apply For Jobs
                </Link>
              </div>

              {/* Roles */}
              <div className="mt-8 flex flex-wrap gap-3">
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
                    className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side Stats */}
            
            <div className="hidden lg:grid gap-6 lg:max-w-xl lg:ml-auto lg:grid-cols-2">


              <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  Verified Candidates
                </p>
                <h3 className="mt-3 text-5xl font-bold text-white">
                  {websiteStats.telecallers_count}
                </h3>
              </div>

              <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  Developers Served
                </p>
                <h3 className="mt-3 text-5xl font-bold text-white">
                  {websiteStats.developers_count}
                </h3>
              </div>

              <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  Specialized Roles
                </p>
                <h3 className="mt-3 text-5xl font-bold text-white">
                  {websiteStats.specialized_roles}
                </h3>
              </div>

              <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  Experience
                </p>
                <h3 className="mt-3 text-5xl font-bold text-white">
                  {websiteStats.experience_years}
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