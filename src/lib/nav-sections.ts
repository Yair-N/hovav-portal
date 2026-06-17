// Central list of the site's sections, mirroring the 11 pages from the
// Canva design (page 11 was an empty placeholder in the design and isn't
// represented here). Used to build the nav bar and the Home page's
// section-preview cards from one source of truth.

export interface NavSection {
  href: string;
  title: string;
}

export const navSections: NavSection[] = [
  { href: "/news", title: "חדשות מהשטח" },
  { href: "/jokes", title: "כאן צוחקים" },
  { href: "/thoughts", title: "כאן חושבים" },
  { href: "/games", title: "כאן משחקים" },
  { href: "/behind-the-scenes", title: "חוב\"ב מאחורי הקלעים" },
  { href: "/opinions", title: "מה דעתי" },
  { href: "/comics", title: "פינת הקומיקס השבועית" },
  { href: "/recommendations", title: "פינת ההמלצות" },
  { href: "/recipes", title: "מתכונים בקטנה" },
];
