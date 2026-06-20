import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { getSectionConfigs, getFooterConfig } from "@/sanity/queries";
import { buildNavSections } from "@/lib/nav-sections";

const hebrewFont = Rubik({
  variable: "--font-hebrew",
  subsets: ["hebrew", "latin"],
});

const headingFont = localFont({
  src: [
    { path: "../fonts/gan-bold.woff", weight: "700" },
    { path: "../fonts/gan-bold.ttf", weight: "700" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const handwritingFont = localFont({
  src: "../fonts/ktav-yad-medium-italic.ttf",
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: "מחוברים בחוב\"ב",
  description: "הקול של התלמידים.ות",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sections, footerConfig] = await Promise.all([
    getSectionConfigs(),
    getFooterConfig(),
  ]);
  const navSections = buildNavSections(sections);

  return (
    <html
      lang="he"
      dir="rtl"
      className={`${hebrewFont.variable} ${headingFont.variable} ${handwritingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader navSections={navSections} />
        <main className="flex-1">{children}</main>
        <SiteFooter config={footerConfig} />
      </body>
    </html>
  );
}
