import {
  Briefcase,
  Search,
  Users,
  CheckCircle,
  UserCheck,
  ClipboardList,
  Target,
  Award,
  ArrowRight,
} from "lucide-react";

function HowItWorks() {
  const developerSteps = [
    {
      icon: <Briefcase size={28} />,
      title: "Share Requirement",
    },
    {
      icon: <Search size={28} />,
      title: "Shortlist Candidates",
    },
    {
      icon: <Users size={28} />,
      title: "Interview & Select",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Deploy & Manage",
    },
  ];

  const candidateSteps = [
    {
      icon: <UserCheck size={28} />,
      title: "Choose Role",
    },
    {
      icon: <ClipboardList size={28} />,
      title: "Register",
    },
    {
      icon: <Target size={28} />,
      title: "Get Matched",
    },
    {
      icon: <Award size={28} />,
      title: "Get Placed",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          How It Works
        </h2>

        <div className="mx-auto mt-3 h-1 w-20 rounded bg-yellow-500" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* Developers */}
          <div className="rounded-3xl border border-slate-200 bg-blue-50 p-6 sm:p-8">
            <h3 className="mb-8 text-center text-2xl font-bold text-slate-900">
              For Developers
            </h3>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {developerSteps.map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                    {step.icon}
                  </div>

                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    {step.title}
                  </p>

                  <div className="mt-2 text-xs text-slate-500">
                    Step {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Candidates */}
          <div className="rounded-3xl border border-slate-200 bg-green-50 p-6 sm:p-8">
            <h3 className="mb-8 text-center text-2xl font-bold text-slate-900">
              For Candidates
            </h3>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {candidateSteps.map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
                    {step.icon}
                  </div>

                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    {step.title}
                  </p>

                  <div className="mt-2 text-xs text-slate-500">
                    Step {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;