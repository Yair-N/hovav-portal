import type { SectionConfig } from "@/types/content";

export interface NavSection {
  href: string;
  title: string;
}

export function buildNavSections(sections: SectionConfig[]): NavSection[] {
  return sections
    .filter((s) => s.isVisible)
    .sort((a, b) => a.order - b.order)
    .map((s) => ({ href: `/#${s.slug}`, title: s.title }));
}

export const navSections: NavSection[] = [
  { href: "/#news", title: "חדשות מהשטח" },
  { href: "/#jokes", title: "כאן צוחקים" },
  { href: "/#thoughts", title: "כאן חושבים" },
  { href: "/#games", title: "כאן משחקים" },
  { href: "/#behind-the-scenes", title: 'חוב"ב מאחורי הקלעים' },
  { href: "/#opinions", title: "מה דעתי" },
  { href: "/#comics", title: "פינת הקומיקס השבועית" },
  { href: "/#recommendations", title: "פינת ההמלצות" },
  { href: "/#recipes", title: "מתכונים בקטנה" },
  { href: "/#sports", title: 'חוב"ב על המגרש' },
];
