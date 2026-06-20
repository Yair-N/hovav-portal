"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { CarouselItem } from "@/types/content";

export default function Carousel({ items }: { items: CarouselItem[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, items.length]);

  if (items.length === 0) return null;

  return (
    <div className="carousel">
      <div className="carousel-viewport">
        {items.map((item, i) => (
          <div
            key={i}
            className={`carousel-slide${i === current ? " carousel-slide-active" : ""}`}
          >
            <Image
              src={item.image}
              alt={item.caption || ""}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
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
            ‹
          </button>
          <button type="button" className="carousel-btn carousel-btn-next" onClick={next} aria-label="הבא">
            ›
          </button>
          <div className="carousel-dots">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot${i === current ? " carousel-dot-active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`תמונה ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
