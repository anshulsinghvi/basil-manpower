import { Link } from "react-router-dom";
import {
  Users,
  Clock3,
  ShieldCheck,
  Headphones,
  Building2,
  Briefcase,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

function Developers() {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Verified Candidates",
      description: "Pre-screened manpower ready for deployment.",
    },
    {
      icon: <Clock3 size={32} />,
      title: "Fast Deployment",
      description: "Quick turnaround for urgent requirements.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Industry Expertise",
      description: "Specialized recruitment for real estate developers.",
    },
    {
      icon: <Headphones size={32} />,
      title: "Dedicated Support",
      description: "End-to-end hiring assistance.",
    },
  ];

  const industries = [
    "Real Estate",
    "Sales Galleries",
    "Corporate Events",
    "Hospitality",
    "Customer Support",
    "Retail Operations",
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-slate-950 py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
            For Developers
          </span>

          <h1 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            Hire Verified Manpower
            <span className="block text-yellow-400">
              For Your Projects
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            We help developers recruit trained tele-callers, hostesses,
            GREs, valet staff, housekeeping teams and support staff.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black"
            >
              Post Requirement
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-yellow-400"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Basil */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">

          <h2 className="text-center text-4xl font-bold">
            Why Choose Basil Manpower
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded bg-yellow-500" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border p-6 shadow-sm"
              >
                <div className="text-yellow-500">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">

          <h2 className="text-center text-4xl font-bold">
            Hiring Process
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded bg-yellow-500" />

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {[
              "Share Requirement",
              "Candidate Screening",
              "Interview Support",
              "Deployment",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 font-bold text-black">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-bold">
                  {step}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">

          <h2 className="text-center text-4xl font-bold">
            Industries We Serve
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded bg-yellow-500" />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-4 rounded-2xl border p-6"
              >
                <Building2 className="text-yellow-500" />

                <span className="font-semibold">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl text-center">

          <Briefcase
            size={50}
            className="mx-auto text-yellow-500"
          />

          <h2 className="mt-6 text-4xl font-bold text-white">
            Need Manpower For Your Next Project?
          </h2>

          <p className="mt-4 text-slate-300">
            Let our recruitment specialists help you build the right team.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <Link
              to="/contact"
              className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black"
            >
              Hire Staff
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-yellow-400"
            >
              <PhoneCall className="mr-2 inline" size={18} />
              Contact Sales
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Developers;