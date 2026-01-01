import Link from "next/link";

export default function MarketingCTA() {
  return (
    <section className="py-20 text-center bg-indigo-600 text-white">
      <h2 className="text-3xl font-bold">
        Ready to Grow Your Business Online?
      </h2>
      <p className="mt-4 text-indigo-100">
        Get a free marketing audit and growth roadmap.
      </p>

      <Link
        href="/contact-us?type=marketing"
        className="inline-block mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold text-indigo-600 hover:bg-neutral-100"
      >
        Get Free Consultation 📞
      </Link>
    </section>
  );
}
