'use client';
import { FormEvent, useState } from "react";

const scriptURL = "https://script.google.com/macros/s/AKfycbyjqsJy5Z9IAYKNJKCr2e20dhJ_WZfnW2phJeCOw2_685ZvykwofDmDMtCqWkmSIF1g/exec"

const ContactUsSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Google Apps Script + FormData – keep it simple
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // we don't need to read the response, just fire-and-forget
      });

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        {/* LEFT SECTION */}
        <div className="space-y-8">
          {/* Badge + title */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-600 px-3 py-1 text-xs font-medium dark:bg-indigo-900/30 dark:text-indigo-300">
              <span className="text-[11px]">📞 Let&apos;s talk</span>
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
              Contact Us
            </h2>
            <p className="mt-3 text-base md:text-base text-neutral-600 dark:text-neutral-300 max-w-xl">
              Have questions about courses, fees, or batch timings? Reach out to
              World Blazing Computer Institute and our team will help you choose
              the right path for your IT career.
            </p>
          </div>

          {/* Contact info cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Phone */}
            <div className="rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900/80 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Call / WhatsApp US at [+918459816185]
              </p>
              <a
                href="tel:+918459816185"
                className="inline-flex mt-2 items-center justify-center rounded-full border border-white/70 px-5 py-2 text-xs md:text-base font-semibold text-white hover:bg-white/10"
              >
                Call Institute
              </a>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Mon – Sat, 9:00 AM to 8:00 PM
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900/80 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Email
              </p>
              <p className="mt-1 text-base font-medium text-neutral-900 dark:text-neutral-50 break-all">
                worldblazinginstitute@gmail.com
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Share your queries, our team usually replies within 24 hours.
              </p>
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3 sm:col-span-2 dark:border-neutral-800 dark:bg-neutral-900/80 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Institute Address
              </p>
              <p className="mt-1 text-base font-medium text-neutral-900 dark:text-neutral-50">
                Aru Palace Building, 162/A1, Malwadi Road,
              </p>
              <p className="text-base font-medium text-neutral-900 dark:text-neutral-50">
                near Laxmi Mata Mandir, Hadapsar Gaon, Pune – 411028
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Visit us for counseling, course details and campus tour.
              </p>
            </div>
          </div>

          {/* Map (responsive) */}
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-2">
              Find us on map
            </p>
            <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm aspect-[4/3]">
              <iframe
                title="World Blazing Computer Institute Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.592981813237!2d73.93112067496244!3d18.50208678258787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14d243a2639%3A0xa550799b8227e301!2sWORLD%20BLAZING%20COMPUTER%20INSTITUTE!5e0!3m2!1sen!2sin!4v1765137627969!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>

          {/* Why contact us – clarity for students */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              What can we help you with?
            </p>
            <ul className="space-y-1 text-base text-neutral-600 dark:text-neutral-300 list-disc list-inside">
              <li>Choosing the right course based on your background</li>
              <li>Understanding fees, EMI options and batch timings</li>
              <li>Booking a free demo session or counseling</li>
              <li>Placement assistance and career guidance queries</li>
            </ul>
          </div>

        </div>

        {/* RIGHT SECTION — FORM */}
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/90 px-5 py-6 sm:px-7 sm:py-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-900/90">
          {/* subtle bg grid / pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-10 bg-[url('/grid.svg')] dark:opacity-15" />

          <div className="relative mb-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Send us a message
            </h3>
            <p className="mt-2 text-xs md:text-base text-neutral-600 dark:text-neutral-300">
              Share your details and what you&apos;re looking for. Our team will
              call or email you back with course details and the next steps.
            </p>
          </div>

          <form className="relative space-y-5" onSubmit={handleSubmit}>
            {/* Name + Phone in two-column on larger screens */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block mb-2 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
                />
              </div>
              <div>
                <label className="block mb-2 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Your contact number"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              />
            </div>

            {/* Course Interest */}
            <div>
              <label className="block mb-2 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                Course you&apos;re interested in
              </label>
              <input
                name="course"
                type="text"
                placeholder="Full Stack / Python / Testing / Data Analytics..."
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your background and what you want to achieve..."
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              />
            </div>

            {/* Submit + helper text */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-base font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1 focus-visible:ring-offset-background transition-colors"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                We never share your details with anyone. You will receive a call
                or WhatsApp within 24 hours.
              </p>
            </div>
            {status === "success" && (
              <p className="mt-2 text-xs text-emerald-500">
                ✅ Thank you! We&apos;ve received your enquiry.
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-xs text-red-500">
                ❌ Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
