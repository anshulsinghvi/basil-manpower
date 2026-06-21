import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { Link } from "react-router-dom";

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
        <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-700">
          Open Positions
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          Current Requirements
        </h2>

        <p className="mt-3 text-slate-500">
          Explore active hiring opportunities from leading developers.
        </p>
      </div>

      <div className="space-y-4">
        {requirements.slice(0, 1).map((req) => (
          <div
            key={req.id}
            className="grid items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg lg:grid-cols-[180px_120px_140px_120px_140px_120px_140px]"
          >
            <div className="font-bold text-slate-900">
              {req.company_name}
            </div>

            <div>
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                {req.role}
              </span>
            </div>

            <div className="text-slate-600">
              📍 {req.location}
            </div>

            <div className="text-slate-600">
              🎓 {req.experience}
            </div>

            <div className="text-slate-600">
              👤 {req.gender}
            </div>

            <div>
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                {req.openings} Open
              </span>
            </div>

            <button className="rounded-xl bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-black">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      <Link
  to="/careers"
  className="inline-block rounded-xl border border-yellow-500 px-6 py-3 font-semibold text-yellow-700 transition hover:bg-yellow-500 hover:text-black"
>
  View All Opportunities
  </Link>
    
    </section>

  );
};

export default RequirementsTable;