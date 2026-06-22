function TrustedBrands() {
  const developers = [
    "GODREJ",
    "PIRAMAL",
    "RUNWAL",
    "ADANI",
    "SUNTECK",
    "WADHWA",
    "SURAJ",
    "JP INFRA",
    "RAHEJA",
    "EKTA",
    "ASHWIN SHETH",
    "PARANJAPE",
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">

        <h2 className="text-center text-4xl font-bold text-slate-900">
          Trusted By Leading Developers
        </h2>

        <div className="mx-auto mt-3 h-1 w-20 rounded bg-yellow-500" />

        <div className="mt-12 overflow-hidden">
          <div className="flex animate-marquee gap-6">
            {[...developers, ...developers].map((item, index) => (
              <div
                key={index}
                className="shrink-0 rounded-2xl border border-yellow-500/20 bg-slate-950 px-8 py-5 text-center"
              >
                <span className="font-bold tracking-widest text-yellow-400">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default TrustedBrands;