import Link from "next/link";
import { navSections } from "@/lib/nav-sections";

// Site-wide nav. Not part of the Canva mockups (which only showed each
// page in isolation) but every multi-page site needs one to actually move
// between sections, so it's added here as the connective layer.
export default function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-12">
        <Link href="/" className="font-heading text-xl">
          מחוברים בחוב&quot;ב
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
          {navSections.map((section) => (
            <Link key={section.href} href={section.href} className="hover:underline">
              {section.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
