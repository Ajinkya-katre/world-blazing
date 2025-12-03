'use client';

import { useTheme } from '@/providers/theme-provider';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { motion } from 'motion/react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-40 flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 dark:bg-neutral-800 shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <IconMoon className="h-5 w-5 text-neutral-700" />
        ) : (
          <IconSun className="h-5 w-5 text-yellow-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
