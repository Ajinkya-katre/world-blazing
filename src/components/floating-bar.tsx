"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "918459816185"; // no + and no spaces
const WHATSAPP_TEXT =
  "Hi World Blazing, I want course details and counselling.";

export default function FloatingContactBar() {
  const pathname = usePathname();

  // Optional: hide on contact page if needed
  if (pathname === "/contact-us" || pathname === "/contact") {
    return null;
  }

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_TEXT
  )}`;

  return (
    <div className="fixed bottom-4 right-4 z-1 flex flex-col gap-2 md:gap-3 md:flex-col">
      {/* Book Free Demo */}
      <Link
        href="/contact-us?type=demo"
        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-xs md:text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-colors"
      >
        🎓 Book Free Demo
      </Link>

      {/* WhatsApp */}
      <Link
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-emerald-500 px-3 py-2 text-xs md:text-base font-semibold text-white shadow-lg hover:bg-emerald-400 transition-colors"
      >
        🟢 WhatsApp
      </Link>

      {/* Call now */}
      <a
        href="tel:+918459816185" 
        className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-2 text-xs md:text-base font-semibold text-white shadow-lg hover:bg-neutral-800 transition-colors dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
      >
        📞 Call Now
      </a>
    </div>
  );
}
