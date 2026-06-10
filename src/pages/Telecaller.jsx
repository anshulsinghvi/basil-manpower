import { useState } from "react";
import { supabase } from "../services/supabase";
function Telecaller() {
const [fullName, setFullName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [location, setLocation] = useState("");
const [experience, setExperience] = useState("Fresher");
const [preferredLocation, setPreferredLocation] = useState("");
const [previousWork, setPreviousWork] = useState("");
const handleSubmit = async () => {
  if (
    !fullName ||
    !phone ||
    !email ||
    !location ||
    !preferredLocation ||
    !previousWork
  ) {
    alert("Please fill all fields");
    return;
  }

  const { data: existing } = await supabase
  .from("candidates")
  .select("id")
  .eq("phone", phone)
  .maybeSingle();

if (existing) {
  alert("This mobile number is already registered");
  return;
}
const { error } = await supabase
  .from("candidates")
  .insert([
    {
      full_name: fullName,
      phone,
      email,
      location,
      experience,
      preferred_location: preferredLocation,
      previous_work: previousWork,
    },
  ]);
  if (error) {
    alert(error.message);
  } else {
    alert("Registration Successful");

    setFullName("");
    setPhone("");
    setEmail("");
    setLocation("");
    setExperience("Fresher");
    setPreferredLocation("");
    setPreviousWork("");
  }
};
  
return (
  <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
    <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />
    <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[140px]" />

    <div className="relative mx-auto max-w-5xl">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
            Career Registration
          </span>

          <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
            Register as a Skilled Telecaller
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Join our premium recruitment network and connect with leading
            real estate developers across India.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-slate-500 outline-none transition focus:border-sky-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+91"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-slate-500 outline-none transition focus:border-sky-400"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-slate-500 outline-none transition focus:border-sky-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Current Location
              </label>
              <input
                type="text"
                placeholder="Mumbai, Pune, Thane..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-slate-500 outline-none transition focus:border-sky-400"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Total Real Estate Experience
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-sky-400"
              >
                <option>Fresher</option>
                <option>0-1 Year</option>
                <option>1-3 Years</option>
                <option>3-5 Years</option>
                <option>5+ Years</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Preferred Work Location
              </label>
              <input
                type="text"
                value={preferredLocation}
                onChange={(e) => setPreferredLocation(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-sky-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Project Name / Previous Work
            </label>
            <input
              type="text"
              value={previousWork}
              onChange={(e) => setPreviousWork(e.target.value)}
              placeholder="Previous projects, telecalling, sales, customer support..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-slate-500 outline-none transition focus:border-sky-400"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  </section>
);

}

export default Telecaller;
