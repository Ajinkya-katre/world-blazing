import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
 const testimonials = [
  {
    quote:
      "Monika makes complex data topics feel simple and practical. She guides students from basic Excel and Python all the way to real-world dashboards and data projects, with a strong focus on how analytics is used in companies.",
    name: "Monika Waikar",
    designation:
      "Lead Trainer – Data Science & Data Analytics | Practical, project-focused teaching",
    src: "/monika.png"
  },
  {
    quote:
      "Ajinkya focuses on writing clean code, understanding real project structure and building full-stack apps the way companies expect. Students learn how frontend, backend, databases and deployment all connect in one real product.",
    name: "Ajinkya Katre",
    designation:
      "Full Stack & MERN Stack Trainer | Web development, projects & career guidance",
    src: "/ak.jpg"
  },
  {
    quote:
      "Rohit connects digital marketing theory with live campaign examples. From SEO to Meta and Google Ads, he shows students exactly how brands generate leads, track performance and run result-oriented campaigns.",
    name: "Rahul Agarwal",
    designation:
      "Digital Marketing Trainer | SEO, Ads & Performance Marketing",
    src: "/rahul_agarwal.jpg"
  }
];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
