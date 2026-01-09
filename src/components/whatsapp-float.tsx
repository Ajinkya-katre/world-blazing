"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function WhatsAppFloat() {
  const phoneNumber = "918459816185"; // your number
  const message =
    "Hi World Blazing Institute, I want details about courses and demo class.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = () => {
    trackEvent({
      event: "whatsapp_click",
      category: "lead",
      label: "floating_whatsapp",
    });
  };

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:scale-105 transition"
      onClick={handleClick}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:block font-medium">
        WhatsApp Us
      </span>
    </Link>
  );
}
