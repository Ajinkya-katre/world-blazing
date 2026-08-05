import  TimelineSection  from "@/components/timeline";

export const metadata = {
  title: "About Us",
  description:
    "Learn about World Blazing Programming Institute, our mission, expert trainers, classroom teaching approach and commitment to building successful IT careers in Pune.",
};


export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Welcome to World Blazing Programming Solution — your trusted place to learn programmings, coding, and modern IT skills in Hadapsar, Pune!
      </p>
      <TimelineSection />
    </div>
  );
}
