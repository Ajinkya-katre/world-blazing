"use client";

import Image from "next/image";
import { motion } from "motion/react";
import reviewSources from "@/constants/review-sources.json";

export default function ReviewSources() {
  return (
    <section className="py-16 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
          Trusted by Students Across Platforms
        </h2>

        <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Genuine reviews from verified platforms like Google, Justdial and Collegedunia.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {reviewSources.map((review) => (
            <motion.a
              key={review.source}
              href={review.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 
                         bg-neutral-50 dark:bg-neutral-900 p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={review.logo}
                  alt={review.source}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>

              <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                {review.rating} ★
              </div>

              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Based on {review.count}+ reviews
              </p>

              <p className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                View on {review.source} →
              </p>
            </motion.a>
          ))}
        </div>

        {/* Trust note */}
        <p className="mt-6 text-base text-neutral-500 dark:text-neutral-400">
          *Ratings are shown from respective platforms and link directly to original review sources.
        </p>

      </div>
    </section>
  );
}
