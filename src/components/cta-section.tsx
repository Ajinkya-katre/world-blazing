"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAFooterProps {
  text?: string;
  btnText?: string;
  href?: string;
  className?: string;
}

export default function CTAFooter({
  text = "Start Your Learning Journey Today",
  btnText = "Get Started",
  href = "/contact",
  className,
}: CTAFooterProps) {
  return (
    <section
      className={cn(
        "w-full py-12 md:py-16 px-6 flex justify-center",
        className
      )}
    >
      <div className="w-full max-w-5xl text-center rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-600 text-white p-10 md:p-14 shadow-xl relative overflow-hidden">
        
        {/* soft glow background */}
        <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl"></div>

        <h2 className="relative text-2xl md:text-4xl font-bold mb-4 tracking-tight">
          {text}
        </h2>

        <p className="relative text-sm md:text-base text-white/90 mb-6">
          Join thousands of learners leveling up their careers through practical, guided courses.
        </p>

        <Link
          href={href}
          className="relative inline-flex items-center justify-center bg-white text-indigo-700 dark:text-neutral-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform text-sm md:text-base"
        >
          {btnText}
        </Link>

      </div>
    </section>
  );
}
