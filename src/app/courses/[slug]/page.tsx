'use client';
import { useParams } from 'next/navigation';
import coursesData from "@/constants/courses.json";
import type { Course } from "@/lib/interface/courses";
import Link from "next/link";

const courses = coursesData as Course[];

export default function CourseDetailPage() {
    const params = useParams();

    const course = courses.find((c) => c.slug === params.slug);

    if (!course) {
        return (
            <main className="min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl font-semibold mb-2">
                    Course not found
                </h1>
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
        <main className="min-h-screen pt-20 pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <p className="text-xs uppercase tracking-wide text-indigo-500 mb-2">
                    Course
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
                    {course.title}
                </h1>
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 mb-4 max-w-2xl">
                    {course.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 text-xs">
                    <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-neutral-700 dark:text-neutral-200">
                        {course.category}
                    </span>
                    <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-neutral-700 dark:text-neutral-200">
                        Level: {course.level}
                    </span>
                    <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-neutral-700 dark:text-neutral-200">
                        Duration: {course.duration}
                    </span>
                    <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-neutral-700 dark:text-neutral-200">
                        Mode: {course.mode}
                    </span>
                </div>

                {course.children && course.children.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-50">
                            What this course includes
                        </h2>
                        <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-200 space-y-1">
                            {course.children.map((child, index) => (
                                <li key={index}>{child.title}</li>
                            ))}
                        </ul>
                    </section>
                )}

                <section className="mt-8 flex flex-wrap gap-3">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
                    >
                        Enquire for this course
                    </Link>
                    <Link
                        href="/courses"
                        className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                        Back to all courses
                    </Link>
                </section>
            </div>
        </main>
    );
}
