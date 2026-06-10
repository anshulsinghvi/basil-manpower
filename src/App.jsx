import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Telecaller from './pages/Telecaller';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './admin/Dashboard';
import Requirements from "./admin/Requirements";
import Candidates from "./admin/Candidates";
import Messages from "./admin/Messages";
import Settings from "./admin/Settings";
import { useEffect, useState } from "react";

import { supabase } from "./services/supabase";


function ProtectedRoute({ children }) {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);

  if (session === undefined) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/admin" />;
  }

  return children;
}
function App() {
const location = useLocation();

const isAdminPage =
  location.pathname.startsWith("/admin") &&
  location.pathname !== "/admin";
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {!isAdminPage && <Navbar />}
      <main className={isAdminPage ? "" : "pt-24"}>
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/telecaller" element={<Telecaller />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/admin" element={<Login />} />
  <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route path="/admin/requirements" element={
    <ProtectedRoute>
      <Requirements />
    </ProtectedRoute>
  }
/>
<Route path="/admin/candidates" element={
    <ProtectedRoute>
      <Candidates />
    </ProtectedRoute>
  } />
<Route path="/admin/messages" element={
    <ProtectedRoute>
      <Messages />
    </ProtectedRoute>
  } />
<Route path="/admin/settings" element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  } />
</Routes>
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default App;
