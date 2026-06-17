import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import type { OpinionPost } from "@/types/content";

export default function OpinionCard({ item }: { item: OpinionPost }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-md object-cover"
          />
        ) : (
          <PlaceholderImage className="h-24 w-24 shrink-0" />
        )}
        <div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          {item.author ? <p className="text-sm text-black/50">{item.author}</p> : null}
        </div>
      </div>
      <p className="leading-relaxed text-black/70">{item.body}</p>
    </article>
  );
}
