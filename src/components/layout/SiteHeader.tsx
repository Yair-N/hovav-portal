"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavSection } from "@/lib/nav-sections";
import MobileNav from "./MobileNav";

export default function SiteHeader({ navSections }: { navSections: NavSection[] }) {
  const [scrolling, setScrolling] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolling(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setScrolling(false), 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <header className={`site-header${scrolling ? " header-scrolling" : ""}`}>
      <div className="flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 md:px-12">
        <Link
          href="/"
          className="font-heading text-lg sm:text-xl shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          מחוברים בחוב&quot;ב
        </Link>
        <nav className="hidden md:flex flex-1 flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium">
          {navSections.map((section) => (
            <Link key={section.href} href={section.href} className="hover:underline">
              {section.title}
            </Link>
          ))}
        </nav>
        <MobileNav navSections={navSections} />
      </div>
    </header>
  );
}
