import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";
function Telecaller() {
const [fullName, setFullName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [location, setLocation] = useState("");
const [experience, setExperience] = useState("Fresher");
const [preferredLocation, setPreferredLocation] = useState("");
const [role, setRole] = useState("");
const [previousWork, setPreviousWork] = useState("");
const [loading, setLoading] = useState(false);
const handleSubmit = async () => {
if (loading) return;

if (!role.trim()) {
alert("Please enter the role you are applying for");
return;
}

if (!fullName.trim()) {
alert("Please enter your full name");
return;
}

if (fullName.trim().length < 3) {
alert("Full name must be at least 3 characters");
return;
}

if (!/^[6-9]\d{9}$/.test(phone)) {
alert("Please enter a valid 10-digit mobile number");
return;
}

if (!/\S+@\S+.\S+/.test(email)) {
alert("Please enter a valid email address");
return;
}

if (!location.trim()) {
alert("Please enter current location");
return;
}

if (!preferredLocation.trim()) {
alert("Please enter preferred work location");
return;
}

if (!previousWork.trim()) {
alert("Please enter previous work details");
return;
}

const lastApply = localStorage.getItem("lastApply");

if (
lastApply &&
Date.now() - Number(lastApply) < 60000
) {
alert("Please wait 1 minute before applying again.");
return;
}

setLoading(true);

const { data: existing } = await supabase
.from("candidates")
.select("id")
.eq("phone", phone)
.maybeSingle();

if (existing) {
setLoading(false);
alert("This mobile number is already registered");
return;
}

const { error } = await supabase
.from("candidates")
.insert([
{
full_name: fullName.trim(),
phone,
email: email.trim(),
role: role.trim(),
location: location.trim(),
experience,
preferred_location: preferredLocation.trim(),
previous_work: previousWork.trim(),
},
]);

setLoading(false);

if (error) {
alert(error.message);
return;
}

localStorage.setItem("lastApply", Date.now());

alert("Registration Successful ✅");

setFullName("");
setPhone("");
setEmail("");
setRole("");
setLocation("");
setExperience("");
setPreferredLocation("");
setPreviousWork("");
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

  {/* Role Field */}
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-300">
      Applying For Role
    </label>

    <input
      type="text"
      placeholder=""
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-slate-500 outline-none transition focus:border-sky-400"
    />
  </div>

  {/* Full Name + Mobile */}
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
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Mobile Number
      </label>

      <input
  type="tel"
  placeholder=""
  value={phone}
  maxLength={10}
  onChange={(e) =>
    setPhone(e.target.value.replace(/\D/g, ""))
  }
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
                placeholder=""
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
  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-sky-400"
>
  <option value="Fresher" className="text-black">
    Fresher
  </option>

  <option value="0-1 Year" className="text-black">
    0-1 Year
  </option>

  <option value="1-3 Years" className="text-black">
    1-3 Years
  </option>

  <option value="3-5 Years" className="text-black">
    3-5 Years
  </option>

  <option value="5+ Years" className="text-black">
    5+ Years
  </option>
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
  disabled={loading}
  onClick={handleSubmit}
  className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading ? "Submitting..." : "Register Now"}
</button>
        </form>
      </div>
    </div>
  </section>
);

}

export default Telecaller;
