import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from "../services/supabase";

const defaultWebsiteSettings = {
  phone: '+91 98765 43210',
  email: 'hello@basilmanpower.com',
  address: 'Mumbai, India',
  whatsapp: '+91 98765 43210',
};

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [websiteSettings, setWebsiteSettings] = useState(defaultWebsiteSettings);

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

  const value = useMemo(
    () => ({ websiteSettings }),
    [websiteSettings]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}
