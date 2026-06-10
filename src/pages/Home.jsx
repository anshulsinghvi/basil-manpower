import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import RequirementsTable from "../components/RequirementsTable";
import TrustedBrands from "../components/TrustedBrands";
import { supabase } from "../services/supabase";

function Home() {
  const [websiteStats, setWebsiteStats] = useState({
    telecallers_count: "",
    developers_count: "",
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

    console.log("Website Stats:", data);

    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      setWebsiteStats({
        telecallers_count: data.telecallers_count,
        developers_count: data.developers_count,
        experience_years: data.experience_years,
      });
    }
  };

  return (
    <div className="space-y-16 pb-16">
      <Hero websiteStats={websiteStats} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RequirementsTable />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TrustedBrands />
      </section>
    </div>
  );
}

export default Home;