"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageLightbox({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className || ""} cursor-pointer`}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="lightbox" onClick={() => setOpen(false)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setOpen(false)}
            aria-label="סגור"
          >
            ✕
          </button>
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1200}
            className="lightbox-img"
          />
        </div>
      )}
    </>
  );
}
