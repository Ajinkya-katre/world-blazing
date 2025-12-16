"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import coursesData from "@/constants/courses.json";
import type { Course } from "@/lib/interface/courses";
import FreeDemoCTA from "./free-demo-cta";

interface CoursesSectionProps {
  courses?: Course[];
  className?: string;
}

export default function CoursesSection({
  courses = coursesData as Course[],
  className,
}: CoursesSectionProps) {
  return (
    <section
      className={cn(
        "w-full max-w-6xl mx-auto px-4 py-12 md:py-16",
        className
      )}
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
            Our Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
            Become Job-Ready in IT 🚀
          </h2>

          <p className="mt-3 text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
            Choose a career path, build real projects, and get trained for
            <span className="font-semibold text-neutral-900 dark:text-white">
              real jobs — not just certificates.
            </span>
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-green-700 dark:text-green-300">
              ✅ Offline + Online
            </span>
            <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-blue-700 dark:text-blue-300">
              🧑‍🏫 Mentor-led
            </span>
            <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-purple-700 dark:text-purple-300">
              💼 Job-oriented
            </span>
          </div>

        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 flex flex-col justify-between transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition" />

            <div className="relative space-y-4">
              {/* Badge */}
              {course.badge && (
                <span className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  {course.badge}
                </span>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                {course.title}
              </h3>

              {/* Career role */}
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                🎯 <span className="font-semibold">{course.role}</span>
              </p>

              {/* Salary */}
              <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                💰 Avg Salary: {course.salary}
              </p>

              {/* Outcome */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {course.outcome}
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-1">
                  {course.level}
                </span>
                <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-1">
                  {course.duration}
                </span>
                <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-1">
                  {course.mode}
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="relative mt-5">
              <div className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-center text-sm font-semibold text-white group-hover:opacity-90">
                Explore Career Path →
              </div>
            </div>
          </Link>

        ))}
      </div>
    </section>
  );
}
