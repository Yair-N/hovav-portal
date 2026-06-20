import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Whiteboard from "@/components/Whiteboard";
import ArticleCard from "@/components/ArticleCard";
import LinkCard from "@/components/LinkCard";
import VideoCard from "@/components/VideoCard";
import { getSectionConfigs, getSectionItems, getHomepageCategories, getCarouselItems } from "@/sanity/queries";
import Carousel from "@/components/Carousel";
import type { CardStyle } from "@/types/content";

export const revalidate = 60;

const GRID_CLASS: Record<CardStyle, string> = {
  article: "section-content grid grid-cols-1 md:grid-cols-3",
  "link-card": "section-content grid grid-cols-2 md:grid-cols-4",
  video: "section-content flex flex-col",
};

const CARD_COMPONENT: Record<CardStyle, typeof ArticleCard> = {
  article: ArticleCard,
  "link-card": LinkCard,
  video: VideoCard,
};

export default async function HomePage() {
  const [sections, categories, carouselItems] = await Promise.all([
    getSectionConfigs(),
    getHomepageCategories(),
    getCarouselItems(),
  ]);
  const visibleSections = sections.filter((s) => s.isVisible);

  const sectionData = await Promise.all(
    visibleSections.map((s) => getSectionItems(s.contentType)),
  );

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section id="hero">
        <div className="hero-corkboard">
          <Image
            src="/corkboard.png"
            alt="לוח שעם"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-center"
          />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">
            מחוברים<br />בחוב&quot;ב
          </h1>
          <p className="hero-subtitle">
            הקול של התלמידים.ות
            <Image src="/microphone.png" alt="מיקרופון" width={200} height={200} className="inline-block h-[2.5em] w-auto" />
          </p>
        </div>

        <div className="hero-divider" />
        <div className="hero-spacer" />

        <div className="hero-below">
          <div className="wb-frame"><Whiteboard /></div>

          {carouselItems.length > 0 && <Carousel items={carouselItems} />}

          {/* ── Categories ─────────────────────────────────────────── */}
          <div className="categories">
            <div className="category">
              <div className="category-title">חוב&quot;ב בשעה גמישה</div>
              <p className="category-desc">
                מה באמת קורה בבית החינוך שלנו? כתבי וכתבות מחוברים מביאים לכם את
                הסקופים הרותחים, הדיווחים מהרגעיות והאירועים שאסור לכם לפספס
                (ואם בכל זאת פספסתם, תקראו עליהם כאן)
              </p>
              <div className="preview-cards">
                {categories.flexibleHour.map((card) => (
                  <Link key={card.href} href={card.href} className="preview-card">
                    <div className="preview-card-img">
                      {card.image && <Image src={card.image} alt="" fill sizes="(max-width: 640px) 100vw, 140px" className="object-cover" />}
                    </div>
                    <div className="preview-card-label">{card.title}</div>
                    <p className="preview-card-desc">{card.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="category">
              <div className="category-title">חוב&quot;ב בשעת תרבות</div>
              <p className="category-desc">
                כל מה שקורה בשעות התרבות — מהבמה ועד מאחורי הקלעים
              </p>
              <div className="preview-cards">
                {categories.culture.map((card) => (
                  <Link key={card.href} href={card.href} className="preview-card">
                    <div className="preview-card-img">
                      {card.image && <Image src={card.image} alt="" fill sizes="(max-width: 640px) 100vw, 140px" className="object-cover" />}
                    </div>
                    <div className="preview-card-label">{card.title}</div>
                    <p className="preview-card-desc">{card.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dynamic sections ───────────────────────────────────────────── */}
      {visibleSections.map((section, i) => {
        const items = sectionData[i];
        const Card = CARD_COMPONENT[section.cardStyle];
        const gridClass = GRID_CLASS[section.cardStyle];

        return (
          <section
            key={section.slug}
            id={section.slug}
            style={section.backgroundColor ? { backgroundColor: section.backgroundColor } : undefined}
          >
            <PageHeader
              title={section.title}
              description={section.description}
              image={section.headerImage}
            />
            <div className={gridClass}>
              {items.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
