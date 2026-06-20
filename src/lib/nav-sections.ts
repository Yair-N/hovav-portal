import type { SectionConfig } from "@/types/content";

export interface NavSection {
  href: string;
  title: string;
}

const HOMEPAGE_SLUGS = new Set(["news"]);

export function buildNavSections(sections: SectionConfig[]): NavSection[] {
  return sections
    .filter((s) => s.isVisible)
    .sort((a, b) => a.order - b.order)
    .map((s) => ({
      href: HOMEPAGE_SLUGS.has(s.slug) ? `/#${s.slug}` : `/section/${s.slug}`,
      title: s.title,
    }));
}

export const navSections: NavSection[] = [
  { href: "/#news", title: "חדשות מהשטח" },
  { href: "/section/jokes", title: "כאן צוחקים" },
  { href: "/section/thoughts", title: "כאן חושבים" },
  { href: "/section/games", title: "כאן משחקים" },
  { href: "/section/behind-the-scenes", title: 'חוב"ב מאחורי הקלעים' },
  { href: "/section/opinions", title: "מה דעתי" },
  { href: "/section/recommendations", title: "פינת ההמלצות" },
  { href: "/section/recipes", title: "מתכונים בקטנה" },
  { href: "/section/sports", title: 'חוב"ב על המגרש' },
];
