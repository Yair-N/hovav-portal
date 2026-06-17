import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import type { RecommendationItem } from "@/types/content";

export default function RecommendationCard({ item }: { item: RecommendationItem }) {
  return (
    <article className="flex flex-col gap-3">
      {item.image ? (
        <Image
          src={item.image}
          alt=""
          width={300}
          height={300}
          className="aspect-square w-full rounded-md object-cover"
        />
      ) : (
        <PlaceholderImage className="aspect-square w-full" />
      )}
      {item.category ? (
        <span className="text-xs font-semibold text-black/50">{item.category}</span>
      ) : null}
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="text-sm leading-relaxed text-black/70">{item.description}</p>
      {item.author ? <p className="text-xs text-black/50">{item.author}</p> : null}
    </article>
  );
}
