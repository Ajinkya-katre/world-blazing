"use client";

import { motion } from "motion/react";
import { IconArrowRight, IconSparkles } from "@tabler/icons-react";
import { SparklesText } from "@/components/ui/sparkles-text"
import Link from "next/link";
import { useEffect, useState } from "react";
import { Highlighter } from "@/components/ui/highlighter"

import {
  HERO_SECTION_CONTENT,
  HERO_ANIMATION_CONFIG,
  HERO_BACKGROUND_BLOBS,
} from "@/constants/hero-section";

import CountUp from "./CountUp";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 768 : false);
  const [reduceMotion, setReduceMotion] = useState(() => typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false);

  /* ---------------------------------------------
   Detect device + reduced motion
  ---------------------------------------------- */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------------------------------------
   Mouse tracking only for desktop
  ---------------------------------------------- */
  useEffect(() => {
    if (isMobile || reduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, reduceMotion]);

  const containerVariants = HERO_ANIMATION_CONFIG.container;
  const itemVariants = HERO_ANIMATION_CONFIG.item;

  return (
    <section className="relative py-2 min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      {/* ---------------------------------------------
       Animated Background (Desktop Only)
      ---------------------------------------------- */}
      {!isMobile && !reduceMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {HERO_BACKGROUND_BLOBS.map((blob, idx) => (
            <motion.div
              key={idx}
              className={`${blob.position} ${blob.size} rounded-full bg-gradient-to-br ${blob.gradient} opacity-30 blur-3xl`}
              animate={{
                x: mousePosition.x * blob.mouseMultiplier,
                y: mousePosition.y * blob.mouseMultiplier,
              }}
              transition={{ type: "spring", damping: 12, mass: 0.15 }}
            />
          ))}
        </div>
      )}

      {/* ---------------------------------------------
       Content
      ---------------------------------------------- */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={!isMobile ? containerVariants : undefined}
          initial={!isMobile ? "hidden" : false}
          animate={!isMobile ? "visible" : false}
        >
          {/* Badge */}
          <motion.div variants={!isMobile ? itemVariants : undefined} className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 dark:border-neutral-700 dark:from-neutral-900 dark:to-neutral-800">
              <IconSparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {HERO_SECTION_CONTENT.badge.text}
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={!isMobile ? itemVariants : undefined}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block text-neutral-900 dark:text-white">
              <SparklesText sparklesCount={30}>
              {HERO_SECTION_CONTENT.heading.main}
              </SparklesText>
            </span>
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {HERO_SECTION_CONTENT.heading.sub}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={!isMobile ? itemVariants : undefined}
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg"
          >
            {HERO_SECTION_CONTENT.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={!isMobile ? itemVariants : undefined}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href={HERO_SECTION_CONTENT.buttons.primary.href}>
                <motion.button
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all"
                aria-label={HERO_SECTION_CONTENT.buttons.primary.ariaLabel}
                >
                {HERO_SECTION_CONTENT.buttons.primary.text}
                <IconArrowRight className="h-5 w-5" aria-hidden="true" />
                
                </motion.button>
            </Link>

            <Link href={HERO_SECTION_CONTENT.buttons.secondary.href}>
              <motion.button
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border-2 border-neutral-300 px-8 py-3 font-semibold text-neutral-900 transition-all hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
                aria-label={HERO_SECTION_CONTENT.buttons.secondary.ariaLabel}
              >
                {HERO_SECTION_CONTENT.buttons.secondary.text}
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={!isMobile ? itemVariants : undefined}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {HERO_SECTION_CONTENT.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={!isMobile ? { y: -5 } : undefined}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
              >
                  <CountUp
                    from={0}
                    to={typeof stat.number === 'string' ? parseInt(stat.number, 10) : stat.number}
                    duration={1}
                    className="mb-2 text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  />

                <div className="font-medium text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <p className="absolute bottom-4 w-full text-center text-lg text-white px-4">
  {" "}
  <Highlighter action="underline" color="#FF9800">
    You don’t need more time.
  </Highlighter>{" "}
    You need{" "} 
  <Highlighter action="highlight" color="#8BC34A">
    one decision
  </Highlighter>{" "}
  — call now.
</p>

    </section>
  );
}
