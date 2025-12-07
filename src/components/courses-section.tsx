"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import coursesData from "@/constants/courses.json";
import type { Course } from "@/lib/interface/courses";

interface CoursesSectionProps {
  courses?: Course[];
  className?: string;
}

export function CoursesSection({
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
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            Job-Oriented IT Courses
          </h2>
          <p className="mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-xl">
            Choose from beginner-friendly to advanced courses designed for real
            industry skills. All courses are available in offline and online modes.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-sm p-5 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <div className="space-y-3">
              {course.badge && (
                <span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-0.5 text-[11px] font-medium text-indigo-600 dark:text-indigo-300">
                  {course.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {course.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">
                {course.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
                <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5">
                  {course.category}
                </span>
                <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5">
                  {course.level}
                </span>
                <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5">
                  {course.duration}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
              <span>{course.mode}</span>
              <span className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-300 group-hover:gap-2 transition-all">
                View details
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3.5L10 8L5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
