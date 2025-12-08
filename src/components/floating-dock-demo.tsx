import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconInfoCircle,
  IconBook,
  IconNews,
  IconUsers,
  IconMail,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About US",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about-us",
    },
    {
      title: "Courses",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/courses",
    },
    {
      title: "Blog",
      icon: (
        <IconNews className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
    },

    {
      title: "Placements",
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/placements",
    },
    {
      title: "Contact Us",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact-us",
    },
  ];
  return (
    <FloatingDock
      mobileClassName="translate-y-15"
      items={links}
    />
  );
}
