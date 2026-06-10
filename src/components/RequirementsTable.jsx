import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

const RequirementsTable = () => {
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
  <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
    <div className="mb-10 text-center">
      <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
        Open Positions
      </span>

      <h2 className="mt-5 text-4xl font-bold text-slate-900">
        Current Requirements
      </h2>

      <p className="mt-3 text-slate-500">
        Explore active hiring opportunities from leading developers.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {requirements.map((req) => (
        <div
          key={req.id}
          className="group rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {req.company_name}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                📍 {req.location}
              </p>
            </div>

            <div className="rounded-2xl bg-sky-100 px-3 py-2 text-sm font-semibold text-sky-700">
              {req.openings} Open
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {req.experience}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              {req.gender}
            </span>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-5">
            <button className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);



};

export default RequirementsTable;