import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import type { ComicItem } from "@/types/content";

export default function ComicCard({ item }: { item: ComicItem }) {
  return (
    <article className="flex flex-col gap-3">
      {item.image ? (
        <Image
          src={item.image}
          alt=""
          width={500}
          height={500}
          className="aspect-square w-full rounded-md object-cover"
        />
      ) : (
        <PlaceholderImage className="aspect-square w-full" />
      )}
      <h3 className="text-lg font-bold">{item.title}</h3>
      {item.caption ? (
        <p className="text-sm leading-relaxed text-black/70">{item.caption}</p>
      ) : null}
      {item.author ? <p className="text-xs text-black/50">{item.author}</p> : null}
    </article>
  );
}
