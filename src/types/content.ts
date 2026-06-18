// Shared content models for the site. Each type maps to a Sanity document schema.

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
