import { Award, CheckCircle2, Star } from "lucide-react";
import homeAbout from "@/constants/home-about.json";

interface HomeAboutData {
  mission: {
    badge: string;
    text: string;
  };
  different: {
    title: string;
    intro: string;
    points: string[];
  };
  results: {
    title: string;
    intro: string;
    stats: { label: string; value: string }[];
    disclaimer: string;
  };
  awards: {
    badge: string;
    items: string[];
  };
}

const data = homeAbout as HomeAboutData;

export default function HomeAboutSection() {
  return (
    <section className="w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Our Mission */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-1 text-[11px] font-medium text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-900/30 dark:text-indigo-200 mb-3">
            <span className="mr-1">🚀</span>
            {data.mission.badge}
          </div>

          <div className="rounded-2xl border border-neutral-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70">
            <p className="text-base md:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed">
              {data.mission.text}
            </p>
          </div>
        </div>

        {/* 2-column: Different + Results */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* What makes us different */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
              {data.different.title}
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-300 mb-4">
              {data.different.intro}
            </p>

            <ul className="space-y-3 text-base text-neutral-700 dark:text-neutral-200">
              {data.different.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results & success stories */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
              {data.results.title}
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-300 mb-5">
              {data.results.intro}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-5">
              {data.results.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-neutral-200/80 bg-white/80 px-4 py-3 text-base shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80"
                >
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </p>
                  <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {data.results.disclaimer}
            </p>
          </div>
        </div>

        {/* Awards & recognition badges */}
        <div className="mt-4 rounded-2xl border border-neutral-200/80 bg-gradient-to-r from-neutral-50 via-white to-neutral-50 px-4 py-4 shadow-sm dark:border-neutral-800 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-[16px] font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-200">
              <Award className="h-3 w-3" />
              {data.awards.badge}
            </div>

            <div className="flex flex-wrap gap-3 text-[16px] text-neutral-600 dark:text-neutral-300">
              {data.awards.items.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1 dark:border-neutral-700 dark:bg-neutral-900"
                >
                  {idx === 0 && <Star className="h-3 w-3 text-yellow-400" />}
                  {idx === 1 && <Award className="h-3 w-3 text-indigo-400" />}
                  {idx === 2 && (
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  )}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
