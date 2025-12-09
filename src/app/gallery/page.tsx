"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GalleryImage = {
  src: string; // path from public/, e.g. "/gallery/class-1.jpg"
  alt: string;
};

const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/gallery/classroom-1.jpg", alt: "Students attending classroom session" },
  { src: "/gallery/classroom-2.jpg", alt: "Trainer explaining concept on whiteboard" },
  { src: "/gallery/lab-1.jpg", alt: "Students practicing in computer lab" },
  { src: "/gallery/lab-2.jpg", alt: "Hands-on coding practice" },
  { src: "/gallery/event-1.jpg", alt: "Workshop or seminar at institute" },
  { src: "/gallery/event-2.jpg", alt: "Group activity or project discussion" },
  { src: "/gallery/certificates-1.jpg", alt: "Students with certificate after course" },
  { src: "/gallery/certificates-2.jpg", alt: "Certification distribution" },
  { src: "/gallery/faculty-1.jpg", alt: "Trainer guiding student one-to-one" },
  { src: "/gallery/facility-1.jpg", alt: "Institute front desk or reception" },
  // Add more up to 15–20…
];

export default function GallerySection() {
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // So you can easily change/extend later
  const images = useMemo(() => GALLERY_IMAGES, []);

  // Lazy render when section comes into viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // only need once
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      id="gallery"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-300">
            Gallery
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            See the{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              learning environment
            </span>{" "}
            at World Blazing
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Real classrooms, real labs, real students — get a glimpse of how
            training happens at our Hadapsar institute.
          </p>
        </div>

        {/* Grid – only render when in view (lazy) */}
        <div
          className={cn(
            "mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4",
            !isInView && "opacity-0 pointer-events-none"
          )}
        >
          {isInView &&
            images.map((img, index) => (
              <button
                key={img.src + index}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-100/60 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/70"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="pointer-events-none absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="truncate drop-shadow">
                    {truncateText(img.alt, 40)}
                  </span>
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] backdrop-blur">
                    View
                  </span>
                </div>
              </button>
            ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl px-4">
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-6 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close gallery preview"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image container */}
            <div className="relative overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-950 aspect-[16/10]">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Caption + controls */}
            <div className="mt-3 flex items-center justify-between gap-3 text-xs text-neutral-200">
              <p className="flex-1 truncate">{images[activeIndex].alt}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={showPrev}
                  className="inline-flex items-center justify-center rounded-full border border-neutral-600 bg-neutral-900 px-3 py-1 hover:bg-neutral-800"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={showNext}
                  className="inline-flex items-center justify-center rounded-full border border-neutral-600 bg-neutral-900 px-3 py-1 hover:bg-neutral-800"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// helper to keep alt text short in the overlay
function truncateText(str: string, max: number) {
  return str.length > max ? str.slice(0, max - 1) + "…" : str;
}
