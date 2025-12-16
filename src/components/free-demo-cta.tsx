"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { IconCalendarEvent, IconPhoneCall } from "@tabler/icons-react";

export default function FreeDemoCTA() {
  return (
    <section className="relative w-full py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-indigo-200 dark:border-indigo-800 
                     bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                     p-6 md:p-8 text-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            {/* Left Content */}
            <div>
              <p className="text-xs uppercase tracking-wider text-indigo-100">
                Not sure which course is right for you?
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                Book a Free Demo Class
              </h3>
              <p className="mt-2 text-sm md:text-base text-indigo-100 max-w-xl">
                Attend a live classroom or online demo session. 
                Talk directly with our trainers, understand the syllabus, 
                career scope, fees & placements before joining.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/contact-us?type=demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 
                             rounded-full bg-white px-6 py-3 
                             text-sm font-semibold text-indigo-700 
                             shadow hover:bg-indigo-50"
                >
                  <IconCalendarEvent size={18} />
                  Book Free Demo
                </motion.button>
              </Link>

              <a
                href="tel:+918237978163"
                className="inline-flex items-center justify-center gap-2 
                           rounded-full border border-white/70 
                           px-6 py-3 text-sm font-semibold text-white 
                           hover:bg-white/10"
              >
                <IconPhoneCall size={18} />
                Call Now
              </a>
            </div>

          </div>

          {/* Trust Line */}
          <p className="mt-4 text-base text-indigo-100">
            ✔ No payment required • ✔ Career guidance included • ✔ Limited seats per batch
          </p>
        </motion.div>
      </div>
    </section>
  );
}
