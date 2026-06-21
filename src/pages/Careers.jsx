import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function Careers() {
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    const { data, error } = await supabase
      .from("requirements")
      .select("*")
      .order("id", { ascending: false });

    if (!error) {
      setRequirements(data);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Career Opportunities
          </h1>

          <p className="mt-4 text-slate-300">
            Explore current openings from leading developers.
          </p>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">

          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Current Openings
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded bg-yellow-500" />

          {/* Scroll Container */}
          <div className="mt-12 max-h-[600px] overflow-auto rounded-3xl border border-slate-200 bg-white shadow-sm">

            <div className="min-w-[1000px] space-y-4 p-4">

              {requirements.length === 0 ? (
                <div className="py-10 text-center text-slate-500">
                  No openings available right now.
                </div>
              ) : (
                requirements.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <div className="w-[140px] font-bold text-slate-900">
                      {job.company_name}
                    </div>

                    <div className="w-[120px]">
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                        {job.role}
                      </span>
                    </div>

                    <div className="w-[150px] text-slate-700">
                      📍 {job.location}
                    </div>

                    <div className="w-[120px] text-slate-700">
                      🎓 {job.experience} Yr
                    </div>

                    <div className="w-[160px] text-slate-700">
                      👤 {job.gender}
                    </div>

                    <div className="w-[120px]">
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                        {job.openings} Open
                      </span>
                    </div>

                    <Link
                      to="/telecaller"
                      className="ml-auto rounded-xl bg-yellow-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
                    >
                      Apply Now
                    </Link>
                  </div>
                ))
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Careers;