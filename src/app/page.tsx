import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import NewsCard from "@/components/NewsCard";
import SectionPreviewCard from "@/components/SectionPreviewCard";
import TextHighlightCard from "@/components/TextHighlightCard";
import {
  featuredNewsItem,
  sectionPreviewsGroup1,
  sectionPreviewsGroup2,
  sportsHighlights,
} from "@/lib/placeholder-data";

export default function HomePage() {
  return (
    <div>
      {/* ── Section 0: Hero ─────────────────────────────────────────────────
          Source: Canva section PBfLYqYMWctwC793, canvas 1039×838.958px.
          Single section — black bar is INSIDE at 32.7% from top.
          Corkboard: left 50%, 44.6% tall, z-10 (overlaps the black bar).
          Title+tagline: upper-right corner.
          CTA button: inside black bar, 3% from right edge. */}
      <section
        className="relative overflow-hidden bg-hovav-header-blue"
        style={{ minHeight: 'calc(100vh - 61px)' }}
      >
        {/* Corkboard image ── left 50%, top-aligned, 44.6% of section height.
            z-10 so it renders on top of the black bar (Canva layering). */}
        <div
          className="absolute left-0 top-0 z-10 w-1/2"
          style={{ height: 'calc((100vh - 61px) * 0.446)' }}
        >
          <PlaceholderImage label="לוח שעם" className="h-full w-full rounded-none" />
        </div>

        {/* Title + tagline ── upper right (1.7% from right, 1% from top, 29% wide) */}
        <div className="absolute right-[2%] top-[1%] z-10 w-[29%] text-right">
          <h1 className="font-heading text-7xl leading-tight md:text-8xl">
            מחוברים<br />בחוב&quot;ב
          </h1>
          <p className="font-handwriting mt-6 text-3xl md:text-4xl">
            הקול של התלמידים.ות
          </p>
        </div>

        {/* Black bar ── 32.7%–48.5% from top, full width, z-0 (behind corkboard) */}
        <div
          className="absolute left-0 right-0 z-0 bg-black"
          style={{
            top: 'calc((100vh - 61px) * 0.327)',
            height: 'calc((100vh - 61px) * 0.159)',
          }}
        >
          {/* CTA button ── 3.3% from right, vertically centered in the bar */}
          <Link
            href="/news"
            className="absolute top-1/2 right-[3%] -translate-y-1/2 flex items-center gap-2 rounded-md bg-white px-6 py-3 font-medium shadow"
          >
            <span>הכירו את אתר התוכן החדש שלנו</span>
            <span aria-hidden>←</span>
          </Link>
        </div>
      </section>

      {/* ── Section 1: חדשות מהשטח ──────────────────────────────────────────
          Canva: sports-gray bg, title (underlined link, right-aligned),
          description paragraph (full width), featured article card (left),
          "קישור לכתבות" link (center-left). */}
      <section className="min-h-screen flex flex-col justify-center bg-hovav-sports-gray px-6 py-12 md:px-12">
        <h2 className="font-heading text-4xl text-end mb-6">
          <Link href="/news" className="underline">חדשות מהשטח</Link>
        </h2>
        <p className="mb-8 max-w-2xl leading-relaxed text-black/70">
          מה באמת קורה בבית החינוך שלנו? כתבי וכתבות מחוברים מביאים לכם את הסקופים החמים,
          הדיווחים מההפסקות והאירועים שאסור לכם לפספס ואם בכל זאת פספסתם, תקראו עליהם כאן.
        </p>
        <div className="max-w-sm mb-8">
          <NewsCard item={{ ...featuredNewsItem, image: "/Screenshot 2026-06-16 230906.png" }} />
        </div>
        <Link href="/news" className="text-lg font-medium underline">
          קישור לכתבות שאנחנו רוצים לחשוף
        </Link>
      </section>

      {/* ── Section 2: חוב"ב בשעה גמישה ────────────────────────────────────
          Canva: blue bg, centered h2, 3-column grid:
          כאן משחקים | כאן צוחקים | כאן חושבים — each: image + title link + description. */}
      <section className="min-h-screen flex flex-col justify-center bg-hovav-header-blue px-6 py-12 md:px-12">
        <h2 className="font-heading text-4xl text-center mb-10">חוב&quot;ב בשעה גמישה</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {sectionPreviewsGroup1.map((item) => (
            <SectionPreviewCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── Section 3: חוב"ב מאחורי הקלעים preview ─────────────────────────
          Canva: sports-gray bg, illustration image left, title+subtitle+description+link right. */}
      <section className="min-h-screen flex items-center gap-10 bg-hovav-sports-gray px-6 py-12 md:px-16">
        <Image
          src="/Screenshot 2026-06-16 230927.png"
          alt="חדר מורים"
          width={224}
          height={160}
          className="h-40 w-56 shrink-0 rounded-md object-cover"
        />
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl">חוב&quot;ב מאחורי הקלעים</h2>
          <p className="text-lg font-semibold">אנחנו שאלנו והם ענו</p>
          <p className="leading-relaxed text-black/70">
            חשבתם שאתם יודעים עליהם הכל? תחשבו שוב. הכתבים שלנו ישבו לשיחה אישית עם הפנים
            המוכרות בבית הספר, מורים, תלמידים ואנשי צוות, וחזרו לגלות צדדים שלא הכרתם.
          </p>
          <Link href="/behind-the-scenes" className="font-medium underline">
            קישור לכתבות שאנחנו רוצים לחשוף
          </Link>
        </div>
      </section>

      {/* ── Section 4: חוב"ב בשעת תרבות ────────────────────────────────────
          Canva: blue bg, centered h2, 4-column grid:
          מתכונים | המלצות | קומיקס | מה דעתי — each: image + title link + description. */}
      <section className="min-h-screen flex flex-col justify-center bg-hovav-header-blue px-6 py-12 md:px-12">
        <h2 className="font-heading text-4xl text-center mb-10">חוב&quot;ב בשעת תרבות</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {sectionPreviewsGroup2.map((item) => (
            <SectionPreviewCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── Section 5: חוב"ב על המגרש ───────────────────────────────────────
          Canva: sports-gray bg, h2 right-aligned, 2-column text cards. */}
      <section className="min-h-screen flex flex-col justify-center bg-hovav-sports-gray px-6 py-12 md:px-12">
        <h2 className="font-heading text-3xl mb-8">חוב&quot;ב על המגרש</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {sportsHighlights.map((item) => (
            <TextHighlightCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
