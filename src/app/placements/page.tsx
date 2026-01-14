import PlacementSection from "@/components/placements-section";

export const metadata = {
  title: "Placements & Student Success",
  description:
    "View placement support, student success stories and career guidance offered by World Blazing Computer Institute in Hadapsar Pune.",
};


export default function Placements() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Placements</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Join our placement program.
      </p>
      <PlacementSection />
    </div>
  );
}
