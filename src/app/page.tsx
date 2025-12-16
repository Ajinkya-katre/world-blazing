import { HeroSection } from "@/components/hero-section";
import { AnimatedTestimonialsDemo } from "@/components/testimonials";
import InfiniteMovingCards from "@/components/infinitemovingcards";
import { studentReviews } from "@/constants/reviews";
import CoursesPage from "./courses/page";
import FAQSection from "@/components/faq-section";
import HomeAboutSection from "@/components/home-about-section";
import PlacementLogosSection from "@/components/placement-section";
import FreeDemoCTA from "@/components/free-demo-cta";
import ReviewSources from "@/components/review-sources";

export default function Page() {
  return (
    <>
      <HeroSection />
      <FreeDemoCTA />
      <HomeAboutSection />
      <ReviewSources />
      <CoursesPage />
      <PlacementLogosSection />
      <section className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-5xl text-center font-bold text-neutral-800 dark:text-neutral-200">
          Meet Your Trainers
        </h2>
        <AnimatedTestimonialsDemo />
      </section>
      <section className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-5xl text-center font-bold text-neutral-800 dark:text-neutral-200">
          What Our Students Say
        </h2>
        <InfiniteMovingCards items={studentReviews} />
      </section>
      <FAQSection />
    </>
  );
}
