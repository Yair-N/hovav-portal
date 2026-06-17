import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import type { SectionPreview } from "@/types/content";

// The Home page's "directory" cards, one per section, each linking out to
// that section's full page.
export default function SectionPreviewCard({ item }: { item: SectionPreview }) {
  return (
    <Link href={item.href} className="flex flex-col gap-3 transition hover:opacity-80">
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
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="text-sm leading-relaxed text-black/70">{item.description}</p>
    </Link>
  );
}
