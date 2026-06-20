import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Eye,
  ShieldCheck,
  Clock3,
  Headphones,
  Building2,
} from "lucide-react";

function About() {
  const stats = [
    { number: "12,500+", label: "Candidates" },
    { number: "25+", label: "Developers" },
    { number: "100+", label: "Openings" },
    { number: "10+", label: "Years Experience" },
  ];

  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Verified Candidates",
    },
    {
      icon: <Clock3 size={32} />,
      title: "Fast Hiring",
    },
    {
      icon: <Building2 size={32} />,
      title: "Industry Expertise",
    },
    {
      icon: <Headphones size={32} />,
      title: "Dedicated Support",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-slate-950 py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
            About Us
          </span>

          <h1 className="mt-8 text-5xl font-bold text-white lg:text-6xl">
            About
            <span className="block text-yellow-400">
              Basil Manpower
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Building strong teams for India's leading developers and
            creating career opportunities for skilled professionals.
          </p>

        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">

          <h2 className="text-4xl font-bold">
            Our Story
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded bg-yellow-500" />

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Basil Manpower specializes in recruitment solutions for
            real estate developers, helping businesses hire trained
            tele-callers, hostesses, GREs, housekeeping staff,
            valet teams and support professionals.
          </p>

        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <Target
                size={40}
                className="text-yellow-500"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Our Mission
              </h3>

              <p className="mt-4 text-slate-600">
                Deliver reliable manpower solutions that help
                organizations build high-performing teams.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <Eye
                size={40}
                className="text-yellow-500"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-4 text-slate-600">
                Become India's most trusted recruitment partner
                for real estate and service industries.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">

          <h2 className="text-center text-4xl font-bold">
            Why Choose Basil
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded bg-yellow-500" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border p-8 text-center"
              >
                <div className="flex justify-center text-yellow-500">
                  {feature.icon}
                </div>

                <h3 className="mt-4 font-bold">
                  {feature.title}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="grid gap-6 md:grid-cols-4">

            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-yellow-500/20 p-8 text-center"
              >
                <h3 className="text-5xl font-bold text-yellow-400">
                  {item.number}
                </h3>

                <p className="mt-3 text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 p-12 text-center">

          <Users
            size={50}
            className="mx-auto text-yellow-500"
          />

          <h2 className="mt-6 text-4xl font-bold text-white">
            Ready To Partner With Basil Manpower?
          </h2>

          <p className="mt-4 text-slate-300">
            Let's build stronger teams together.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <Link
              to="/developers"
              className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black"
            >
              Hire Staff
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-yellow-400"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;