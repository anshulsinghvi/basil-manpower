import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";
import AdminLayout from "../components/AdminLayout";

const Requirements = () => {
  const [requirements, setRequirements] = useState([]);
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [openings, setOpenings] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const [editId, setEditId] = useState(null);
  useEffect(() => {
  fetchRequirements();

}, []);

const deleteRequirement = async (id) => {
  if (window.confirm("Are you sure you want to delete this requirement?")) {
    const { error } = await supabase
      .from("requirements")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      alert("Requirement Deleted");
      fetchRequirements();
    }
  }
};
const editRequirement = (item) => {
  setEditId(item.id);
  setCompany(item.company_name);
  setLocation(item.location);
  setOpenings(item.openings);
  setExperience(item.experience);
  setGender(item.gender || "");
};

const fetchRequirements = async () => {
  const { data, error } = await supabase
    .from("requirements")
    .select("*")
    .order("id", { ascending: false });

  if (!error) {
    setRequirements(data);
  }
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  let error;

  if (editId) {
    ({ error } = await supabase
      .from("requirements")
      .update({
        company_name: company,
        location,
        openings,
        experience,
        gender,
      })
      .eq("id", editId));
  } else {
    ({ error } = await supabase
      .from("requirements")
      .insert([
        {
          company_name: company,
          location,
          openings,
          experience,
          gender,
        },
      ]));
  }

  if (error) {
    alert(error.message);
  } else {
    alert(editId ? "Requirement Updated" : "Requirement Added");

    fetchRequirements();

    setCompany("");
    setLocation("");
    setOpenings("");
    setExperience("");
    setGender("");
    setEditId(null);
  }
};
  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">
          Requirements Management
        </h1>
<div className="bg-white rounded-xl shadow mb-6 overflow-x-auto">
  <table className="w-full">
    <thead className="bg-slate-100">
      <tr>
        <th className="p-4 text-left">Company</th>
        <th className="p-4 text-left">Location</th>
        <th className="p-4 text-left">Openings</th>
        <th className="p-4 text-left">Experience</th>
        <th className="p-4 text-left">Gender</th>
        <th className="p-4 text-left">Action</th>
      </tr>
    </thead>

    <tbody>
      {requirements.map((item) => (
        <tr
          key={item.id}
          className="border-b hover:bg-slate-50"
        >
          <td className="p-4">
            {item.company_name}
          </td>

          <td className="p-4">
            {item.location}
          </td>

          <td className="p-4">
            {item.openings}
          </td>

          <td className="p-4">
            {item.experience}
          </td>
          <td className="p-4">
            {item.gender}
          </td>
         <td className="p-4">
  <div className="flex gap-2">
    <button
      onClick={() => editRequirement(item)}
      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
    >
      Edit
    </button>

    <button
      onClick={() => deleteRequirement(item.id)}
      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
    >
      Delete
    </button>
  </div>
</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Company Name"
          className="border p-2 w-full mb-3"
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Location"
          className="border p-2 w-full mb-3"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Openings"
          className="border p-2 w-full mb-3"
          value={openings}
          onChange={(e) =>
            setOpenings(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Experience"
          className="border p-2 w-full mb-3"
          value={experience}
          onChange={(e) =>
            setExperience(e.target.value)
          }
        />

        <select
          className="border p-2 w-full mb-3"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Gender Requirement</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Male/Female">Male/Female</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Save Requirement
        </button>
      </form>
    </div>
    </AdminLayout>
  );
};

export default Requirements;