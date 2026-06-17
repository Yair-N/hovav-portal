// Shared content models for the site.
//
// These mirror the "cards" identified in the Canva design. Each one is a
// placeholder shape for content that will eventually come from the CMS
// (Sanity) once that's wired up. For now, pages are filled with static
// placeholder data living in src/lib/placeholder-data.ts.

/** A single news story shown on the News page grid and as a Home page teaser. */
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  /** Path under /public, or undefined while no photo has been supplied yet. */
  image?: string;
  /** ISO date string. */
  publishedAt?: string;
  author?: string;
}

/** A learning game / activity shown on the Games page. */
export interface GameItem {
  id: string;
  title: string;
  description: string;
  /** Free-text credit, e.g. "מאת: ליה צידון". */
  author?: string;
  /** Free-text grade/age range, e.g. "לכיתות ב-ג". */
  ageGroup?: string;
  image?: string;
  /** External or internal link to actually play the game. */
  link?: string;
}

/** A short teaser card on the Home page that links out to one of the other sections. */
export interface SectionPreview {
  id: string;
  /** Matches the target section's route, e.g. "/jokes". */
  href: string;
  title: string;
  description: string;
  image?: string;
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

/** A generic text-only highlight block (e.g. the "חוב”ב על המגרש" sports spotlight). */
export interface TextHighlight {
  id: string;
  title: string;
  body: string;
}

/** Common props every section header banner needs. */
export interface PageHeaderContent {
  title: string;
  image?: string;
}
