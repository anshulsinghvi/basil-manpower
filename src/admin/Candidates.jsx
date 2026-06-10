import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import AdminLayout from "../components/AdminLayout";
import * as XLSX from "xlsx";
const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    const { data, error } = await supabase
      .from("candidates")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setCandidates(data);
    }
  };
const exportToExcel = () => {
const formattedData = candidates.map((c) => ({
  Name: c.full_name,
  Phone: String(c.phone),
  Email: c.email,
  Location: c.location,
  Experience: c.experience,
  PreferredLocation: c.preferred_location,
  PreviousWork: c.previous_work || "",
}));
const worksheet = XLSX.utils.json_to_sheet(formattedData);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Candidates"
  );

  XLSX.writeFile(
    workbook,
    "Candidates.xlsx"
  );
};

const deleteCandidate = async (id) => {
  const { error } = await supabase
    .from("candidates")
    .delete()
    .eq("id", id);

  if (error) {
    alert(error.message);
  } else {
    alert("Candidate Deleted");
    fetchCandidates();
  }
};
   return (
    <AdminLayout>
      <div className="p-8">
<div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
  <div>
    <h1 className="text-4xl font-bold text-slate-900">
      Candidates Management
    </h1>

    <p className="mt-2 text-slate-500">
      Manage all registered telecallers from one place.
    </p>
  </div>

  <button
    onClick={exportToExcel}
    className="rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"
  >
    Export Excel
  </button>
</div>


      <div className="overflow-x-auto rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Mobile</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Experience</th>
              <th className="p-4 text-left">Preferred Location</th>
              <th className="p-4 text-left">Previous Work</th>
              <th className="p-4 text-left">Action</th>

            </tr>
          </thead>

          <tbody>
            {candidates.map((candidate) => (
              <tr
                key={candidate.id}
                className="border-b border-slate-100 transition hover:bg-sky-50"
              >
                <td className="p-4">
                  {candidate.full_name}
                </td>

                <td className="p-4">
                  {candidate.phone || candidate.mobile}
                </td>

                <td className="p-4">
                  {candidate.email}
                </td>

                <td className="p-4">
                  {candidate.location}
                </td>

                <td className="p-4">
                  {candidate.experience}
                </td>

                <td className="p-4">
                  {candidate.preferred_location}
                </td>
<td className="p-4 max-w-xs">
  <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
    {candidate.previous_work || "Fresher"}
  </span>
</td>

<td className="p-4">
  <button
    onClick={() => deleteCandidate(candidate.id)}
    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
  >
    Delete
  </button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AdminLayout>
  );
};

export default Candidates;