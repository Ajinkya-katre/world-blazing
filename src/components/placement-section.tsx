"use client";

import Image from "next/image";
import { placementCompanies } from "@/constants/placement-companies";

export default function PlacementLogosSection() {
  // Duplicate array so scrolling looks seamless
  const scrollingLogos = [...placementCompanies, ...placementCompanies];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-300">
          Placements
        </p>

        <h2 className="mt-3 text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          Our Students Work At{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Top Companies
          </span>
        </h2>

        <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Students from Full Stack, Testing, Python, Digital Marketing & Data
          Analytics programs are working at reputed companies & startups.
        </p>

        {/* Infinite scrolling area */}
        <div className="relative mt-10 overflow-hidden  rounded-3xl ">
          <div className="flex gap-6 animate-scroll">
            {scrollingLogos.map((company, index) => (
              <div
                key={index}
                className="min-w-[140px] flex items-center justify-center"
              >
                <div className="inline-flex items-center justify-center rounded-xl   px-3 py-2 shadow-sm">
                  {company.logoSrc ? (
                    <Image
                      src={company.logoSrc}
                      alt={company.name}
                      width={100}
                      height={100}
                      className="h-20 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-100">
                      {company.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 18s linear infinite;
            width: max-content;
          }
        `}</style>

        {/* Fine print */}
        <p className="mt-6 text-[11px] md:text-xs text-neutral-500 dark:text-neutral-400">
          *Logos represent companies where students have been placed through
          training and guidance from World Blazing Computer Institute.
        </p>
      </div>
    </section>
  );
}
