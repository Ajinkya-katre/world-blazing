export default function TrustStrip() {
  const items = [
    "Expert-Managed Campaigns",
    "Transparent Reporting",
    "Local Business Experience",
    "Ethical & Professional Execution",
  ];

  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 border-y">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {items.map(item => (
          <div key={item} className="flex items-center gap-2">
            🤝 <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
