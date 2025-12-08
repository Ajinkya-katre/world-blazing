import CoursesSection from "@/components/courses-section";
import coursesData from "@/constants/courses.json";
import type { Course } from "@/lib/interface/courses";

export default function CoursesPage() {
  const courses = coursesData as Course[];

  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <CoursesSection courses={courses} />
    </main>
  );
}
