import { useEffect, useState } from "react";
import HowItWorks from "../components/HowItWorks";
import Hero from "../components/Hero";
import RequirementsTable from "../components/RequirementsTable";
import TrustedBrands from "../components/TrustedBrands";
import { supabase } from "../services/supabase";
import {
  Phone,
  UserCheck,
  Users,
  Brush,
  BadgeHelp,
  Mic,
} from "lucide-react";

function Home() {
 const [websiteStats, setWebsiteStats] = useState({
  telecallers_count: "",
  developers_count: "",
  specialized_roles: "",
  experience_years: "",
});

useEffect(() => {
  fetchStats();
}, []);

const fetchStats = async () => {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .eq("id", 2)
    .single();

  if (!error && data) {
    setWebsiteStats({
      telecallers_count: data.telecallers_count || "",
      developers_count: data.developers_count || "",
      specialized_roles: data.specialized_roles || "",
      experience_years: data.experience_years || "",
    });
  }
};

  const roles = [
    {
      title: "Tele-caller",
      subtitle: "Customer Engagement",
      icon: <Phone size={32} />,
    },
    {
      title: "Valet",
      subtitle: "Guest & Parking",
      icon: <UserCheck size={32} />,
    },
    {
      title: "Hostess",
      subtitle: "Reception & Guest",
      icon: <Users size={32} />,
    },
    {
      title: "Housekeeping",
      subtitle: "Maintenance",
      icon: <Brush size={32} />,
    },
    {
      title: "GRE",
      subtitle: "Guest Relations",
      icon: <BadgeHelp size={32} />,
    },
    {
      title: "Anchor",
      subtitle: "Event Hosting",
      icon: <Mic size={32} />,
    },
  ];

  return (
    <div className="pb-16">

      <Hero websiteStats={websiteStats} />

      {/* Specialized Roles */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-4xl font-bold text-slate-900">
            Our Specialized Roles
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded bg-yellow-500" />

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 flex justify-center text-yellow-500">
                  {role.icon}
                </div>

                <h3 className="font-bold text-slate-900">
                  {role.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {role.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <RequirementsTable />
      </section>

      {/* Trusted Brands */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <TrustedBrands />
        <HowItWorks />
        
      </section>

    </div>
  );
}

export default Home;