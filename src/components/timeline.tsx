"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import timelineData from "@/constants/timeline.json";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  list?: string[];
  images?: string[];
}

export default function TimelineSection() {
  const data = (timelineData as TimelineItem[]).map((item) => ({
    title: item.year,
    content: (
      <div>
        <h3 className="mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-100">
          {item.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-base">
          {item.description}
        </p>

        {item.list && (
          <ul className="mb-4 list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 md:text-base">
            {item.list.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        {item.images && (
          <div className="grid grid-cols-2 gap-4">
            {item.images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`World Blazing ${item.year}`}
                width={500}
                height={300}
                loading="lazy"
                className="h-24 w-full rounded-lg object-cover shadow md:h-44 lg:h-60"
              />
            ))}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <section className="relative w-full overflow-hidden py-16">
      <Timeline data={data} />
    </section>
  );
}
