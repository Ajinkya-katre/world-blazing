"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import coursesData from "@/constants/courses.json";
import type { Course } from "@/lib/interface/courses";

const courses = coursesData as Course[];

export default function CourseDetailPage() {
    const params = useParams<{ slug: string }>();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        return (
            <main className="min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl font-semibold mb-2">Course not found</h1>
                <p className="text-neutral-500 mb-4">
                    The course you are looking for does not exist or has been removed.
                </p>
                <Link
                    href="/courses"
                    className="text-sm text-indigo-600 dark:text-indigo-300 underline"
                >
                    Back to all courses
                </Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Top header + image */}
                <section className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
                    <div>
                        <p className="text-xs uppercase tracking-wide text-indigo-500 mb-2">
                            Course
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
                            {course.title}
                        </h1>
                        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 mb-4 max-w-2xl">
                            {course.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4 text-xs">
                            <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-neutral-700 dark:text-neutral-200">
                                {course.category}
                            </span>
                            {course.level && (
                                <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-neutral-700 dark:text-neutral-200">
                                    Level: {course.level}
                                </span>
                            )}
                            {course.duration && (
                                <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-neutral-700 dark:text-neutral-200">
                                    Duration: {course.duration}
                                </span>
                            )}
                            {course.mode && (
                                <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-neutral-700 dark:text-neutral-200">
                                    Mode: {course.mode}
                                </span>
                            )}
                            {course.badge && (
                                <span className="rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200 px-3 py-1 text-[11px] font-semibold">
                                    {course.badge}
                                </span>
                            )}
                        </div>

                        {/* Primary CTAs */}
                        <div className="flex flex-wrap gap-3 mt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
                            >
                                Enroll Now / Enquire
                            </Link>
                            <Link
                                href="/courses"
                                className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            >
                                Back to all courses
                            </Link>
                        </div>
                    </div>

                    {/* Course image / visual */}
                    <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/60 shadow-sm min-h-[220px]">
                        {course.image ? (
                            <img
                                src={course.image}
                                alt={course.title}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="h-full w-full flex items-center justify-center text-sm text-neutral-500 dark:text-neutral-400">
                                Course preview coming soon
                            </div>
                        )}
                    </div>
                </section>

                {/* What this course includes (old children list) */}
                {course.children && course.children.length > 0 && (
                    <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-5 sm:p-6">
                        <h2 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-50">
                            What this course includes
                        </h2>
                        <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-200 space-y-1">
                            {course.children.map((child, index: number) => (
                                <li key={index}>{child.title}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Roadmap-style Modules */}
                {course.modules && course.modules.length > 0 && (
                    <section>
                        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                            Course Modules (Step-by-step roadmap)
                        </h2>
                        <ol className="grid gap-3 sm:grid-cols-2">
                            {course.modules.map((m, idx) => (
                                <li
                                    key={idx}
                                    className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-4 text-sm text-neutral-700 dark:text-neutral-200"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-semibold text-white">
                                            {idx + 1}
                                        </div>
                                        <p>{m}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>
                )}

                {/* Tools and tech */}
                {(course.tools || course.certification) && (
                    <section className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
                        {course.tools && course.tools.length > 0 && (
                            <div>
                                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                                    Tools & Technologies you will work with
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {course.tools.map((tool, idx) => (
                                        <span
                                            key={idx}
                                            className="rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 px-3 py-1 text-xs text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {course.certification && (
                            <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/60 px-4 py-4 text-sm text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-900/30 dark:text-emerald-100">
                                <h3 className="text-sm font-semibold mb-1">
                                    Certification you receive
                                </h3>
                                <p>{course.certification}</p>
                            </div>
                        )}
                    </section>
                )}

                {/* Job roles + Salary + EMI */}
                {(course.jobRoles || course.salaryRange || course.emiOptions) && (
                    <section className="grid gap-6 md:grid-cols-2">
                        {course.jobRoles && course.jobRoles.length > 0 && (
                            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-5">
                                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                                    Job roles you can target
                                </h2>
                                <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-200 space-y-1">
                                    {course.jobRoles.map((role, idx) => (
                                        <li key={idx}>{role}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="space-y-4">
                            {course.salaryRange && (
                                <div className="rounded-2xl border border-indigo-200/70 bg-indigo-50/60 px-4 py-4 text-sm text-indigo-900 dark:border-indigo-800/60 dark:bg-indigo-900/30 dark:text-indigo-100">
                                    <h3 className="text-sm font-semibold mb-1">
                                        Expected fresher salary range
                                    </h3>
                                    <p>{course.salaryRange}</p>
                                </div>
                            )}
                            {course.emiOptions && (
                                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 px-4 py-4 text-sm text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
                                    <h3 className="text-sm font-semibold mb-1">EMI options</h3>
                                    <p>{course.emiOptions}</p>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Who can join */}
                {course.whoCanJoin && course.whoCanJoin.length > 0 && (
                    <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-5">
                        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                            Who is this course ideal for?
                        </h2>
                        <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-200 space-y-1">
                            {course.whoCanJoin.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Bottom CTA */}
                <section className="flex flex-wrap gap-3 justify-between items-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-5 text-white">
                    <div className="max-w-md">
                        <h2 className="text-lg font-semibold mb-1">
                            Ready to start the {course.title} journey?
                        </h2>
                        <p className="text-xs md:text-sm text-indigo-50">
                            Talk to our counselor, understand fees and EMI options, and book
                            your seat for the next batch.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs md:text-sm font-semibold text-indigo-700 hover:bg-neutral-100"
                        >
                            Enroll / Book Counseling
                        </Link>
                        <Link
                            href="tel:08237978163"
                            className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2 text-xs md:text-sm font-semibold text-white hover:bg-white/10"
                        >
                            Call Institute
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
