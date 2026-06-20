"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import type { CarouselItem } from "@/types/content";

export default function Carousel({ items }: { items: CarouselItem[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const goTo = useCallback((index: number, dir: "next" | "prev") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setCurrent((index + items.length) % items.length);
    timeoutRef.current = setTimeout(() => setAnimating(false), 600);
  }, [animating, items.length]);

  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, items.length]);

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="carousel">
      <div className="carousel-viewport">
        {items.map((item, i) => (
          <div
            key={i}
            className={[
              "carousel-slide",
              i === current ? "carousel-slide-active" : "",
              i === current && animating ? `carousel-enter-${direction}` : "",
            ].filter(Boolean).join(" ")}
          >
            {/* Blurred background fill for portrait images */}
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover carousel-slide-bg"
            />
            {/* Sharp image on top */}
            <Image
              src={item.image}
              alt={item.caption || ""}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain carousel-slide-img"
            />
          </div>
        ))}
      </div>

      {items[current]?.caption && (
        <p className="carousel-caption">{items[current].caption}</p>
      )}

      {items.length > 1 && (
        <>
          <button type="button" className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="הקודם">
            ›
          </button>
          <button type="button" className="carousel-btn carousel-btn-next" onClick={next} aria-label="הבא">
            ‹
          </button>
          <div className="carousel-dots">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot${i === current ? " carousel-dot-active" : ""}`}
                onClick={() => goTo(i, i > current ? "next" : "prev")}
                aria-label={`תמונה ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
