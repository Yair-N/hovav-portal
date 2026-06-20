import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import RichText from "./RichText";
import type { SectionItem } from "@/types/content";
import type { PortableTextBlock } from "@portabletext/types";

export default function LinkCard({ item }: { item: SectionItem }) {
  const richText = item.descriptionRich || item.bodyRich || item.excerptRich;
  const plainText = item.description || item.excerpt || item.body || "";

  const content = (
    <article className="flex flex-col items-center gap-3 text-center">
      {item.image ? (
        <Image
          src={item.image}
          alt=""
          width={96}
          height={96}
          className="h-24 w-24 object-contain"
        />
      ) : (
        <PlaceholderImage className="h-24 w-24" label="" />
      )}
      <h3 className="text-lg font-bold underline">{item.title}</h3>
      {item.author && <p className="text-xs text-black/50">מאת: {item.author}</p>}
      {item.ageGroup && <p className="text-xs text-black/50">{item.ageGroup}</p>}
      <RichText
        value={richText as PortableTextBlock[]}
        fallback={plainText}
        className="text-sm leading-relaxed text-black/70"
      />
    </article>
  );

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}
