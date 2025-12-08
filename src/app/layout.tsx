import type { Metadata } from "next";
import Script from "next/script";
import { Lato } from "next/font/google";
import "./globals.css";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FloatingContactBar from "@/components/floating-bar";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

// ✅ add Metadata type + metadataBase + some OG details
export const metadata: Metadata = {
  metadataBase: new URL("https://worldblazing.com"),
  title:
    "World Blazing Computer Institute • Best IT & Programming Courses in Hadapsar Pune",
  description:
    "World Blazing Computer Institute offers top-rated IT courses in Hadapsar Pune: Full Stack Development, Python, Software Testing, Data Analytics, Digital Marketing and more.",
  keywords: [
    "computer classes in Hadapsar",
    "IT institute Pune",
    "programming classes Pune",
    "full stack course Pune",
    "python classes Hadapsar",
  ],
  openGraph: {
    title:
      "World Blazing Computer Institute – Pune’s Best Software Training Center",
    description:
      "Top-rated software training institute in Hadapsar, Pune for Full Stack, Python, Testing, Data Analytics & more.",
    url: "https://worldblazing.com",
    type: "website",
    images: ["/og/worldblazing.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD schema – use Script with dangerouslySetInnerHTML */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive" // optional but nice for SEO
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "World Blazing Computer Institute",
              image: "https://worldblazing.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "162/A1, Malwadi Rd, Hadapsar Gaon",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                postalCode: "411028",
                addressCountry: "IN",
              },
              telephone: "08237978163",
              url: "https://worldblazing.com",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "218",
              },
            }),
          }}
        />

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BR2WK3HFQF"
          strategy="afterInteractive"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BR2WK3HFQF');
            `,
          }}
        />
      </head>
      <body
        className={`${lato.className} antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors`}
      >
        <ThemeProvider>
          <ThemeToggle />
          <div className="block md:hidden fixed top-2 right-4 z-50">
            <FloatingDockDemo />
          </div>
          <div className="hidden md:fixed md:bottom-0 md:left-0 md:right-0 md:flex md:justify-center md:pb-4 md:z-50">
            <FloatingDockDemo />
          </div>
          {children}
          {/* <FloatingContactBar /> */}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
