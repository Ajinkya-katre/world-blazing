"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import placementsData from "@/constants/placements.json";
import type { Placement } from "@/lib/interface/placements";
import { cn } from "@/lib/utils";

const placements = placementsData as Placement[];

interface PlacementSectionProps {
  className?: string;
}

export default function PlacementSection({ className }: PlacementSectionProps) {
  // unique course filters
  const courses = useMemo(
    () => ["All", ...Array.from(new Set(placements.map((p) => p.course)))],
    []
  );

  const [selectedCourse, setSelectedCourse] = useState<string>("All");

  const filteredPlacements = useMemo(
    () =>
      selectedCourse === "All"
        ? placements
        : placements.filter((p) => p.course === selectedCourse),
    [selectedCourse]
  );

  // featured = highest package
  const featured = useMemo(
    () =>
      [...placements].sort((a, b) => b.packageLPA - a.packageLPA)[0] as Placement,
    []
  );

  const totalStudents = placements.length;
  const uniqueCompanies = new Set(placements.map((p) => p.company)).size;
  const maxPackage = featured.packageLPA;

  return (
    <section
      className={cn(
        "w-full max-w-6xl mx-auto px-4 py-12 md:py-16",
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
            Placements
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            Recent Student Placements
          </h2>
          <p className="mt-3 text-base md:text-base text-neutral-600 dark:text-neutral-300 max-w-xl">
            Our students have successfully started their careers in top IT
            companies with strong salaries and growth opportunities. Here are
            some of the highlights from our recent batches.
          </p>
        </div>

        {/* quick stats */}
        <div className="grid grid-cols-3 gap-3 text-center text-xs md:text-base">
          <StatPill
            label="Students Placed"
            value={`${totalStudents}+`}
          />
          <StatPill
            label="Hiring Companies"
            value={`${uniqueCompanies}+`}
          />
          <StatPill
            label="Highest Package"
            value={`${maxPackage.toFixed(1)} LPA`}
          />
        </div>
      </div>

      {/* Featured placement */}
      <FeaturedPlacementCard placement={featured} />

      {/* Filters */}
      <div className="mt-10 mb-5 flex flex-wrap gap-2">
        {courses.map((course) => (
          <button
            key={course}
            type="button"
            onClick={() => setSelectedCourse(course)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs md:text-base border transition-all",
              selectedCourse === course
                ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                : "bg-neutral-50 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            {course === "All" ? "All Courses" : course}
          </button>
        ))}
      </div>

      {/* Grid of placements */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlacements.map((p) => (
          <PlacementCard key={p.id} placement={p} />
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────────────────────── COMPONENTS ───────────────────────────────────────── */

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 px-3 py-2 shadow-sm">
      <div className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
        {value}
      </div>
      <div className="mt-1 text-[11px] text-neutral-500 dark:text-neutral-400">
        {label}
      </div>
    </div>
  );
}

function FeaturedPlacementCard({ placement }: { placement: Placement }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-indigo-200/60 dark:border-indigo-500/40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-5 py-5 md:px-8 md:py-6 flex flex-col md:flex-row gap-5 md:items-center shadow-xl">
      {/* glow overlay */}
      <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl" />

      {/* Left - photo */}
      <div className="relative shrink-0 flex items-center gap-4 md:gap-5">
        {/* <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl overflow-hidden border border-white/40 shadow-lg bg-white/5">
          <Image
            src={placement.photo}
            alt={placement.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div> */}
        <div>
          <p className="text-xs uppercase tracking-wide text-white/80">
            Featured Placement
          </p>
          <h3 className="text-lg md:text-xl font-semibold">
            {placement.name}
          </h3>
          <p className="text-xs md:text-base text-white/90">
            {placement.role} @ {placement.company}
          </p>
        </div>
      </div>

      {/* Middle - details */}
      <div className="relative flex-1 text-xs md:text-base space-y-1">
        <p className="font-medium">
          {placement.packageLPA.toFixed(1)} LPA • {placement.location}
        </p>
        <p className="text-white/90">
          Course: <span className="font-medium">{placement.course}</span>
        </p>
        {placement.highlight && (
          <p className="text-white/80 mt-1 md:mt-2 text-[11px] md:text-xs leading-snug">
            {placement.highlight}
          </p>
        )}
      </div>

      {/* Right - badge */}
      <div className="relative flex flex-col items-end justify-between gap-2 text-right">
        <span className="inline-flex items-center rounded-full bg-black/20 px-3 py-1 text-[11px] md:text-xs backdrop-blur">
          2023–{placement.year} Batch Success
        </span>
        <span className="hidden md:inline text-[11px] text-white/80">
          Real placements from our students • Verified by institute
        </span>
      </div>
    </div>
  );
}

function PlacementCard({ placement }: { placement: Placement }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 backdrop-blur-sm p-7 flex gap-4 hover:-translate-y-1 hover:shadow-lg transition-all">
      {/* photo */}
      {/* <div className="relative h-14 w-14 rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shrink-0">
        <Image
          src={placement.photo}
          alt={placement.name}
          fill
          sizes="56px"
          className="object-cover"
        />
      </div> */}

      <div className="flex-1 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
              {placement.name}
            </p>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
              {placement.role} • {placement.company}
            </p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
              {placement.packageLPA.toFixed(1)} LPA
            </div>
            <div className="mt-1 text-[10px] text-neutral-500 dark:text-neutral-400">
              {placement.location}
            </div>
          </div>
        </div>

        <p className="mt-1 text-[11px] text-neutral-600 dark:text-neutral-300 line-clamp-2">
          Course: {placement.course}
        </p>

        <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-500 dark:text-neutral-400">
          <span>Batch {placement.year}</span>
        </div>
      </div>
    </div>
  );
}
