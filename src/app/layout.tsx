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

/* ---------------- FONT ---------------- */
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
  variable: "--font-lato",
});

/* ---------------- SEO METADATA ---------------- */
export const metadata = {
  metadataBase: new URL("https://www.worldblazing.com"),

  title: "World Blazing Computer Institute | Best IT Courses in Hadapsar",
  description:
    "World Blazing Computer Institute offers job-oriented IT courses in Hadapsar . Full Stack, Python, Software Testing, Data Analytics, Digital Marketing with placements.",

  keywords: [
    "World Blazing Computer Institute",
    "IT courses in Hadapsar",
    "IT institute in Hadapsar",
    "Full Stack Development course Hadapsar",
    "Python training Hadapsar",
    "Software Testing classes Hadapsar",
    "Data Analytics course Hadapsar",
    "Digital Marketing course Hadapsar",
    "Computer classes in Hadapsar",
    "Job oriented IT courses Hadapsar",
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
          <Suspense fallback={null}>
            <ThemeToggleClient />
          </Suspense>

          {/* Mobile Dock */}
          <div className="block md:hidden fixed top-2 right-4 z-50">
            <Suspense fallback={null}>
              <FloatingDockDemo />
            </Suspense>
          </div>

          {/* Desktop Dock */}
          <div className="hidden md:fixed md:bottom-0 md:left-0 md:right-0 md:flex md:justify-center md:pb-4 md:z-50">
            <Suspense fallback={null}>
              <FloatingDockDemo />
            </Suspense>
          </div>

          {children}
        </ThemeProvider>

        <SpeedInsights />
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
