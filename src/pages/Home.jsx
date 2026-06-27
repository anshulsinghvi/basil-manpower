import { useEffect, useState } from "react";
import HowItWorks from "../components/HowItWorks";
import Hero from "../components/Hero";
import RequirementsTable from "../components/RequirementsTable";
import TrustedBrands from "../components/TrustedBrands";
import { supabase } from "../services/supabase";
import {
  PhoneCall,
  BriefcaseBusiness,
  UserRound,
  BrushCleaning,
  Shirt,
  Mic,
} from "lucide-react";

function Home() {
  
  const roles = [
    {
      title: "Tele-caller",
      subtitle: "Customer\nEngagement",
      icon: <PhoneCall size={46} strokeWidth={2} />,
    },
    {
      title: "Valet",
      subtitle: "Guest & Parking\nManagement",
      icon: <BriefcaseBusiness size={46} strokeWidth={2} />,
    },
    {
      title: "Hostess",
      subtitle: "Reception & Guest\nManagement",
      icon: <UserRound size={46} strokeWidth={2} />,
    },
    {
      title: "Housekeeping",
      subtitle: "Cleanliness &\nMaintenance",
      icon: <BrushCleaning size={46} strokeWidth={2} />,
    },
    {
      title: "GRE",
      subtitle: "Guest Relationship\nExecutive",
      icon: <Shirt size={46} strokeWidth={2} />,
    },
    {
      title: "Anchor",
      subtitle: "Event & Program\nAnchoring",
      icon: <Mic size={46} strokeWidth={2} />,
    },
  ];

  return (
    <div className="pb-16">
      <Hero />

      {/* Specialized Roles */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">
              Premium Workforce
            </span>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
              Our Specialized Roles
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-yellow-500" />

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
              Professional manpower for real estate developers with trained,
              verified and experienced staff.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="group flex h-72 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 text-center shadow-md transition-all duration-300 hover:-translate-y-3 hover:border-yellow-500 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-50 text-yellow-500 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white">
                  {role.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {role.title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-sm font-medium leading-7 text-slate-500">
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