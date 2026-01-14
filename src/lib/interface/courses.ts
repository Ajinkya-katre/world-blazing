export interface CourseChild {
  title: string;
}

export interface Course {
  description: string | null | undefined;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  level: string;
  duration: string;
  mode: string;
  badge?: string;

  // NEW FIELDS
  image?: string;            // e.g. "/images/courses/full-stack.jpg"

  modules?: string[];        // detailed roadmap steps
  tools?: string[];          // tech/tools used in the course

  certification?: string;    // certification text

  jobRoles?: string[];       // possible roles after course
  emiOptions?: string;       // EMI info text
  salaryRange?: string;      // salary band description

  whoCanJoin?: string[];     // target audience bullet points

  children?: CourseChild[];  // small “includes” list (existing)
  salary: string;          // average salary info
  role: string;            // career role
  outcome: string;         // learning outcome

  // Optional: if you want to add pricing later
  // price?: string;
}
