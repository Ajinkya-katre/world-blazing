export default function WhoIsThisFor() {
  const audience = [
    "Local businesses & shops",
    "Startups & founders",
    "Coaching institutes & trainers",
    "Real estate & service providers",
    "Doctors, clinics & professionals",
    "E-commerce & D2C brands",
  ];

  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Who Is This Service For?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {audience.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white dark:bg-neutral-800 p-6 shadow-sm border"
            >
              ✅ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
