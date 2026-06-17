import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import type { NewsItem } from "@/types/content";

// Used both in the News page grid and as the single featured story on Home.
export default function NewsCard({ item }: { item: NewsItem }) {
  return (
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
      <p className="text-sm leading-relaxed text-black/70">{item.excerpt}</p>
    </article>
  );
}
