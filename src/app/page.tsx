import { HeroSection } from "@/components/hero-section";
import { AnimatedTestimonialsDemo } from "@/components/testimonials";
import InfiniteMovingCards from "@/components/infinitemovingcards";
import { studentReviews } from "@/constants/reviews";

export default function Page() {
  return (
    <>
      <HeroSection />
      <section className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-5xl text-center font-bold text-neutral-800 dark:text-neutral-200">
          Testimonials
        </h2>
        <AnimatedTestimonialsDemo />
      </section>
      <section className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-5xl text-center font-bold text-neutral-800 dark:text-neutral-200">
          What Our Students Say
        </h2>
        <InfiniteMovingCards items={studentReviews} />
      </section>
    </>
  );
}
