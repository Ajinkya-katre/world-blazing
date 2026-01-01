const SERVICES = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Rank higher on Google and generate consistent organic leads.",
  },
  {
    title: "Google Ads & Performance Marketing",
    desc: "High-intent paid campaigns optimized for conversions.",
  },
  {
    title: "Social Media Marketing",
    desc: "Brand visibility and lead generation across platforms.",
  },
  {
    title: "Lead Generation Funnels",
    desc: "Landing pages, forms, tracking & conversion optimization.",
  },
];

export default function MarketingServices() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center">
        Our Digital Marketing Services 
      </h2>
      <p className="mt-4 text-center text-neutral-600 max-w-xl mx-auto">
        Every service is handled end-to-end by our expert marketing team.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {SERVICES.map(service => (
          <div
            key={service.title}
            className="rounded-2xl border bg-white dark:bg-neutral-900 p-6 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg"> 🎯 {service.title}</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              {service.desc}
            </p>
            <p className="mt-3 text-xs text-indigo-600 font-medium">
              ✔ Executed by experts only
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
