import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
 const testimonials = [
  {
    quote:
      "Monika makes complex data topics feel simple and practical. She guides students from basic Excel and Python all the way to real-world dashboards and data projects, with a strong focus on how analytics is used in companies.",
    name: "Monika Waikar",
    designation:
      "Lead Trainer – Data Science & Data Analytics | Practical, project-focused teaching",
    src: "/images/monika.png"
  },
  {
    quote:
      "Rahul connects digital marketing theory with live campaign examples. From SEO to Meta and Google Ads, he shows students exactly how brands generate leads, track performance and run result-oriented campaigns.",
    name: "Rahul Agarwal",
    designation:
      "Digital Marketing Trainer | SEO, Ads & Performance Marketing",
    src: "/images/rahul_agarwal.jpg"
  }
];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
