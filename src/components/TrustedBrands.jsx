
function TrustedBrands() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-12">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-slate-50" />

      <div className="relative">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
            Trusted Partners
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Trusted By Leading Real Estate Brands
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            We proudly work with some of the most respected developers and
            real estate organizations across India.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
          <img
            src="/brands.png"
            alt="Trusted Real Estate Brands"
            className="h-auto w-full rounded-2xl object-contain transition duration-500 hover:scale-[1.02]"
          />
        
        </div>
      </div>
    </section>
  );
}

export default TrustedBrands;
