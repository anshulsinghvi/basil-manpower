import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-slate-950 to-slate-900 p-10">

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

          <div>
            <h2 className="text-4xl font-bold text-white">
              Ready To Build The Right Team?
            </h2>

            <p className="mt-3 text-slate-300">
              Partner with Basil Manpower for reliable, verified manpower solutions.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              to="/developers"
              className="rounded-xl border border-yellow-500 px-6 py-3 font-semibold text-yellow-400 hover:bg-yellow-500 hover:text-black"
            >
              Hire Staff
            </Link>

            <Link
              to="/telecaller"
              className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
            >
              Apply For Jobs
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTASection;