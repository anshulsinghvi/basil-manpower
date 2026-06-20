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
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">

        <h2 className="text-center text-4xl font-bold text-slate-900">
          How It Works
        </h2>

        <div className="mx-auto mt-3 h-1 w-20 rounded bg-yellow-500" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* Developers */}
          <div className="rounded-3xl border border-slate-200 bg-blue-50 p-8">
            <h3 className="mb-8 text-center text-2xl font-bold text-slate-900">
              For Developers
            </h3>

            <div className="flex items-center justify-between">
              {developerSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex items-center"
                >
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                      {step.icon}
                    </div>

                    <p className="mt-3 text-sm font-semibold">
                      {step.title}
                    </p>

                    <div className="mt-2 text-xs text-slate-500">
                      {index + 1}
                    </div>
                  </div>

                  {index < developerSteps.length - 1 && (
                    <ArrowRight
                      className="mx-4 text-slate-400"
                      size={20}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Candidates */}
          <div className="rounded-3xl border border-slate-200 bg-green-50 p-8">
            <h3 className="mb-8 text-center text-2xl font-bold text-slate-900">
              For Candidates
            </h3>

            <div className="flex items-center justify-between">
              {candidateSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex items-center"
                >
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
                      {step.icon}
                    </div>

                    <p className="mt-3 text-sm font-semibold">
                      {step.title}
                    </p>

                    <div className="mt-2 text-xs text-slate-500">
                      {index + 1}
                    </div>
                  </div>

                  {index < candidateSteps.length - 1 && (
                    <ArrowRight
                      className="mx-4 text-slate-400"
                      size={20}
                    />
                  )}
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