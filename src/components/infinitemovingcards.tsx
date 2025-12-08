"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { Review } from "../constants/reviews";
import { studentReviews } from "../constants/reviews";

interface InfiniteMovingCardsProps {
  items?: Review[]; // defaults to studentReviews
  initialDirection?: "left" | "right";
  initialSpeed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Automatic Infinite Moving Cards (no controls).
 * Starts automatically on mount. Use props to change defaults.
 */
export default function InfiniteMovingCards({
  items = studentReviews,
  initialDirection = "left",
  initialSpeed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const scrollerRef = React.useRef<HTMLUListElement | null>(null);

  const [running, setRunning] = useState(false);
  const [direction] = useState<"left" | "right">(initialDirection);
  const [speed] = useState<"fast" | "normal" | "slow">(initialSpeed);
  const [hoverPause] = useState(Boolean(pauseOnHover));

  // stable items to avoid re-renders causing duplication
  const stableItems = useMemo(() => items ?? [], [items]);

  // apply CSS variables onto container for speed/direction/play-state
  const applyVars = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--scroll-direction", direction === "left" ? "normal" : "reverse");
    const dur = speed === "fast" ? "18s" : speed === "normal" ? "36s" : "70s";
    el.style.setProperty("--scroll-duration", dur);
    el.style.setProperty("--scroll-play-state", running ? "running" : "paused");
  }, [direction, speed, running]);

  // duplicate children once (hydration-safe)
  const duplicateOnce = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || scroller.dataset.duplicated === "true") return;

    const children = Array.from(scroller.children);
    children.forEach((child) => scroller.appendChild(child.cloneNode(true)));
    scroller.dataset.duplicated = "true";
  }, []);

  // init: duplicate and apply vars; reapply on image load
  useEffect(() => {
    duplicateOnce();
    applyVars();

    const scroller = scrollerRef.current;
    if (!scroller) return;
    const imgs = Array.from(scroller.querySelectorAll("img"));
    const onImgLoad = () => applyVars();
    imgs.forEach((img) => img.addEventListener("load", onImgLoad));
    return () => imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
  }, [duplicateOnce, applyVars]);

  // start animation on mount (hydration-safe)
  useEffect(() => {
    // schedule to avoid sync setState inside mount effect in StrictMode
    Promise.resolve().then(() => setRunning(true));
  }, []);

  // update css vars when running/direction/speed change
  useEffect(() => {
    applyVars();
  }, [applyVars]);

  return (
    <div className={cn("w-full mx-auto", className)}>
      <div
        ref={containerRef}
        className={cn(
          "relative overflow-hidden rounded-2xl ",
          "shadow-sm",
          hoverPause ? "group" : ""
        )}
        // stable defaults for SSR hydration
        style={
          {
            ["--scroll-direction"]: "normal",
            ["--scroll-duration"]: "36s",
            ["--scroll-play-state"]: "running",
          } as React.CSSProperties
        }
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full items-stretch gap-4 py-6 px-6",
            running ? "infinite-scroll" : "infinite-scroll paused",
            hoverPause ? "group-hover:[animation-play-state:paused]" : ""
          )}
        >
          {stableItems.map((it, idx) => (
            <li
              key={`${it.name}-${idx}`}
              className="flex min-w-[280px] max-w-[380px] flex-col gap-3 rounded-xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 px-5 py-4 shadow-sm dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
            >
              <div className="flex items-center gap-3">
                {it.avatar ? (
                  <img
                    src={it.avatar}
                    alt={it.name}
                    className="h-10 w-10 rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-sm font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                    {it.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    {it.name}
                  </p>
                  {it.title && (
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{it.title}</p>
                  )}
                </div>
              </div>

              <blockquote className="text-sm text-neutral-700 dark:text-neutral-200 line-clamp-6">
                “{it.quote}”
              </blockquote>

              <div className="mt-auto flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span>Student review</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Component-local CSS (keyframes + utility) */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .infinite-scroll {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--scroll-duration, 36s);
          animation-direction: var(--scroll-direction, normal);
          animation-play-state: var(--scroll-play-state, running);
          display: flex;
          will-change: transform;
        }
        .infinite-scroll.paused {
          animation-play-state: paused !important;
        }
        @media (min-width: 1024px) {
          .infinite-scroll li {
            min-width: 340px;
            max-width: 420px;
          }
        }

        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
