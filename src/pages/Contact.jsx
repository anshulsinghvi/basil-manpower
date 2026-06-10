
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [websiteSettings, setWebsiteSettings] = useState({
    phone: '+91 98765 43210',
    email: 'hello@basilmanpower.com',
    address: 'Mumbai, India',
    whatsapp: '+91 98765 43210',
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    const { data, error } = await supabase
      .from("settings")
      .select("*")
      .limit(1)
      .single();

    if (!error && data) {
      setWebsiteSettings({
        phone: data.phone || "",
        email: data.email || "",
        whatsapp: data.whatsapp || "",
        address: data.address || "",
      });
    }
  };
const handleSubmit = async () => {
  const { error } = await supabase
    .from("contacts")
    .insert([
      {
        name,
        phone,
        email,
        message,
      },
    ]);

  if (error) {
    alert(error.message);
  } else {
    alert("Message Sent Successfully");

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  }
};
return (
  <section
    id="contact"
    className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
  >
    {/* Background Glow */}
    <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />
    <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

    <div className="relative mx-auto max-w-7xl">
      <div className="mb-14 text-center">
        <span className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
          Get In Touch
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
          Let's Build Something Great
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
          Reach out to our team for recruitment support, hiring solutions,
          or partnership opportunities.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        {/* Form */}
        <div className="glass rounded-[2rem] border border-white/20 bg-white/70 p-8 shadow-premium backdrop-blur-xl sm:p-10">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input-premium w-full px-5 py-4"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 9876543210"
                  className="input-premium w-full px-5 py-4"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="input-premium w-full px-5 py-4"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>

              <textarea
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us how we can help..."
                className="input-premium w-full px-5 py-4"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="btn-premium w-full rounded-2xl px-6 py-4 text-base font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

       
        
      </div>
    </div>
  </section>
);
}

export default Contact;
