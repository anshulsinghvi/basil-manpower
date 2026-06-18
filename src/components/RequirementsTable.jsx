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

    <div className="space-y-5">
  {requirements.map((req) => (
  <div
    key={req.id}
    className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg"
  >
    <div className="font-bold text-slate-900 min-w-[150px]">
      {req.company_name}
    </div>

    <div className="text-slate-600 min-w-[120px]">
      📍 {req.location}
    </div>

    <div className="text-slate-600 min-w-[100px]">
      🎓 {req.experience}
    </div>

    <div className="text-slate-600 min-w-[120px]">
      👤 {req.gender}
    </div>

    <div className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
      {req.openings} Open
    </div>

    <button className="rounded-xl bg-sky-500 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-600">
      Apply Now
    </button>
  </div>
))}
</div>
  </section>
);



};

export default RequirementsTable;