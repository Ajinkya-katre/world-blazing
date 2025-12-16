import { a } from "framer-motion/client";

export const HERO_SECTION_CONTENT = {
  badge: {
    text: 'Welcome to the Future',
  },
  heading: {
    main: 'World Blazing Computer Institute',
    sub: 'Interactive Classroom Training for IT Careers',
  },
  description:
    `World Blazing Computer Institute is a trusted IT training center in Hadapsar, Pune.
     We provide hands-on classroom training in Full Stack Development, Python, Software Testing,
    Data Analytics and Digital Marketing with real projects, expert trainers and placement guidance.`,
  buttons: {
    primary: {
      text: 'Explore Courses',
      href: '/courses',
      ariaLabel: 'Explore our IT courses',
    },
    secondary: {
      text: 'Learn More',
      href: '/about-us',
      ariaLabel: 'Learn more about World Blazing Computer Institute',
    },
  },
  stats: [
    { number: '10+', label: 'Courses' },
    { number: '500+', label: 'Students' },
    { number: '95%', label: 'Success Rate' },
  ],
  scroll: {
    text: 'Scroll to explore',
  },
};

export const HERO_ANIMATION_CONFIG = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  },
  scroll: {
    animate: { y: [0, 10, 0] },
    transition: { duration: 2, repeat: Infinity },
  },
  scrollDot: {
    animate: { y: [0, 5, 0] },
    transition: { duration: 2, repeat: Infinity },
  },
};;

export const HERO_BACKGROUND_BLOBS = [
  {
    position: 'absolute top-20 left-10',
    size: 'w-72 h-72',
    gradient: 'from-blue-400 to-blue-600',
    opacity: 'opacity-20 dark:opacity-10',
    mouseMultiplier: 0.05,
  },
  {
    position: 'absolute bottom-20 right-10',
    size: 'w-72 h-72',
    gradient: 'from-purple-400 to-pink-600',
    opacity: 'opacity-20 dark:opacity-10',
    mouseMultiplier: -0.05,
  },
  {
    position: 'absolute top-1/2 left-1/2',
    size: 'w-96 h-96',
    gradient: 'from-cyan-400 to-blue-600',
    opacity: 'opacity-15 dark:opacity-5',
    mouseMultiplier: 0.03,
  },
];
