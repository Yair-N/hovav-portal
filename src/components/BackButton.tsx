"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BackButton({ inline }: { inline?: boolean }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (inline) return;
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [inline]);

  if (inline) {
    return (
      <button
        onClick={() => router.back()}
        className="back-button-inline"
        aria-label="חזרה"
      >
        ✕
      </button>
    );
  }

  return (
    <button
      onClick={() => router.back()}
      className={`back-button-float ${scrolled ? "back-button-visible" : ""}`}
      aria-label="חזרה"
    >
      ✕
    </button>
  );
}
