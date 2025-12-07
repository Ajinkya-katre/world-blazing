"use client";

import { useState } from "react";
import DemoBookingModal from "@/components/floating-book-your-demo";
import CoursesSection from "@/components/courses-section";
import coursesData from "@/constants/courses.json";
import type { Course } from "@/lib/interface/courses";

export default function CoursesPage() {
  const courses = coursesData as Course[];
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen pt-20 pb-16 px-4">

      <DemoBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <CoursesSection courses={courses} />
    </main>
  );
}
