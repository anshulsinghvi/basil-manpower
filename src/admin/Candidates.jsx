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
      Role: c.role,
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

    XLSX.writeFile(workbook, "Candidates.xlsx");
  };

  const deleteCandidate = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this candidate?"
    );

    if (!confirmDelete) return;

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

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Candidates Management
            </h1>

            <p className="mt-2 text-slate-500">
              Manage all registered candidates from one place.
            </p>
          </div>

          <button
            onClick={exportToExcel}
            className="rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 font-semibold text-white shadow-lg hover:scale-105 transition"
          >
            Export Excel
          </button>
        </div>

       <div className="grid gap-5">

  {candidates.length === 0 ? (
    <div className="rounded-3xl bg-white p-10 text-center shadow">
      No Candidates Found
    </div>
  ) : (
    <div className="overflow-x-auto rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">

      <table className="min-w-[1600px] w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left font-semibold">Name</th>
            <th className="p-4 text-left font-semibold">Role</th>
            <th className="p-4 text-left font-semibold">Mobile</th>
            <th className="p-4 text-left font-semibold">Email</th>
            <th className="p-4 text-left font-semibold">Location</th>
            <th className="p-4 text-left font-semibold">Experience</th>
            <th className="p-4 text-left font-semibold">Preferred Location</th>
            <th className="p-4 text-left font-semibold">Previous Work</th>
            <th className="p-4 text-center font-semibold">Action</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((candidate) => (
            <tr
              key={candidate.id}
              className="border-b border-slate-200 hover:bg-slate-50 transition"
            >
              <td className="p-4 font-semibold text-slate-900">
                {candidate.full_name}
              </td>

              <td className="p-4">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                  {candidate.role || "Not Specified"}
                </span>
              </td>

              <td className="p-4 whitespace-nowrap">
                {candidate.phone}
              </td>

              <td className="p-4 whitespace-nowrap">
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

              <td className="p-4">
                {candidate.previous_work || "Fresher"}
              </td>

              <td className="p-4 text-center">
                <button
                  onClick={() => deleteCandidate(candidate.id)}
                  className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )}



        </div>
      </div>
    </AdminLayout>
  );
};

export default Candidates;