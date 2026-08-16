import Script from "next/script";
import { Lato } from "next/font/google";
import "./globals.css";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { ThemeProvider } from "@/providers/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import ThemeToggleClient from "@/components/theme-toggle.client";
import { Suspense } from "react";
import WhatsAppFloat from "@/components/whatsapp-float";
import { NavbarUi } from "@/components/ui/navbar-ui";

/* ---------------- FONT ---------------- */
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
  variable: "--font-lato",
});

/* ---------------- SEO METADATA ---------------- */
export const metadata = {
  metadataBase: new URL("https://www.worldblazing.com"),

  title: "World Blazing Programming Institute | Best IT Courses in Hadapsar, Pune",
  description:
    "World Blazing Programming Institute offers job-oriented IT training in Hadapsar, Pune. Full Stack, Python, Software Testing, Data Analytics and Digital Marketing courses with placement and career support.",

  keywords: [
    "World Blazing Programming Institute",
    "Best IT courses in Hadapsar",
    "Best IT institute in Hadapsar",
    "Best Full Stack Development course Hadapsar",
    "Best Python training Hadapsar",
    "Best Software Testing classes Hadapsar",
    "Best Data Analytics course Hadapsar",
    "Best Digital Marketing course Hadapsar",
    "Best Programming classes in Hadapsar",
    "Best job oriented IT courses Hadapsar",
  ],

  applicationName: "World Blazing Programming Institute",
  authors: [
    {
      name: "World Blazing Programming Institute",
      url: "https://www.worldblazing.com",
    },
  ],
  creator: "World Blazing Programming Institute",
  publisher: "World Blazing Programming Institute",
  category: "Education",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],

  alternates: {
    canonical: "https://www.worldblazing.com",
    languages: {
      "en-IN": "https://www.worldblazing.com",
    },
  },

  openGraph: {
    title: "World Blazing Programming Institute",
    description:
      "World Blazing Programming Institute in Hadapsar, Pune offers job-oriented IT courses including Full Stack Development, Python, Software Testing, Data Analytics & Digital Marketing with placement support.",
    url: "https://www.worldblazing.com",
    siteName: "World Blazing Programming Institute",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "World Blazing Programming Institute",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "World Blazing Programming Institute",
    description:
      "Job-oriented IT courses in Pune with real classroom training and placement support.",
    images: ["/og-image.png"],
    creator: "World Blazing Programming Institute",
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

  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Hadapsar, Pune",
    "geo.position": "18.5204;73.8567",
    ICBM: "18.5204, 73.8567",
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
              name: "World Blazing Programming Institute",
              url: "https://www.worldblazing.com",
              logo: "https://www.worldblazing.com/logo.png",
              telephone: "+918459816185",
              email: "worldblazinginstitute@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Aru Palace Building, Malwadi Rd",
                addressLocality: "Hadapsar",
                addressRegion: "MH",
                postalCode: "411028",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.5204,
                longitude: 73.8567,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:30",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
              areaServed: "Hadapsar, Pune",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Which IT courses are best for beginners in Hadapsar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "World Blazing Programming Institute offers beginner-friendly IT courses in Full Stack Development, Python, Software Testing, Data Analytics and Digital Marketing with placement guidance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does World Blazing provide placement support in Pune?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, World Blazing provides placement support, interview preparation, and job-ready training for students in Pune.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I book a demo class at World Blazing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can book a free demo class through our Contact Us page or the Book Demo section on the website.",
                  },
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.worldblazing.com",
                },
              ],
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
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PPT5TT76');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body
        className={`${lato.className} antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors`}
      >
             {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPT5TT76"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider>
          {/* <Suspense fallback={null}>
            <ThemeToggleClient />
          </Suspense> */}
          
          <NavbarUi />
          {/* Mobile Dock */}
          {/* <div className="block md:hidden fixed top-2 right-4 z-50">
            <Suspense fallback={null}>
              <FloatingDockDemo />
            </Suspense>
          </div> */}

          {/* Desktop Dock */}
          {/* <div className="hidden md:fixed md:bottom-0 md:left-0 md:right-0 md:flex md:justify-center md:pb-4 md:z-50">
            <Suspense fallback={null}>
              <FloatingDockDemo />
            </Suspense>
          </div> */}

          {children}
        </ThemeProvider>

        <SpeedInsights />
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
