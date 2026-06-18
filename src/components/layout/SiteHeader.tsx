"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navSections } from "@/lib/nav-sections";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let didMove = false;

    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 61);
      lastY.current = y;
    };
    const onTouchStart = () => { didMove = false; };
    const onTouchMove = () => { didMove = true; };
    const onTouchEnd = () => { if (!didMove) setHidden(false); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <header className={`site-header${hidden ? " header-hidden" : ""}`}>
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
