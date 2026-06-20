import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import RichText from "./RichText";
import type { SectionItem } from "@/types/content";
import type { PortableTextBlock } from "@portabletext/types";

export default function ArticleCard({ item }: { item: SectionItem }) {
  const hasFullPage = !!item.slug && !!item.linkPrefix;
  const richText = item.bodyRich || item.descriptionRich || item.captionRich;
  const plainText = item.excerpt || item.body || item.description || item.caption || "";

  const card = (
    <article className="flex flex-col gap-3">
      {item.image ? (
        <Image
          src={item.image}
          alt=""
          width={400}
          height={300}
          className="aspect-[4/3] w-full rounded-md object-cover"
        />
      ) : (
        <PlaceholderImage className="aspect-[4/3] w-full" />
      )}
      <h3 className="text-lg font-bold">{item.title}</h3>
      {item.author && <p className="text-xs text-black/50">מאת: {item.author}</p>}
      <RichText
        value={richText as PortableTextBlock[]}
        fallback={plainText}
        className={`text-sm leading-relaxed text-black/70${hasFullPage ? " line-clamp-2" : ""}`}
      />
      {hasFullPage && (
        <span className="text-sm font-medium text-blue-700 hover:underline">
          להמשך קריאה...
        </span>
      )}
    </article>
  );

  if (hasFullPage) {
    return <Link href={`${item.linkPrefix}${item.slug}`}>{card}</Link>;
  }
  return card;
}
