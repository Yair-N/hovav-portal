import { client, urlFor } from './client'
import type {
  NewsItem,
  GameItem,
  ComicItem,
  OpinionPost,
  RecommendationItem,
  TextHighlight,
  SectionConfig,
  SectionItem,
  PreviewCard,
  HomepageCategories,
  CarouselItem,
  FooterConfig,
} from '@/types/content'

// ---------------------------------------------------------------------------
// Image helper — resolves a Sanity image ref to a CDN URL string, or undefined
// ---------------------------------------------------------------------------

function resolveImage(img: unknown, width = 800): string | undefined {
  if (!img) return undefined
  try {
    return urlFor(img as Parameters<typeof urlFor>[0]).width(width).auto('format').url()
  } catch {
    return undefined
  }
}

// ---------------------------------------------------------------------------
// News
// ---------------------------------------------------------------------------

const NEWS_QUERY = `*[_type == "newsItem"] | order(publishedAt desc) {
  _id, title, excerpt, image, publishedAt, author, isFeatured
}`

export async function getNewsItems(): Promise<NewsItem[]> {
  const items = await client.fetch(NEWS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    excerpt: item.excerpt as string,
    image: resolveImage(item.image, 400),
    publishedAt: item.publishedAt as string | undefined,
    author: item.author as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Games
// ---------------------------------------------------------------------------

const GAMES_QUERY = `*[_type == "game"] | order(_createdAt desc) {
  _id, title, description, author, ageGroup, image, link
}`

export async function getGames(): Promise<GameItem[]> {
  const items = await client.fetch(GAMES_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    description: item.description as string,
    author: item.author as string | undefined,
    ageGroup: item.ageGroup as string | undefined,
    image: resolveImage(item.image, 200),
    link: item.link as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Jokes (ComicItem shape)
// ---------------------------------------------------------------------------

const JOKES_QUERY = `*[_type == "joke"] | order(publishedAt desc) {
  _id, title, image, caption, author, publishedAt
}`

export async function getJokes(): Promise<ComicItem[]> {
  const items = await client.fetch(JOKES_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    image: resolveImage(item.image, 500),
    caption: item.caption as string | undefined,
    author: item.author as string | undefined,
    publishedAt: item.publishedAt as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Comics (ComicItem shape)
// ---------------------------------------------------------------------------

const COMICS_QUERY = `*[_type == "comic"] | order(publishedAt desc) {
  _id, title, image, caption, author, publishedAt
}`

export async function getComics(): Promise<ComicItem[]> {
  const items = await client.fetch(COMICS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    image: resolveImage(item.image, 500),
    caption: item.caption as string | undefined,
    author: item.author as string | undefined,
    publishedAt: item.publishedAt as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Thoughts (OpinionPost shape)
// ---------------------------------------------------------------------------

const THOUGHTS_QUERY = `*[_type == "thought"] | order(publishedAt desc) {
  _id, title, body, author, image, publishedAt
}`

export async function getThoughts(): Promise<OpinionPost[]> {
  const items = await client.fetch(THOUGHTS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    body: item.body as string,
    author: item.author as string | undefined,
    image: resolveImage(item.image, 200),
    publishedAt: item.publishedAt as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Opinions (OpinionPost shape)
// ---------------------------------------------------------------------------

const OPINIONS_QUERY = `*[_type == "opinion"] | order(publishedAt desc) {
  _id, title, body, author, image, publishedAt
}`

export async function getOpinions(): Promise<OpinionPost[]> {
  const items = await client.fetch(OPINIONS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    body: item.body as string,
    author: item.author as string | undefined,
    image: resolveImage(item.image, 200),
    publishedAt: item.publishedAt as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Recommendations
// ---------------------------------------------------------------------------

const RECOMMENDATIONS_QUERY = `*[_type == "recommendation"] | order(_createdAt desc) {
  _id, title, description, category, image, author
}`

export async function getRecommendations(): Promise<RecommendationItem[]> {
  const items = await client.fetch(RECOMMENDATIONS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    description: item.description as string,
    category: item.category as string | undefined,
    image: resolveImage(item.image, 300),
    author: item.author as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Recipes (RecommendationItem shape)
// ---------------------------------------------------------------------------

const RECIPES_QUERY = `*[_type == "recipe"] | order(_createdAt desc) {
  _id, title, description, category, image, author
}`

export async function getRecipes(): Promise<RecommendationItem[]> {
  const items = await client.fetch(RECIPES_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    description: item.description as string,
    category: item.category as string | undefined,
    image: resolveImage(item.image, 300),
    author: item.author as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Sports Highlights (TextHighlight shape)
// ---------------------------------------------------------------------------

const SPORTS_HIGHLIGHTS_QUERY = `*[_type == "sportsHighlight"] | order(_createdAt desc) {
  _id, title, body
}`

export async function getSportsHighlights(): Promise<TextHighlight[]> {
  const items = await client.fetch(SPORTS_HIGHLIGHTS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    body: item.body as string,
  }))
}

// ---------------------------------------------------------------------------
// Behind the Scenes (TextHighlight shape)
// ---------------------------------------------------------------------------

const BEHIND_THE_SCENES_QUERY = `*[_type == "behindTheScenes"] | order(_createdAt desc) {
  _id, title, body
}`

export async function getBehindTheScenes(): Promise<TextHighlight[]> {
  const items = await client.fetch(BEHIND_THE_SCENES_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    body: item.body as string,
    videoUrl: item.videoUrl as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Single news article by slug
// ---------------------------------------------------------------------------

const ARTICLE_BY_SLUG_QUERY = `*[_type == "newsItem" && slug.current == $slug][0] {
  _id, "slug": slug.current, title, bodyRich, image, images,
  "videoFileUrl": videoFile.asset->url, publishedAt, author
}`

export async function getArticleBySlug(slug: string): Promise<SectionItem | null> {
  const item = await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug })
  if (!item) return null
  return {
    id: item._id as string,
    slug: item.slug as string,
    title: item.title as string,
    body: item.body as string | undefined,
    bodyRich: item.bodyRich as unknown[] | undefined,
    excerpt: item.excerpt as string | undefined,
    excerptRich: item.excerptRich as unknown[] | undefined,
    image: resolveImage(item.image, 800),
    images: resolveImages(item.images),
    author: item.author as string | undefined,
    publishedAt: item.publishedAt as string | undefined,
    videoFileUrl: item.videoFileUrl as string | undefined,
  }
}

function resolveImages(imgs: unknown): string[] | undefined {
  if (!Array.isArray(imgs) || imgs.length === 0) return undefined
  return imgs.map((img) => resolveImage(img, 800)).filter(Boolean) as string[]
}

// ---------------------------------------------------------------------------
// Generic section item fetcher — normalizes any content type to SectionItem
// ---------------------------------------------------------------------------

const CONTENT_QUERIES: Record<string, string> = {
  newsItem: `*[_type == "newsItem"] | order(publishedAt desc) { _id, "slug": slug.current, title, bodyRich, image, images, "videoFileUrl": videoFile.asset->url, publishedAt, author }`,
  joke: `*[_type == "joke"] | order(publishedAt desc) { _id, title, image, caption, captionRich, author, publishedAt }`,
  thought: `*[_type == "thought"] | order(publishedAt desc) { _id, title, body, bodyRich, author, image, publishedAt }`,
  game: `*[_type == "game"] | order(_createdAt desc) { _id, title, description, descriptionRich, author, ageGroup, image, link }`,
  behindTheScenes: `*[_type == "behindTheScenes"] | order(_createdAt desc) { _id, title, body, bodyRich, videoUrl, "videoFileUrl": videoFile.asset->url }`,
  opinion: `*[_type == "opinion"] | order(publishedAt desc) { _id, title, body, bodyRich, author, image, publishedAt }`,
  comic: `*[_type == "comic"] | order(publishedAt desc) { _id, title, image, caption, captionRich, author, publishedAt }`,
  recommendation: `*[_type == "recommendation"] | order(_createdAt desc) { _id, title, description, descriptionRich, category, image, author }`,
  recipe: `*[_type == "recipe"] | order(_createdAt desc) { _id, "slug": slug.current, title, description, descriptionRich, bodyRich, category, image, author }`,
  sportsHighlight: `*[_type == "sportsHighlight"] | order(_createdAt desc) { _id, title, body, bodyRich }`,
}

// ---------------------------------------------------------------------------
// Single recipe by slug
// ---------------------------------------------------------------------------

const RECIPE_BY_SLUG_QUERY = `*[_type == "recipe" && slug.current == $slug][0] {
  _id, "slug": slug.current, title, description, descriptionRich, bodyRich, category, image, author
}`

export async function getRecipeBySlug(slug: string): Promise<SectionItem | null> {
  const item = await client.fetch(RECIPE_BY_SLUG_QUERY, { slug })
  if (!item) return null
  return {
    id: item._id as string,
    slug: item.slug as string,
    title: item.title as string,
    description: item.description as string | undefined,
    descriptionRich: item.descriptionRich as unknown[] | undefined,
    bodyRich: item.bodyRich as unknown[] | undefined,
    image: resolveImage(item.image, 800),
    author: item.author as string | undefined,
    category: item.category as string | undefined,
  }
}

const LINK_PREFIX: Record<string, string> = {
  newsItem: '/article/',
  recipe: '/recipe/',
}

export async function getSectionItems(contentType: string): Promise<SectionItem[]> {
  const query = CONTENT_QUERIES[contentType]
  if (!query) return []
  const items = await client.fetch(query)
  const prefix = LINK_PREFIX[contentType]
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    slug: item.slug as string | undefined,
    title: item.title as string,
    body: item.body as string | undefined,
    bodyRich: item.bodyRich as unknown[] | undefined,
    excerpt: item.excerpt as string | undefined,
    excerptRich: item.excerptRich as unknown[] | undefined,
    description: item.description as string | undefined,
    descriptionRich: item.descriptionRich as unknown[] | undefined,
    captionRich: item.captionRich as unknown[] | undefined,
    image: resolveImage(item.image, 400),
    images: resolveImages(item.images),
    author: item.author as string | undefined,
    publishedAt: item.publishedAt as string | undefined,
    link: item.link as string | undefined,
    videoUrl: item.videoUrl as string | undefined,
    videoFileUrl: item.videoFileUrl as string | undefined,
    ageGroup: item.ageGroup as string | undefined,
    caption: item.caption as string | undefined,
    category: item.category as string | undefined,
    linkPrefix: prefix,
  }))
}

// ---------------------------------------------------------------------------
// Section Config
// ---------------------------------------------------------------------------

const SECTION_CONFIG_QUERY = `*[_type == "sectionConfig"] | order(order asc) {
  _id, slug, title, description, headerImage, backgroundColor, cardStyle, order, isVisible, contentType
}`

const SECTION_BY_SLUG_QUERY = `*[_type == "sectionConfig" && slug == $slug][0] {
  _id, slug, title, description, headerImage, backgroundColor, cardStyle, order, isVisible, contentType
}`

export async function getSectionConfigBySlug(slug: string): Promise<SectionConfig | null> {
  try {
    const item = await client.fetch(SECTION_BY_SLUG_QUERY, { slug })
    if (item) {
      return {
        id: item._id as string,
        slug: item.slug as string,
        title: item.title as string,
        description: item.description as string | undefined,
        headerImage: resolveImage(item.headerImage, 300),
        backgroundColor: item.backgroundColor as string | undefined,
        cardStyle: (item.cardStyle as string) || 'article',
        order: (item.order as number) || 0,
        isVisible: item.isVisible !== false,
        contentType: item.contentType as string,
      } as SectionConfig
    }
  } catch { /* not yet created */ }
  return DEFAULT_SECTIONS.find((s) => s.slug === slug) || null
}

const DEFAULT_SECTIONS: SectionConfig[] = [
  { id: 'news', slug: 'news', title: 'חדשות מהשטח', headerImage: '/news-header.png', cardStyle: 'article', order: 1, isVisible: true, contentType: 'newsItem' },
  { id: 'jokes', slug: 'jokes', title: 'כאן צוחקים', headerImage: '/jokes-header.png', cardStyle: 'article', order: 2, isVisible: true, contentType: 'joke' },
  { id: 'thoughts', slug: 'thoughts', title: 'כאן חושבים', headerImage: '/thoughts-header.png', cardStyle: 'article', order: 3, isVisible: true, contentType: 'thought' },
  { id: 'games', slug: 'games', title: 'כאן משחקים', headerImage: '/games-header.png', cardStyle: 'link-card', order: 4, isVisible: true, contentType: 'game' },
  { id: 'behind-the-scenes', slug: 'behind-the-scenes', title: 'חוב"ב מאחורי הקלעים', headerImage: '/behind-the-scenes-header.png', cardStyle: 'video', order: 5, isVisible: true, contentType: 'behindTheScenes' },
  { id: 'opinions', slug: 'opinions', title: 'מה דעתי', cardStyle: 'article', order: 6, isVisible: true, contentType: 'opinion' },
  { id: 'comics', slug: 'comics', title: 'פינת הקומיקס השבועית', headerImage: '/comics-header.png', cardStyle: 'article', order: 7, isVisible: false, contentType: 'comic' },
  { id: 'recommendations', slug: 'recommendations', title: 'פינת ההמלצות', headerImage: '/recommendations-header.png', cardStyle: 'link-card', order: 8, isVisible: true, contentType: 'recommendation' },
  { id: 'recipes', slug: 'recipes', title: 'מתכונים בקטנה', headerImage: '/recipes-header.png', cardStyle: 'article', order: 9, isVisible: true, contentType: 'recipe' },
  { id: 'sports', slug: 'sports', title: 'חוב"ב על המגרש', cardStyle: 'article', order: 10, isVisible: true, contentType: 'sportsHighlight' },
]

export async function getSectionConfigs(): Promise<SectionConfig[]> {
  try {
    const items = await client.fetch(SECTION_CONFIG_QUERY)
    if (items.length > 0) {
      return items.map((item: Record<string, unknown>) => ({
        id: item._id as string,
        slug: item.slug as string,
        title: item.title as string,
        description: item.description as string | undefined,
        headerImage: resolveImage(item.headerImage, 300),
        backgroundColor: item.backgroundColor as string | undefined,
        cardStyle: (item.cardStyle as string) || 'article',
        order: (item.order as number) || 0,
        isVisible: item.isVisible !== false,
        contentType: item.contentType as string,
      }))
    }
  } catch { /* Sanity schema not yet created */ }
  return DEFAULT_SECTIONS
}

// ---------------------------------------------------------------------------
// Footer Config
// ---------------------------------------------------------------------------

const FOOTER_QUERY = `*[_type == "footerConfig"][0] {
  heading, contactLabel, contactUrl, socialText, socialHandle, image
}`

const DEFAULT_FOOTER: FooterConfig = {
  heading: 'הכירו את מערכת מחוברים',
  contactLabel: 'צרו אתנו קשר',
  contactUrl: '#',
  socialText: 'Keep up with our events on social media',
  socialHandle: '@reallygreatsite',
}

export async function getFooterConfig(): Promise<FooterConfig> {
  try {
    const item = await client.fetch(FOOTER_QUERY)
    if (item) {
      return {
        heading: (item.heading as string) || DEFAULT_FOOTER.heading,
        contactLabel: (item.contactLabel as string) || DEFAULT_FOOTER.contactLabel,
        contactUrl: (item.contactUrl as string) || DEFAULT_FOOTER.contactUrl,
        socialText: (item.socialText as string) || DEFAULT_FOOTER.socialText,
        socialHandle: (item.socialHandle as string) || DEFAULT_FOOTER.socialHandle,
        image: resolveImage(item.image, 400),
      }
    }
  } catch { /* Sanity schema not yet created */ }
  return DEFAULT_FOOTER
}

// ---------------------------------------------------------------------------
// Homepage category preview cards
// ---------------------------------------------------------------------------

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0] {
  flexibleHourSections[] { title, href, description, image },
  cultureSections[] { title, href, description, image },
  carousel[] { image, caption },
  whiteboardMessages
}`

function mapPreviewCards(items: Record<string, unknown>[] | null): PreviewCard[] {
  if (!items) return []
  return items.map((c) => ({
    title: c.title as string,
    href: c.href as string,
    description: c.description as string,
    image: resolveImage(c.image, 300),
  }))
}

const DEFAULT_CATEGORIES: HomepageCategories = {
  flexibleHour: [
    { title: 'כאן חושבים', href: '/section/thoughts', description: 'רוצים להפעיל את הראש? כאן תמצאו חידות, חקירות ומשעשעות שיתנו לכם לחשוב ולהסיק מסקנות', image: '/thoughts-header.png' },
    { title: 'כאן צוחקים', href: '/section/jokes', description: 'כי הצחוק הוא הרפואה הטובה ביותר. לחצו כאן ותתחילו לצחוק', image: '/jokes-header.png' },
    { title: 'כאן משחקים', href: '/section/games', description: 'תלמידי שכבות ד׳-ו׳ יצרו עבורכם משחקים לימודיים אינטראקטיביים', image: '/games-header.png' },
  ],
  culture: [
    { title: 'מה דעתי', href: '/section/opinions', description: 'פינת הקורי השבועית שלנו בנושאים הרלוונטיים באמת לחיינו. חולקים את דעתנו? היגיבו והשפיעו', image: '/thoughts-header.png' },
    { title: 'כל מה שמעניין אותו', href: '/section/recommendations', description: 'מחפשים את הספר הבא? הסרט הבא? ילדי בית הספר יודעים', image: '/recommendations-header.png' },
    { title: 'מתכונים בקטנה', href: '/section/recipes', description: 'מתכונים קלים וטעימים שגם אתם יכולים להכין בבית', image: '/recipes-header.png' },
  ],
}

export async function getHomepageCategories(): Promise<HomepageCategories> {
  try {
    const settings = await client.fetch(SITE_SETTINGS_QUERY)
    if (settings) {
      const flex = mapPreviewCards(settings.flexibleHourSections as Record<string, unknown>[] | null)
      const culture = mapPreviewCards(settings.cultureSections as Record<string, unknown>[] | null)
      if (flex.length > 0 || culture.length > 0) {
        return {
          flexibleHour: flex.length > 0 ? flex : DEFAULT_CATEGORIES.flexibleHour,
          culture: culture.length > 0 ? culture : DEFAULT_CATEGORIES.culture,
        }
      }
    }
  } catch { /* schema not yet created */ }
  return DEFAULT_CATEGORIES
}

// ---------------------------------------------------------------------------
// Carousel
// ---------------------------------------------------------------------------

const DEFAULT_WHITEBOARD_MESSAGES = [
  'לוח מודעות — הודעות מערכת ועדכונים חשובים יופיעו כאן',
  'שימו לב! מחר יום ספורט — להגיע עם בגדי ספורט',
  'מזל טוב לכיתה ד׳2 על הזכייה בתחרות!',
]

export async function getWhiteboardMessages(): Promise<string[]> {
  try {
    const settings = await client.fetch(SITE_SETTINGS_QUERY)
    if (settings?.whiteboardMessages && Array.isArray(settings.whiteboardMessages) && settings.whiteboardMessages.length > 0) {
      return settings.whiteboardMessages as string[]
    }
  } catch { /* schema not yet created */ }
  return DEFAULT_WHITEBOARD_MESSAGES
}

export async function getCarouselItems(): Promise<CarouselItem[]> {
  try {
    const settings = await client.fetch(SITE_SETTINGS_QUERY)
    if (settings?.carousel && Array.isArray(settings.carousel)) {
      return settings.carousel
        .map((item: Record<string, unknown>) => ({
          image: resolveImage(item.image, 800),
          caption: item.caption as string | undefined,
        }))
        .filter((item: CarouselItem) => item.image) as CarouselItem[]
    }
  } catch { /* schema not yet created */ }
  return []
}

