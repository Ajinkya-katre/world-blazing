import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});
 

export const metadata: Metadata = {
  title: "World Blazing",
  description: "Interactive design using tailwind CSS and Acernity UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
