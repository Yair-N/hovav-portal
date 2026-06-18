import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/components/NewsCard";
import SectionPreviewCard from "@/components/SectionPreviewCard";
import TextHighlightCard from "@/components/TextHighlightCard";
import { getFeaturedNewsItem, getSiteSettings, getSportsHighlights } from "@/sanity/queries";

export const revalidate = 60;

export default async function HomePage() {
  const [featuredNewsItem, siteSettings, sportsHighlights] = await Promise.all([
    getFeaturedNewsItem(),
    getSiteSettings(),
    getSportsHighlights(),
  ]);
  const sectionPreviewsGroup1 = siteSettings.flexibleHourSections;
  const sectionPreviewsGroup2 = siteSettings.cultureSections;
  return (
    <div>
      {/* ── Section 0: Hero ─────────────────────────────────────────────────
          Source: Canva section PBfLYqYMWctwC793, canvas 1039×838.958px.
          Single section — black bar is INSIDE at 32.7% from top.
          Corkboard: left 50%, 44.6% tall, z-10 (overlaps the black bar).
          Title+tagline: upper-right corner.
          CTA button: inside black bar, 3% from right edge. */}
              <section
          className="relative flex flex-col md:block overflow-hidden bg-hovav-header-blue"
          style={{ minHeight: 'calc(100vh - 61px)' }}
        >
          {/* Corkboard image ── below title on mobile, left half on desktop */}
          <div
            className="relative w-full aspect-video max-h-[30vh] order-2 md:order-none md:max-h-none md:absolute md:left-0 md:top-0 md:w-1/2 md:aspect-auto md:h-[calc((100vh_-_61px)_*_0.446)] z-10 md:flex md:items-center md:justify-center"
          >
            <Image
              src="/corkboard.png"
              alt="לוח שעם"
              fill
              className="object-contain object-center"
            />
          </div>

          {/* Title + tagline ── first on mobile, upper-right on desktop */}
          <div
            className="flex flex-col justify-center px-6 py-8 text-right order-1 md:order-none md:absolute md:right-[2%] md:top-0 md:w-[29%] md:px-0 md:py-0
  md:h-[calc((100vh_-_61px)_*_0.446)]"
          >
            <h1
              className="font-heading leading-tight"
              style={{ fontSize: 'clamp(2.5rem, min(calc((100vh - 61px) * 0.13), 10vw), 10rem)' }}
            >
            מחוברים<br />בחוב&quot;ב
           </h1>
            <p
              className="font-handwriting whitespace-nowrap flex items-center gap-2"
              style={{ fontSize: 'clamp(1.125rem, min(calc((100vh - 61px) * 0.05), 4vw), 3.5rem)' }}
            >
            הקול של התלמידים.ות
              <Image src="/microphone.png" alt="מיקרופון" width={200} height={200} className="inline-block h-[2.5em] w-auto" />
            </p>
          </div>

          {/* Black bar */}
          <div
            className="h-4 bg-black order-3 md:order-none md:absolute md:left-0 md:right-0 md:z-0 md:top-[calc((100vh_-_61px)_*_0.446)]"
          />
      </section>

      {/* ── Section 1: חדשות מהשטח ──────────────────────────────────────────
          Canva: sports-gray bg, title (underlined link, right-aligned),
          description paragraph (full width), featured article card (left),
          "קישור לכתבות" link (center-left). */}
      <section className="min-h-screen flex flex-col justify-center bg-hovav-sports-gray px-6 py-12 md:px-12">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-end mb-6">
          <Link href="/news" className="underline">חדשות מהשטח</Link>
        </h2>
        <p className="mb-8 max-w-2xl leading-relaxed text-black/70">
          מה באמת קורה בבית החינוך שלנו? כתבי וכתבות מחוברים מביאים לכם את הסקופים החמים,
          הדיווחים מההפסקות והאירועים שאסור לכם לפספס ואם בכל זאת פספסתם, תקראו עליהם כאן.
        </p>
        {featuredNewsItem && (
          <div className="max-w-sm mb-8">
            <NewsCard item={featuredNewsItem} />
          </div>
        )}
        <Link href="/news" className="text-lg font-medium underline">
          קישור לכתבות שאנחנו רוצים לחשוף
        </Link>
      </section>

      {/* ── Section 2: חוב"ב בשעה גמישה ────────────────────────────────────
          Canva: blue bg, centered h2, 3-column grid:
          כאן משחקים | כאן צוחקים | כאן חושבים — each: image + title link + description. */}
      <section className="min-h-screen flex flex-col justify-center bg-hovav-header-blue px-6 py-12 md:px-12">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-center mb-10">חוב&quot;ב בשעה גמישה</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {sectionPreviewsGroup1.map((item) => (
            <SectionPreviewCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── Section 3: חוב"ב מאחורי הקלעים preview ─────────────────────────
          Canva: sports-gray bg, illustration image left, title+subtitle+description+link right. */}
      <section className="min-h-screen flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10 bg-hovav-sports-gray px-6 py-12 md:px-16">
        <Image
          src="/behind-the-scenes-header.png"
          alt="חדר מורים"
          width={224}
          height={160}
          className="w-full max-w-xs rounded-md object-cover md:h-40 md:w-56 md:shrink-0"
        />
        <div className="flex flex-col gap-3 w-full">
          <h2 className="font-heading text-2xl md:text-3xl">חוב&quot;ב מאחורי הקלעים</h2>
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
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-center mb-10">חוב&quot;ב בשעת תרבות</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {sectionPreviewsGroup2.map((item) => (
            <SectionPreviewCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── Section 5: חוב"ב על המגרש ───────────────────────────────────────
          Canva: sports-gray bg, h2 right-aligned, 2-column text cards. */}
      <section className="min-h-screen flex flex-col justify-center bg-hovav-sports-gray px-6 py-12 md:px-12">
        <h2 className="font-heading text-2xl md:text-3xl mb-8">חוב&quot;ב על המגרש</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {sportsHighlights.map((item) => (
            <TextHighlightCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
