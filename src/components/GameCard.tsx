import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import type { GameItem } from "@/types/content";

// Used in the Games page grid: icon/illustration + underlined bold title +
// description that usually also carries the student creator's credit.
export default function GameCard({ item }: { item: GameItem }) {
  return (
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
      <p className="text-sm leading-relaxed text-black/70">
        {item.description}
        {item.author ? (
          <>
            <br />
            {item.author}
          </>
        ) : null}
        {item.ageGroup ? (
          <>
            <br />
            {item.ageGroup}
          </>
        ) : null}
      </p>
    </article>
  );
}
