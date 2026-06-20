// Shared content models for the site. Each type maps to a Sanity document schema.

/** A single news story shown on the News page grid and as a Home page teaser. */
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  publishedAt?: string;
  author?: string;
}

/** A learning game / activity shown on the Games page. */
export interface GameItem {
  id: string;
  title: string;
  description: string;
  author?: string;
  ageGroup?: string;
  image?: string;
  link?: string;
}

/** A single comic strip entry for the weekly comics corner. */
export interface ComicItem {
  id: string;
  title: string;
  image?: string;
  caption?: string;
  author?: string;
  publishedAt?: string;
}

/** A single opinion / personal column post. */
export interface OpinionPost {
  id: string;
  title: string;
  body: string;
  author?: string;
  image?: string;
  publishedAt?: string;
}

/** A recommendation (book / movie / app / etc.) or a mini recipe entry. */
export interface RecommendationItem {
  id: string;
  title: string;
  description: string;
  category?: string;
  image?: string;
  author?: string;
}

/** A generic text-only highlight block with optional video. */
export interface TextHighlight {
  id: string;
  title: string;
  body: string;
  videoUrl?: string;
}

/** Card display style for a section. */
export type CardStyle = "article" | "article-compact" | "link-card" | "video";

/** Section configuration — drives layout, nav, and section headers. */
export interface SectionConfig {
  id: string;
  slug: string;
  title: string;
  description?: string;
  headerImage?: string;
  backgroundColor?: string;
  cardStyle: CardStyle;
  order: number;
  isVisible: boolean;
  contentType: string;
}

/** Unified item shape that all card styles can render from. */
export interface SectionItem {
  id: string;
  slug?: string;
  title: string;
  body?: string;
  bodyRich?: unknown[];
  excerpt?: string;
  excerptRich?: unknown[];
  description?: string;
  descriptionRich?: unknown[];
  captionRich?: unknown[];
  image?: string;
  images?: string[];
  author?: string;
  publishedAt?: string;
  link?: string;
  videoUrl?: string;
  videoFileUrl?: string;
  ageGroup?: string;
  caption?: string;
  category?: string;
  linkPrefix?: string;
}

/** A preview card shown in the homepage category sections. */
export interface PreviewCard {
  title: string;
  href: string;
  description: string;
  image?: string;
}

/** Homepage category previews from siteSettings. */
export interface HomepageCategories {
  flexibleHour: PreviewCard[];
  culture: PreviewCard[];
}

/** A carousel image with caption. */
export interface CarouselItem {
  image: string;
  caption?: string;
}

/** Footer configuration from Sanity. */
export interface FooterConfig {
  heading: string;
  contactLabel: string;
  contactUrl: string;
  socialText: string;
  socialHandle: string;
  image?: string;
}
