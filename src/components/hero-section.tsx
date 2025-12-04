'use client';

import { motion } from 'motion/react';
import { IconArrowRight, IconSparkles } from '@tabler/icons-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  HERO_SECTION_CONTENT,
  HERO_ANIMATION_CONFIG,
  HERO_BACKGROUND_BLOBS,
} from '@/constants/hero-section';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = HERO_ANIMATION_CONFIG.container;
  const itemVariants = HERO_ANIMATION_CONFIG.item;

  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        {HERO_BACKGROUND_BLOBS.map((blob, idx) => (
          <motion.div
            key={idx}
            className={`${blob.position} ${blob.size} bg-gradient-to-br ${blob.gradient} rounded-full mix-blend-multiply filter blur-3xl ${blob.opacity}`}
            animate={{
              x: mousePosition.x * blob.mouseMultiplier,
              y: mousePosition.y * blob.mouseMultiplier,
            }}
            transition={{ type: 'spring', damping: 10, mass: 0.1 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="my-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 border border-blue-200 dark:border-neutral-700">
              <IconSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {HERO_SECTION_CONTENT.badge.text}
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="block text-neutral-900 dark:text-white">
              {HERO_SECTION_CONTENT.heading.main}
            </span>
            <span className="block bg-gradient-to-r py-2 from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              {HERO_SECTION_CONTENT.heading.sub}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {HERO_SECTION_CONTENT.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href={HERO_SECTION_CONTENT.buttons.primary.href}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
              >
                {HERO_SECTION_CONTENT.buttons.primary.text}
                <IconArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href={HERO_SECTION_CONTENT.buttons.secondary.href}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
              >
                {HERO_SECTION_CONTENT.buttons.secondary.text}
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
          >
            {HERO_SECTION_CONTENT.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
