import type { Metadata } from "next";
import Script from "next/script";
import { Lato } from "next/font/google";
import "./globals.css";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

// ✅ add Metadata type + metadataBase + some OG details
export const metadata = {
  title: "World Blazing Computer Institute | Best IT Courses in Hadapsar Pune",
  description:
    "World Blazing Computer Institute offers job-oriented IT courses in Hadapsar Pune. Full Stack, Python, Software Testing, Data Analytics, Digital Marketing with placements.",
  openGraph: {
    title: "World Blazing Computer Institute",
    description:
      "Best IT & Programming Institute in Hadapsar Pune offering Full Stack, Python, Testing, Data Analytics courses.",
    url: "https://www.worldblazing.com",
    siteName: "World Blazing Computer Institute",
    images: [
      {
        url: "https://www.worldblazing.com/og-image.png",
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
    images: ["https://www.worldblazing.com/og-image.png"],
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
        <Footer />
      </body>
    </html>
  );
}
