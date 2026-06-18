import Image from "next/image";
import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import ComicCard from "@/components/ComicCard";
import GameCard from "@/components/GameCard";
import OpinionCard from "@/components/OpinionCard";
import RecommendationCard from "@/components/RecommendationCard";
import TextHighlightCard from "@/components/TextHighlightCard";
import PageHeader from "@/components/PageHeader";
import Whiteboard from "@/components/Whiteboard";
import {
  getNewsItems,
  getJokes,
  getThoughts,
  getGames,
  getBehindTheScenes,
  getOpinions,
  getComics,
  getRecommendations,
  getRecipes,
  getSportsHighlights,
} from "@/sanity/queries";

export const revalidate = 60;

export default async function HomePage() {
  const [
    news, jokes, thoughts, games, behindTheScenes,
    opinions, comics, recommendations, recipes, sports,
  ] = await Promise.all([
    getNewsItems(),
    getJokes(),
    getThoughts(),
    getGames(),
    getBehindTheScenes(),
    getOpinions(),
    getComics(),
    getRecommendations(),
    getRecipes(),
    getSportsHighlights(),
  ]);

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section id="hero">
        <div className="hero-corkboard">
          <Image
            src="/corkboard.png"
            alt="לוח שעם"
            fill
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

    {/* ── Categories ─────────────────────────────────────────────── */}
    <div className="categories">
      <div className="category">
        <div className="category-title">חוב&quot;ב בשעה גמישה</div>
        <p className="category-desc">
          מה באמת קורה בבית החינוך שלנו? כתבי וכתבות מחוברים מביאים לכם את
          הסקופים הרותחים, הדיווחים מהרגעיות והאירועים שאסור לכם לפספס
          (ואם בכל זאת פספסתם, תקראו עליהם כאן)
        </p>

        <div className="preview-cards">
          <Link href="/#thoughts" className="preview-card">
            <div className="preview-card-img">
              <Image
                src="/thoughts-header.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="preview-card-label">כאן חושבים</div>
            <p className="preview-card-desc">
              רוצים להפעיל את הראש? כאן תמצאו חידות, חקירות ומשעשעות שיתנו
              לכם לחשוב ולהסיק מסקנות
            </p>
          </Link>

          <Link href="/#jokes" className="preview-card">
            <div className="preview-card-img">
              <Image
                src="/jokes-header.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="preview-card-label">כאן צוחקים</div>
            <p className="preview-card-desc">
              כי הצחוק הוא הרפואה הטובה ביותר. לחצו כאן ותתחילו לצחוק
            </p>
          </Link>

          <Link href="/#games" className="preview-card">
            <div className="preview-card-img">
              <Image
                src="/games-header.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="preview-card-label">כאן משחקים</div>
            <p className="preview-card-desc">
              תלמידי שכבות ד׳-ו׳ יצרו עבורכם משחקים לימודיים אינטראקטיביים
            </p>
          </Link>
        </div>
      </div>

      <div className="category">
        <div className="category-title">חוב&quot;ב בשעת תרבות</div>
        <p className="category-desc">
          כל מה שקורה בשעות התרבות — מהבמה ועד מאחורי הקלעים
        </p>

        <div className="preview-cards">
          <Link href="/#opinions" className="preview-card">
            <div className="preview-card-img">
              <Image
                src="/thoughts-header.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="preview-card-label">מה דעתי</div>
            <p className="preview-card-desc">
              פינת הקורי השבועית שלנו בנושאים הרלוונטיים באמת לחיינו.
              חולקים את דעתנו? היגיבו והשפיעו
            </p>
          </Link>

          <Link href="/#comics" className="preview-card">
            <div className="preview-card-img">
              <Image
                src="/comics-header.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="preview-card-label">פינת הקומיקס השבועית</div>
            <p className="preview-card-desc">
              כי התמונה אומרת אלף מילים. הרומנטיקה של בית הספר בקריקטורות
            </p>
          </Link>

          <Link href="/#recommendations" className="preview-card">
            <div className="preview-card-img">
              <Image
                src="/recommendations-header.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="preview-card-label">כל מה שמעניין אותו</div>
            <p className="preview-card-desc">
              מחפשים את הספר הבא? הסרט הבא? ילדי בית הספר יודעים
            </p>
          </Link>

          <Link href="/#recipes" className="preview-card">
            <div className="preview-card-img">
              <Image
                src="/recipes-header.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="preview-card-label">מתכונים בקטנה</div>
            <p className="preview-card-desc">
              מתכונים קלים וטעימים שגם אתם יכולים להכין בבית
            </p>
          </Link>
        </div>
      </div>
          </div>
        </div>
      </section>

      {/* ── חדשות מהשטח ───────────────────────────────────────────────────── */}
      <section id="news">
        <PageHeader title="חדשות מהשטח" image="/news-header.png" />
        <div className="section-content grid grid-cols-1 md:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── כאן צוחקים ────────────────────────────────────────────────────── */}
      <section id="jokes">
        <PageHeader title="כאן צוחקים" image="/jokes-header.png" />
        <div className="section-content grid grid-cols-1 md:grid-cols-3">
          {jokes.map((item) => (
            <ComicCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── כאן חושבים ────────────────────────────────────────────────────── */}
      <section id="thoughts">
        <PageHeader title="כאן חושבים" image="/thoughts-header.png" />
        <div className="section-content flex flex-col">
          {thoughts.map((item) => (
            <OpinionCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── כאן משחקים ────────────────────────────────────────────────────── */}
      <section id="games">
        <PageHeader title="כאן משחקים" image="/games-header.png" />
        <div className="section-content grid grid-cols-2 md:grid-cols-4">
          {games.map((item) => (
            <GameCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── מאחורי הקלעים ─────────────────────────────────────────────────── */}
      <section id="behind-the-scenes">
        <PageHeader title={'חוב"ב מאחורי הקלעים'} image="/behind-the-scenes-header.png" />
        <div className="section-content flex flex-col">
          {behindTheScenes.map((item) => (
            <TextHighlightCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── מה דעתי ───────────────────────────────────────────────────────── */}
      <section id="opinions">
        <PageHeader title="מה דעתי" />
        <div className="section-content flex flex-col">
          {opinions.map((item) => (
            <OpinionCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── קומיקס ────────────────────────────────────────────────────────── */}
      <section id="comics">
        <PageHeader title="פינת הקומיקס השבועית" image="/comics-header.png" />
        <div className="section-content grid grid-cols-1 md:grid-cols-3">
          {comics.map((item) => (
            <ComicCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── המלצות ────────────────────────────────────────────────────────── */}
      <section id="recommendations">
        <PageHeader title="פינת ההמלצות" image="/recommendations-header.png" />
        <div className="section-content grid grid-cols-2 md:grid-cols-4">
          {recommendations.map((item) => (
            <RecommendationCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── מתכונים ───────────────────────────────────────────────────────── */}
      <section id="recipes">
        <PageHeader title="מתכונים בקטנה" image="/recipes-header.png" />
        <div className="section-content grid grid-cols-2 md:grid-cols-4">
          {recipes.map((item) => (
            <RecommendationCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── על המגרש ──────────────────────────────────────────────────────── */}
      <section id="sports">
        <PageHeader title={'חוב"ב על המגרש'} />
        <div className="section-content grid md:grid-cols-2">
          {sports.map((item) => (
            <TextHighlightCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
