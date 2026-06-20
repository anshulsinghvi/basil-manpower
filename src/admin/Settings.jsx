import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import AdminLayout from "../components/AdminLayout";

const Settings = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [telecallersCount, setTelecallersCount] = useState("");
  const [developersCount, setDevelopersCount] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [specializedRoles, setSpecializedRoles] = useState("");

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const { data, error } = await supabase
      .from("settings")
      .select("*")
      .eq("id", 2)
      .single();

    if (!error && data) {
      setPhone(data.phone || "");
      setEmail(data.email || "");

      setTelecallersCount(data.telecallers_count || "");
      setDevelopersCount(data.developers_count || "");
      setExperienceYears(data.experience_years || "");
      setSpecializedRoles(data.specialized_roles || "");
    }
  };

  const saveAllSettings = async () => {
    const { error } = await supabase
      .from("settings")
      .update({
        phone,
        email,
        telecallers_count: telecallersCount,
        developers_count: developersCount,
        experience_years: experienceYears,
        specialized_roles: specializedRoles,
      })
      .eq("id", 2);

    if (error) {
      alert(error.message);
    } else {
      alert("Settings Saved Successfully");
    }
  };

  return (
    <AdminLayout>
      <div>
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Website Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Manage contact information and homepage statistics.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Contact Information
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
                />
              </div>
            </div>
          </div>

          {/* Homepage Statistics */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Homepage Statistics
            </h2>

            <div className="space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Verified Candidates
                </label>

                <input
                  type="text"
                  value={telecallersCount}
                  onChange={(e) => setTelecallersCount(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Developers Served
                </label>

                <input
                  type="text"
                  value={developersCount}
                  onChange={(e) => setDevelopersCount(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Specialized Roles
                </label>

                <input
                  type="text"
                  value={specializedRoles}
                  onChange={(e) => setSpecializedRoles(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Years of Expertise
                </label>

                <input
                  type="text"
                  value={experienceYears}
                  onChange={(e) => setExperienceYears(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
                />
              </div>

            </div>

            <button
              onClick={saveAllSettings}
              className="mt-8 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1"
            >
              Save Settings
            </button>

          </div>

        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;