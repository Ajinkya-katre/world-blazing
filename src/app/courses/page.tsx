import CoursesSection from "@/components/courses-section";
import FreeDemoCTA from "@/components/free-demo-cta";
import coursesData from "@/constants/courses.json";
import type { Course } from "@/lib/interface/courses";

export default function CoursesPage() {
  const courses = coursesData as Course[];

  return (
    <main className="min-h-screen pt-8 pb-16 px-4">
      <CoursesSection courses={courses} />
      <div className="mt-12 text-center">
        <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Not sure which course is right for you?
        </p>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Book a free counselling session and get a personalized roadmap.
        </p>

        <div className="mt-4 inline-flex">
          <FreeDemoCTA />
        </div>
      </div>

    </main>
  );
}
