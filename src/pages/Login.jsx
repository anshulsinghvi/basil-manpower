import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../services/supabase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      navigate("/admin/dashboard");
    }
  };

  return (
    <section className="mx-auto flex min-h-[calc(100vh-6rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-500">
            Admin Access
          </p>

          <h1 className="mt-4 text-3xl font-semibold">
            Admin Login
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <label>Email</label>

            <input
              type="email"
              placeholder="username/email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border p-3"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full rounded-xl bg-blue-600 text-white py-3"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;