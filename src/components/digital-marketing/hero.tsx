"use client";

import Image from "next/image";
import Link from "next/link";
import marketingImage from "../../../public/images/marketing-dashboard.png";

export default function DigitalMarketingHero() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Grow Your Business Online with{" "}
            <span className="text-indigo-600">Result-Driven Digital Marketing</span> 🚀
          </h1>

          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300">
           We help businesses grow using SEO, Google Ads, Social Media & Performance Marketing —
planned, executed, and optimized by experienced digital marketing professionals.
          </p>

          <p className="mt-3 text-sm text-neutral-500">
            No fake promises. No vanity metrics. Only measurable growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              aria-label="Get Free Marketing Audit"
              href="/contact-us?type=marketing-audit"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition"
            >
              🔥 Get Free Marketing Audit
            </Link>

            <Link
              aria-label="Talk to a Marketing Expert"
              href="/contact-us"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              📞 Talk to a Marketing Expert
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <Image
            src={marketingImage}
            alt="Digital marketing dashboard showing SEO, Google Ads and performance metrics"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl w-full"
          />
        </div>

      </div>
    </section>
  );
}
