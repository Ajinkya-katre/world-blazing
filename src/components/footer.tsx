"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 pt-10 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Branding */}
          <div>
            <Image
              src="/images/wb-logo.png"
              alt="World Blazing Logo"
              width={200}
              height={200}
              className="mb-4"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-base text-neutral-600 dark:text-neutral-400">
                <li><Link href="/about-us" className="hover:text-indigo-500" aria-label="About Us">About Us</Link></li>
                <li><Link href="/courses" className="hover:text-indigo-500" aria-label="Courses">Courses</Link></li>
                <li><Link href="/gallery" className="hover:text-indigo-500" aria-label="Gallery">Gallery</Link></li>
                <li><Link href="/blog" className="hover:text-indigo-500" aria-label="Blog">Blog</Link></li>
                <li><Link href="/placements" className="hover:text-indigo-500" aria-label="Placements">Placements</Link></li>
                <li><Link href="/contact-us" className="hover:text-indigo-500" aria-label="Contact Us">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-base text-neutral-600 dark:text-neutral-400">
              <li className="flex items-center gap-2"><Phone size={14}/> +91 8459816185</li>
              <li className="flex items-center gap-2"><Mail size={14}/> worldblazinginstitute@gmail.com</li>
              <li>Pune, Maharashtra</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              Follow Us
            </h3>
            <div className="flex gap-3 text-neutral-600 dark:text-neutral-400">
                <a href="https://www.instagram.com/worldblazing_computer_solution" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500" aria-label="Follow us on Instagram"><Instagram size={18} /></a>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-6"></div>

        {/* Bottom text */}
        <div className="flex flex-col sm:flex-row justify-between text-xs text-neutral-500 dark:text-neutral-400 text-center sm:text-left gap-2">

          <p>
            © 2025 World Blazing — All Rights Reserved.
          </p>

          <p>
            Made in India by <span className="font-large text-neutral-700 dark:text-neutral-300">Ajinkya Katre ❤️</span>
          </p>

        </div>

      </div>
    </footer>
  );
}
