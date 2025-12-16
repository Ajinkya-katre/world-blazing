'use client';

import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(
  () => import('@/components/theme-toggle').then(m => m.ThemeToggle),
  { ssr: false }
);

export default function ThemeToggleClient() {
  return <ThemeToggle />;
}
