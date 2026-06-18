// Static placeholder content, transcribed from the Canva design so the
// scaffolded pages look and read the same way the mockups did. None of
// this has real images yet (those slots render as PlaceholderImage) and
// most of it is the same dummy paragraph repeated, exactly as it was in
// the Canva file — swap in real per-page content (or wire up Sanity) when
// ready.

import type {
  NewsItem,
  GameItem,
  SectionPreview,
  ComicItem,
  OpinionPost,
  RecommendationItem,
  TextHighlight,
} from "@/types/content";

const dummyExcerpt =
  "נבחרות הכדורסל של שכבת ו' בבית החינוך \"חובב\" עשו היסטוריה כשחזרו עם שני גביעים ומקום ראשון - גם בנות וגם בנים.";

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "חוב\"ב על המפה: דאבל היסטורי בטורניר הכדורסל",
    excerpt: dummyExcerpt,
  },
  {
    id: "2",
    title: "חגיגה מתוקה בחוב\"ב ביום העוגייה המסורתי",
    excerpt:
      "מאות עוגיות שנאפו באהבה וכמעט 3,000 ש\"ח שנתרמו - כל הפרטים על היום הכי מתוק בשנה",
  },
  { id: "3", title: "חוב\"ב על המפה: דאבל היסטורי בטורניר הכדורסל", excerpt: dummyExcerpt },
  { id: "4", title: "חוב\"ב על המפה: דאבל היסטורי בטורניר הכדורסל", excerpt: dummyExcerpt },
  { id: "5", title: "חוב\"ב על המפה: דאבל היסטורי בטורניר הכדורסל", excerpt: dummyExcerpt },
];

export const featuredNewsItem = newsItems[0];

export const gameItems: GameItem[] = [
  {
    id: "1",
    title: "עיר המספרים",
    description: "משחקי חשבון, שפה ומדעים לתלמידי/ות כיתה ב'",
    author: "מאת: ליה",
  },
  {
    id: "2",
    title: "חדר בריחה מוזיקלי",
    description: "משחק מוזיקלי מאתגר במיוחד לכיתות ד'-ו'",
    author: "מאת איתמר צוייג",
  },
  {
    id: "3",
    title: "חדר בריחה משימת החלל",
    description: "חדר בריחה אינטראקטיבי בנושא חלל, לכיתות ה-ו",
    author: "מאת: סול בריל ומתן בר און",
  },
  {
    id: "4",
    title: "אתגרי אנגלית ומתמטיקה",
    description: "מוכנים לאתגר משולב? הכנסו למשחק שיצר אריאל גולן",
    author: "עובר תלמידי שכבת ה'",
  },
  {
    id: "5",
    title: "משחק הקניות הגדול",
    description: "משחק מתמטיקה מהנה במיוחד שיצרה אמי ברוך עבור תלמידי כיתה ב'",
  },
  {
    id: "6",
    title: "משחקי ציור ומתמטיקה",
    description:
      "ליהי טייגמן יצרה שילוב מושלם של משחק מתמטיקה ומשחק ציור באותו מקום. לשכבות ב-ג",
  },
  {
    id: "7",
    title: "כדורגל וכפל",
    description: "משחק כדורגל מלהיב עם כפל שיוצר שילוב מדהים",
    author: "מאת: מתן ודן",
  },
];

// Canva homepage section 2 (blue: "חוב"ב בשעה גמישה") — games, jokes, thoughts
export const sectionPreviewsGroup1: SectionPreview[] = [
  {
    id: "g1",
    href: "/games",
    title: "כאן משחקים",
    description:
      "תלמידי שכבות ה-ו יצרו עבורכם משחקי למידה אינטראקטיביים במגוון נושאים.",
  },
  {
    id: "g2",
    href: "/jokes",
    title: "כאן צוחקים",
    description:
      "יום בלי צחוק הוא יום מבוזבז! אספנו עבורכם את הבדיחות, הבלגנים ורגעי הצחוק הכי שווים.",
    image: "/jokes-header.png",
  },
  {
    id: "g3",
    href: "/thoughts",
    title: "כאן חושבים",
    description:
      "מאמרי דעה, מחשבות אמיתיות ומה שמסתובב לנו בראש — כתוב על ידי תלמידים לתלמידים.",
  },
];

// Canva homepage section 4 (blue: "חוב"ב בשעת תרבות") — culture, recipes, recommendations, comics, opinions
export const sectionPreviewsGroup2: SectionPreview[] = [
  {
    id: "c1",
    href: "/recipes",
    title: "מתכונים בקטנה",
    description:
      "רעבים? קבלו מתכונים טעימים בטירוף שקל להכין (וממש מהר). אזהרה: צפיה בתמונות מעוררת תיאבון!",
    image: "/recipes-header.png",
  },
  {
    id: "c2",
    href: "/recommendations",
    title: "כל מה שמעניין אותנו",
    description:
      "מחפשים את הספר הבא? הסרט הכי מרתק? או המשחק שכולם מדברים עליו? הכנסו לפינת ההמלצות שלנו.",
    image: "/recommendations-header.png",
  },
  {
    id: "c3",
    href: "/comics",
    title: "פינת הקומיקס השבועית",
    description:
      "כי תמונה אחת שווה אלף מילים: הכישרונות הגדולים של בית הספר בקומיקסים מקוריים, מצחיקים ומרגשים.",
    image: "/comics-header.png",
  },
  {
    id: "c4",
    href: "/opinions",
    title: "מה דעתי",
    description:
      "פינת הסקר השבועית שלנו בנושאים החשובים באמת (שוקולד או וניל, חתולים או כלבים ועוד). הצביעו והשפיעו.",
    image: "/thoughts-header.png",
  },
];

// Keep the old name as an alias so other files don't break
export const sectionPreviews = [...sectionPreviewsGroup1, ...sectionPreviewsGroup2];

export const sportsHighlights: TextHighlight[] = [
  {
    id: "1",
    title: "כל מה שחדש בספורט בחוב\"ב",
    body:
      "פינת הסקר השבועית שלנו בנושאים החשובים באמת (שוקולד או וניל, חתולים או כלבים ועוד). הצביעו והשפיעו - התוצאות מתעדכנות בזמן אמת.",
  },
  {
    id: "2",
    title: "כל מה שחדש בספורט בחוב\"ב",
    body:
      "פינת הסקר השבועית שלנו בנושאים החשובים באמת (שוקולד או וניל, חתולים או כלבים ועוד). הצביעו והשפיעו - התוצאות מתעדכנות בזמן אמת.",
  },
];

// Pages 3, 4, 6, 7, 8, 9, 10 had no real entries yet in the Canva file —
// just an empty header. Single placeholder rows here so each page has
// something to render and the grid/card layout is visible; replace with
// real entries (or empty arrays + an empty state) once content exists.

export const jokeItems: ComicItem[] = [
  { id: "1", title: "הבדיחה השבועית", caption: "תוכן יתעדכן בקרוב." },
];

export const thoughtItems: OpinionPost[] = [
  { id: "1", title: "כותרת לדוגמה", body: "תוכן יתעדכן בקרוב." },
];

export const behindTheScenesItems: TextHighlight[] = [
  { id: "1", title: "חדר מורים", body: "תוכן יתעדכן בקרוב." },
];

export const opinionItems: OpinionPost[] = [
  { id: "1", title: "מה דעתי על...", body: "תוכן יתעדכן בקרוב.", author: "שם הכותב/ת" },
];

export const comicItems: ComicItem[] = [
  { id: "1", title: "פינת הקומיקס השבועית", caption: "תוכן יתעדכן בקרוב." },
];

export const recommendationItems: RecommendationItem[] = [
  { id: "1", title: "כל מה שמעניין אותנו", description: "תוכן יתעדכן בקרוב.", category: "המלצה" },
];

export const recipeItems: RecommendationItem[] = [
  { id: "1", title: "מתכון לדוגמה", description: "תוכן יתעדכן בקרוב.", category: "מתכון" },
];
