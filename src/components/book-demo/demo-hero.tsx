export default function DemoHero() {
  return (
    <section className="py-16 text-center px-4 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Book Your Free Demo Class 🎓
      </h1>

      <p className="max-w-2xl mx-auto text-lg opacity-90">
        Experience real classroom training before joining.
        Talk to trainers, see live projects and choose the right course.
      </p>

      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
          ✅ Offline + Online
        </span>
        <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
          ✅ Placement Guidance
        </span>
        <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
          ✅ No Charges
        </span>
      </div>
    </section>
  );
}
