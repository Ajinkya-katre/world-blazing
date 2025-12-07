import type { Metadata } from "next";
import coursesData from "@/constants/courses.json";
import type { Course } from "@/lib/interface/courses";
import { CoursesSection } from "@/components/courses-section";

export const metadata: Metadata = {
  title: "Courses • World Blazing Computer Institute",
  description:
    "Browse all job-oriented IT courses at World Blazing Computer Institute in Hadapsar Pune – Full Stack, Python, Software Testing, Data Analytics and more.",
};

export default function CoursesPage() {
  const courses = coursesData as Course[];

  return (
    <main className="min-h-screen pt-8 pb-16">
      <CoursesSection courses={courses} />
    </main>
  );
}
