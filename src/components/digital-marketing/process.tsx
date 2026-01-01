const STEPS = [
  "Business & Competitor Analysis",
  "Website & Funnel Audit",
  "Strategy Planning",
  "Campaign Execution by Experts",
  "Continuous Optimization",
  "Transparent Reporting",
];

export default function MarketingProcess() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Our Expert-Driven Growth Process
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step}
              className="rounded-xl bg-white dark:bg-neutral-800 p-6 text-center"
            >
              <div className="text-indigo-600 font-bold text-xl mb-2">
                {i + 1}
              </div>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
