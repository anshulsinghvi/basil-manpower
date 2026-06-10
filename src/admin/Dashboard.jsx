import { FaUsers, FaBriefcase, FaEnvelope } from "react-icons/fa";
import AdminLayout from "../components/AdminLayout";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
const Dashboard = () => {
  const [candidateCount, setCandidateCount] = useState(0);
  const [requirementCount, setRequirementCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const { data: candidates } = await supabase
        .from("candidates")
        .select("id");

      const { data: requirements } = await supabase
        .from("requirements")
        .select("id");

      const { data: messages } = await supabase
        .from("contacts")
        .select("id");

      setCandidateCount(candidates?.length || 0);
      setRequirementCount(requirements?.length || 0);
      setMessageCount(messages?.length || 0);
    };

    fetchCounts();
  }, []);

  const stats = [
    {
      title: "Total Candidates",
      value: candidateCount,
      icon: <FaUsers size={30} />,
    },
    {
      title: "Total Requirements",
      value: requirementCount,
      icon: <FaBriefcase size={30} />,
    },
    {
      title: "Total Messages",
      value: messageCount,
      icon: <FaEnvelope size={30} />,
    },
  ];

 
return (
  <AdminLayout>
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Dashboard Overview
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back. Here's what's happening today.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-100 blur-3xl opacity-70" />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-4 text-5xl font-bold text-slate-900">
                  {item.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-sky-100 p-4 text-sky-600">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
        <h2 className="text-2xl font-bold text-slate-900">
          Recruitment Summary
        </h2>

        <p className="mt-3 text-slate-500">
          Track candidates, hiring requirements, and incoming inquiries from a
          single dashboard.
        </p>
      </div>
    </div>
  </AdminLayout>
);
};

export default Dashboard;