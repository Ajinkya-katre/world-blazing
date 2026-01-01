'use client';

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

/* ================= TYPES ================= */

type DockItem = {
  title: string;
  icon: React.ReactNode;
  href?: string;
  children?: DockItem[];
};

/* ================= ROOT ================= */

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

/* ================= MOBILE ================= */

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-4 right-4 z-50 md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full right-0 mt-2 w-64 rounded-2xl border bg-white shadow-xl dark:bg-neutral-900 dark:border-neutral-800 overflow-hidden"
          >
            {items.map((item) => (
              <div key={item.title} className="border-b last:border-none dark:border-neutral-800">
                {/* Parent */}
                <button
                  onClick={() =>
                    item.children
                      ? setExpanded(expanded === item.title ? null : item.title)
                      : setOpen(false)
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4">{item.icon}</div>
                    {item.href ? (
                      <Link href={item.href}>{item.title}</Link>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </div>
                  {item.children && (
                    <IconChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        expanded === item.title && "rotate-90"
                      )}
                    />
                  )}
                </button>

                {/* Children */}
                <AnimatePresence>
                  {item.children && expanded === item.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-neutral-50 dark:bg-neutral-950"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href!}
                          onClick={() => setOpen(false)}
                          className="block px-8 py-2 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        aria-label="Toggle navigation menu"
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800 shadow-lg"
      >
        <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-500" />
      </button>
    </div>
  );
};

/* ================= DESKTOP ================= */

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 dark:bg-neutral-900",
        className
      )}
    >
      {items.map((item) =>
        item.children ? (
          <DesktopDropdown key={item.title} item={item} mouseX={mouseX} />
        ) : (
          <IconContainer key={item.title} mouseX={mouseX} {...item} />
        )
      )}
    </motion.div>
  );
};

/* ================= DESKTOP DROPDOWN ================= */

function DesktopDropdown({
  item,
  mouseX,
}: {
  item: DockItem;
  mouseX: MotionValue;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <IconContainer mouseX={mouseX} {...item} />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 rounded-xl border bg-white shadow-lg dark:bg-neutral-900 dark:border-neutral-800"
          >
            {item.children?.map((child) => (
              <Link
                key={child.title}
                href={child.href!}
                className="block px-4 py-3 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {child.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================= ICON ================= */

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const size = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 80, 40]),
    { stiffness: 150, damping: 12 }
  );

  const iconSize = useSpring(
    useTransform(distance, [-150, 0, 150], [20, 40, 20]),
    { stiffness: 150, damping: 12 }
  );

  const content = (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
    >
      <motion.div style={{ width: iconSize, height: iconSize }}>
        {icon}
      </motion.div>
    </motion.div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
