import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Hero({ websiteStats }) {
  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
<div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
<div className="absolute top-1/2 left-1/2 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
    <section className="relative overflow-hidden bg-slate-950 px-4 py-28 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
              Premium Recruitment Network
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Connecting
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Real Estate Developers
              </span>
              With Skilled Telecallers
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Basil Manpower helps leading real estate companies hire qualified
              telecallers faster while creating career opportunities for skilled
              professionals across India.
            </p>

            <div className="mt-10">
  <Link
    to="/telecaller"
    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
  >
    Apply Now →
  </Link>

  <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
    <span>✓ Verified Telecallers</span>
    <span>✓ Trusted Developers</span>
    <span>✓ Fast Hiring Process</span>
  </div>
</div> 
          </div>

  

{/* Right Side Stats Cards */}
<div className="grid gap-6 lg:grid-cols-1">

  <div className="glass rounded-[28px] border border-white/10 p-6 shadow-premium">
  <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
    Verified Telecallers
  </p>

  <h3 className="mt-3 text-4xl font-bold text-white">
     {websiteStats?.telecallers_count || ""}
  </h3>

  <p className="mt-1 text-sm text-slate-300">
    Skilled professionals ready for recruitment
  </p>
</div>

 <div className="glass rounded-[28px] border border-white/10 p-6 shadow-premium">
  <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
    Trusted Developers
  </p>

  <h3 className="mt-3 text-4xl font-bold text-white">
    {websiteStats?.developers_count || "100+"}
  </h3>

  <p className="mt-1 text-sm text-slate-300">
      Trusted real estate companies across Mumbai
  </p>
</div>

 <div className="glass rounded-[28px] border border-white/10 p-6 shadow-premium">
  <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
    Industry Experience
  </p>

  <h3 className="mt-3 text-4xl font-bold text-white">
    {websiteStats?.experience_years || "5+"}
  </h3>

  <p className="mt-1 text-sm text-slate-300">
     Years of recruitment expertise
  </p>
</div>

</div>


        </div>
      </div>
    </section>
    </motion.div>
  );
}

export default Hero;
