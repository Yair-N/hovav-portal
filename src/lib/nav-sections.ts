// Central list of the site's sections. Used to build the nav bar.
// Each href is a hash anchor on the single scrolling homepage.

export interface NavSection {
  href: string;
  title: string;
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
