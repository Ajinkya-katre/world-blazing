export interface CourseChild {
  title: string;
}

export interface Course {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  level: string;
  duration: string;
  mode: string;
  badge?: string;
  children?: CourseChild[];
}
