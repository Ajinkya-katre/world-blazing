import BookDemoForm from "@/components/book-demo/book-demo-form";
import DemoHero from "@/components/book-demo/demo-hero";
import TrustStrip from "@/components/book-demo/trust-strip";

export const metadata = {
  title: "Book Free Demo Class | World Blazing Computer Institute",
  description:
    "Book a free demo class at World Blazing Computer Institute Hadapsar Pune. Learn Python, Full Stack, Data Science & more.",
};

export default function BookDemoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <DemoHero />
      <BookDemoForm />
      <TrustStrip />
    </main>
  );
}
