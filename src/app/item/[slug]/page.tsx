import Image from "next/image";
import { notFound } from "next/navigation";
import RichText from "@/components/RichText";
import ImageLightbox from "@/components/ImageLightbox";
import BackButton from "@/components/BackButton";
import { getItemById } from "@/sanity/queries";
import type { PortableTextBlock } from "@portabletext/types";

export const revalidate = 60;

export default async function ItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getItemById(slug);
  if (!item) notFound();

  const richBody = item.bodyRich || item.descriptionRich || item.excerptRich || item.captionRich;
  const plainBody = item.body || item.description || item.excerpt || item.caption;

  return (
    <article className="mx-auto max-w-3xl px-6 py-12" dir="rtl">
      <BackButton inline />
      <BackButton />

      <h1 className="mt-6 text-3xl font-bold">{item.title}</h1>

      {item.author && (
        <p className="mt-2 text-sm text-black/60">מאת: {item.author}</p>
      )}

      {item.publishedAt && (
        <p className="text-sm text-black/40">
          {new Date(item.publishedAt).toLocaleDateString("he-IL")}
        </p>
      )}

      {item.category && (
        <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-hovav-cream border border-black/10">
          {item.category}
        </span>
      )}

      {item.ageGroup && (
        <span className="inline-block mt-2 mr-2 px-3 py-1 text-xs font-medium rounded-full bg-hovav-header-blue border border-black/10">
          {item.ageGroup}
        </span>
      )}

      {item.image && (
        <ImageLightbox
          src={item.image}
          alt={item.title}
          width={800}
          height={450}
          className="mt-6 w-full rounded-md object-cover"
        />
      )}

      {item.videoFileUrl && (
        <video
          src={item.videoFileUrl}
          controls
          className="mt-6 w-full aspect-video rounded-md bg-black"
        />
      )}

      <div className="mt-8 prose prose-lg max-w-none">
        <RichText
          value={richBody as PortableTextBlock[]}
          fallback={plainBody}
          className="leading-relaxed"
        />
      </div>

      {item.images && item.images.length > 0 && (
        <div className="mt-8 grid grid-cols-2 gap-4">
          {item.images.map((img, i) => (
            <ImageLightbox
              key={i}
              src={img}
              alt={`${item.title} ${i + 1}`}
              width={400}
              height={300}
              className="w-full rounded-md object-cover"
            />
          ))}
        </div>
      )}
    </article>
  );
}
