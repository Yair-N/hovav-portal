import type { TextHighlight } from "@/types/content";

// A text-only highlight block, e.g. the "חוב”ב על המגרש" sports spotlight
// on the Home page. No image slot — just a title and a paragraph.
export default function TextHighlightCard({ item }: { item: TextHighlight }) {
  return (
    <article className="flex flex-col gap-3">
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="text-sm leading-relaxed text-black/70">{item.body}</p>
    </article>
  );
}
