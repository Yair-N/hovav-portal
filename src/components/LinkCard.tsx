import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import RichText from "./RichText";
import type { SectionItem } from "@/types/content";
import type { PortableTextBlock } from "@portabletext/types";

export default function LinkCard({ item }: { item: SectionItem }) {
  const richText = item.descriptionRich || item.bodyRich || item.excerptRich;
  const plainText = item.description || item.excerpt || item.body || "";
  const hasFullPage = !!item.slug && !!item.linkPrefix;

  const content = (
    <article className="game-card">
      <div className="game-card-icon">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            width={96}
            height={96}
            className="h-20 w-20 object-contain"
          />
        ) : (
          <PlaceholderImage className="h-20 w-20" label="" />
        )}
      </div>
      <h3 className="game-card-title">{item.title}</h3>
      {item.author && <p className="game-card-meta">מאת: {item.author}</p>}
      {item.ageGroup && <p className="game-card-meta">{item.ageGroup}</p>}
      <RichText
        value={richText as PortableTextBlock[]}
        fallback={plainText}
        className={`game-card-desc${hasFullPage ? " line-clamp-2" : ""}`}
      />
      {hasFullPage && (
        <span className="text-sm font-medium text-blue-700">
          להמשך קריאה...
        </span>
      )}
    </article>
  );

  if (hasFullPage) {
    return (
      <Link href={`${item.linkPrefix}${item.slug}`} className="game-card-link">
        {content}
      </Link>
    );
  }

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="game-card-link">
        {content}
      </a>
    );
  }

  return content;
}
