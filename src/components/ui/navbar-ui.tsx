'use client'
import Link from 'next/link';
import React from 'react';
import {
  IconHome,
  IconInfoCircle,
  IconBook,
  IconNews,
  IconUsers,
  IconMail,
  IconPhoneCall,
  IconSun,
  IconMoon,
} from '@tabler/icons-react';
import { useTheme } from '@/providers/theme-provider';
import Image from 'next/image';
import Logo from '../../../public/images/wb-logo.png';

type DropdownItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

type NavItem = {
  title: string;
  href?: string;
  icon: React.ReactNode;
  children?: DropdownItem[];
};

const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: 'About US',
    href: '/about-us',
    icon: (
      <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: 'Courses',
    href: '/courses',
    icon: (
      <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: 'Gallery',
    href: '/gallery',
    icon: (
      <IconNews className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: (
      <IconNews className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: 'Placements',
    href: '/placements',
    icon: (
      <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
];

export const NavbarUi = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 shadow-sm backdrop-blur backdrop-saturate-150 dark:border-neutral-800 dark:bg-neutral-950/95 transition-colors">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-6 lg:px-12 xl:px-24">
        <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold text-zinc-950 dark:text-white">
          <Image
            src={Logo}
            alt="World Blazing Logo"
            width={52}
            height={52}
          />
          World Blazing
        </Link>

      <div className="hidden md:flex items-center gap-2">
        {navItems.map((item) => (
          <div key={item.title} className="relative group">
            {item.children ? (
              <>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-600 dark:text-neutral-200 transition hover:bg-zinc-50 dark:hover:bg-neutral-900 dark:hover:text-white"
                >
                  <span className="h-4 w-4 text-neutral-500 dark:text-neutral-300">{item.icon}</span>
                  {item.title}
                </button>
                <div className="invisible absolute left-0 top-full mt-2 hidden min-w-[220px] flex-col gap-1 rounded-3xl border border-zinc-200 bg-white p-2 shadow-lg transition duration-150 group-hover:flex group-hover:visible dark:border-neutral-800 dark:bg-neutral-900">
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.href}
                      className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-900 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >
                      <span className="h-4 w-4 text-neutral-500 dark:text-neutral-300">{child.icon}</span>
                      {child.title}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={item.href ?? '#'}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-600 dark:text-neutral-200 transition hover:bg-zinc-50 dark:hover:bg-neutral-900 dark:hover:text-white"
              >
                <span className="h-4 w-4 text-neutral-500 dark:text-neutral-300">{item.icon}</span>
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-2">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
        >
          {theme === 'dark' ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
        </button>

        <Link className="inline-flex items-center gap-2.5 bg-gradient-to-r from-zinc-950 to-zinc-500 text-zinc-50 text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-95 border-0"
          href="tel:+918459816185"
        >
          <IconPhoneCall className="h-4 w-4" />
          Call Now
          <span className="h-7 w-7 rounded-full bg-white flex items-center justify-center text-zinc-950">
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#3f3f47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>

      <button
        onClick={() => setMenuOpen((current) => !current)}
        className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-0"
        aria-label="Toggle mobile menu"
      >
        <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-neutral-950 border-t border-zinc-200 dark:border-neutral-800 p-5 gap-3 md:hidden z-50">
          {navItems.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((current) => !current)}
                    className="flex items-center justify-between w-full rounded-2xl bg-zinc-50 px-4 py-3 text-left text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 text-neutral-500 dark:text-neutral-300">{item.icon}</span>
                      {item.title}
                    </span>
                    <span className="text-zinc-400 dark:text-neutral-400">{servicesOpen ? '−' : '+'}</span>
                  </button>
                  {servicesOpen && (
                    <div className="space-y-2 px-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={closeMobileMenu}
                          className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-50 dark:text-neutral-200 dark:hover:bg-neutral-800"
                        >
                          <span className="h-4 w-4 text-neutral-500 dark:text-neutral-300">{child.icon}</span>
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href ?? '#'}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-50 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  <span className="h-4 w-4 text-neutral-500 dark:text-neutral-300">{item.icon}</span>
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center gap-2 rounded-2xl bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            {theme === 'dark' ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>

          <a
            href="tel:+918459816185"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            <IconPhoneCall className="h-4 w-4" />
            Call Now
          </a>

        </div>
      )}
      </div>
    </nav>
  );
};
