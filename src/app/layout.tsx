import Script from "next/script";
import { Lato } from "next/font/google";
import "./globals.css";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { ThemeProvider } from "@/providers/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import ThemeToggleClient from "@/components/theme-toggle.client";

/* ---------------- FONT ---------------- */
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

/* ---------------- SEO METADATA ---------------- */
export const metadata = {
  metadataBase: new URL("https://www.worldblazing.com"),

  title: "World Blazing Computer Institute | Best IT Courses in Hadapsar Pune",
  description:
    "World Blazing Computer Institute offers job-oriented IT courses in Hadapsar Pune. Full Stack, Python, Software Testing, Data Analytics, Digital Marketing with placements.",

  keywords: [
    "World Blazing Computer Institute",
    "IT courses in Hadapsar",
    "IT institute in Pune",
    "Full Stack Development course Pune",
    "Python training Pune",
    "Software Testing classes Pune",
    "Data Analytics course Pune",
    "Digital Marketing course Pune",
    "Computer classes in Hadapsar",
    "Job oriented IT courses Pune",
  ],

  alternates: {
    canonical: "https://www.worldblazing.com",
  },

  openGraph: {
    title: "World Blazing Computer Institute",
    description:
      "World Blazing Computer Institute in Hadapsar Pune offers job-oriented IT courses including Full Stack Development, Python, Software Testing, Data Analytics & Digital Marketing with placement assistance.",
    url: "https://www.worldblazing.com",
    siteName: "World Blazing Computer Institute",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "World Blazing Computer Institute",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "World Blazing Computer Institute",
    description:
      "Job-oriented IT courses in Pune with real classroom training.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/* ---------------- VIEWPORT ---------------- */
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/* ---------------- ROOT LAYOUT ---------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "World Blazing Computer Institute",
              url: "https://www.worldblazing.com",
              logo: "https://www.worldblazing.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Aru Palace Building, Malwadi Rd",
                addressLocality: "Hadapsar",
                addressRegion: "MH",
                postalCode: "411028",
                addressCountry: "IN",
              },
              telephone: "+918237978163",
            }),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BR2WK3HFQF"
          strategy="afterInteractive"
        />
        <Script
          id="ga-script"
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
          <ThemeToggleClient />

          {/* Mobile Dock */}
          <div className="block md:hidden fixed top-2 right-4 z-50">
            <FloatingDockDemo />
          </div>

          {/* Desktop Dock */}
          <div className="hidden md:fixed md:bottom-0 md:left-0 md:right-0 md:flex md:justify-center md:pb-4 md:z-50">
            <FloatingDockDemo />
          </div>

          {children}
        </ThemeProvider>

        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
