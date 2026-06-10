import { useAppContext } from '../context/AppContext';

function Footer() {
  const { websiteSettings } = useAppContext();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Basil Manpower</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Connecting skilled telecallers with leading real estate developers across Mumbai.
          </p>
        </div>
        <div className="space-y-4 text-sm">
          <p>Phone: {websiteSettings.phone}</p>
          <p>Email: {websiteSettings.email}</p>
        
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Basil Manpower. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
