"use client";

import { useEffect, useRef, useState } from "react";

const messages = [
  "לוח מודעות — הודעות מערכת ועדכונים חשובים יופיעו כאן",
  "שימו לב! מחר יום ספורט — להגיע עם בגדי ספורט",
  "מזל טוב לכיתה ד׳2 על הזכייה בתחרות!",
];

export default function Whiteboard() {
  const [idx, setIdx] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  const eraserRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const smudgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const eraser = eraserRef.current;
      const fade = fadeRef.current;
      const smudge = smudgeRef.current;
      const text = textRef.current;
      if (!eraser || !fade || !smudge || !text) return;

      const restart = (el: HTMLElement, cls: string) => {
        el.classList.remove(cls);
        el.offsetHeight;
        el.classList.add(cls);
      };

      restart(eraser, "wb-eraser-moving");
      restart(fade, "wb-fade-wiping");
      setTimeout(() => restart(smudge, "wb-smudge-visible"), 400);

      setTimeout(() => {
        eraser.classList.remove("wb-eraser-moving");
        fade.classList.remove("wb-fade-wiping");
        smudge.classList.remove("wb-smudge-visible");
        fade.style.width = "0";

        setIdx((i) => (i + 1) % messages.length);
        restart(text, "wb-text-writing");
      }, 3200);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wb">
      <div ref={textRef} className="wb-text wb-text-writing">
        {messages[idx]}
      </div>
      <div ref={smudgeRef} className="wb-smudge" />
      <div ref={fadeRef} className="wb-fade" />
      <div ref={eraserRef} className="wb-eraser" />
    </div>
  );
}
