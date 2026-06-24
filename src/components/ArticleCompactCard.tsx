import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import RichText from "./RichText";
import type { SectionItem } from "@/types/content";
import type { PortableTextBlock } from "@portabletext/types";

export default function ArticleCompactCard({ item }: { item: SectionItem }) {
  const hasFullPage = !!item.slug && !!item.linkPrefix;
  const richText = item.bodyRich || item.descriptionRich || item.captionRich;
  const plainText = item.body || item.description || item.caption || "";

  const card = (
    <article className="article-compact-card card-surface card-surface-interactive">
      <div className="article-compact-card-img">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(max-width: 520px) 100vw, (max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        ) : (
          <PlaceholderImage className="w-full h-full" />
        )}
      </div>
      <div className="article-compact-card-body">
        <h3>{item.title}</h3>
        {item.author && <p className="meta">מאת: {item.author}</p>}
        <RichText
          value={richText as PortableTextBlock[]}
          fallback={plainText}
          className="desc line-clamp-2"
        />
        {hasFullPage && <span className="read-more">להמשך קריאה...</span>}
      </div>
    </article>
  );

  if (hasFullPage) {
    return <Link href={`${item.linkPrefix}${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>{card}</Link>;
  }
  return card;
}
