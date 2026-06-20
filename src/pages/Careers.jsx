import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { Briefcase } from "lucide-react";

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
    <div className="bg-white min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-5xl font-bold text-white">
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

    <h2 className="text-center text-4xl font-bold">
      Current Openings
    </h2>

    <div className="mx-auto mt-3 h-1 w-20 rounded bg-yellow-500" />

    <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}
      <div className="grid grid-cols-7 gap-4 bg-slate-100 p-5 font-bold text-slate-900">
        <div>Company</div>
        <div>Role</div>
        <div>Location</div>
        <div>Experience</div>
        <div>Gender</div>
        <div>Openings</div>
        <div>Action</div>
      </div>

      {/* Rows */}
      {requirements.map((job) => (
        <div
          key={job.id}
          className="grid grid-cols-7 gap-4 border-t p-5 items-center hover:bg-slate-50"
        >
          <div className="font-medium">
            {job.company_name}
          </div>

          <div>
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
              {job.role}
            </span>
          </div>

          <div>{job.location}</div>

          <div>{job.experience}</div>

          <div>{job.gender}</div>

          <div>
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
              {job.openings}
            </span>
          </div>

          <div>
            <Link
              to="/telecaller"
              className="rounded-xl bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400"
            >
              Apply Now
            </Link>
          </div>
        </div>
      ))}

    

          </div>
        </div>
      </section>

    </div>
  );
}

export default Careers;