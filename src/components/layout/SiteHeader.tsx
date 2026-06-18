import Link from "next/link";
import { navSections } from "@/lib/nav-sections";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-black/10 bg-white">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-12">
        <Link href="/" className="font-heading text-lg sm:text-xl">
          מחוברים בחוב&quot;ב
        </Link>
        <nav className="hidden md:flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
          {navSections.map((section) => (
            <Link key={section.href} href={section.href} className="hover:underline">
              {section.title}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
