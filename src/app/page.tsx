import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Whiteboard from "@/components/Whiteboard";
import ArticleCard from "@/components/ArticleCard";
import Carousel from "@/components/Carousel";
import { getSectionConfigs, getSectionItems, getHomepageCategories, getCarouselItems } from "@/sanity/queries";

export const revalidate = 60;

export default async function HomePage() {
  const [sections, categories, carouselItems] = await Promise.all([
    getSectionConfigs(),
    getHomepageCategories(),
    getCarouselItems(),
  ]);

  const newsConfig = sections.find((s) => s.slug === "news" && s.isVisible);
  const newsItems = newsConfig ? await getSectionItems(newsConfig.contentType) : [];

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
          <div className="hero-feature-row">
            <div className="wb-frame"><Whiteboard /></div>
            {carouselItems.length > 0 && <Carousel items={carouselItems} />}
          </div>
        </div>
      </section>

      {/* ── News ───────────────────────────────────────────────────────── */}
      {newsConfig && newsItems.length > 0 && (
        <section id="news">
          <PageHeader
            title={newsConfig.title}
            description={newsConfig.description}
            image={newsConfig.headerImage}
          />
          <div className="section-content grid grid-cols-1 md:grid-cols-3">
            {newsItems.map((item) => (
              <ArticleCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* ── Categories ─────────────────────────────────────────────────── */}
      <section id="categories">
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
      </section>
    </div>
  );
}
