import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RichText from "@/components/RichText";
import { getArticleBySlug } from "@/sanity/queries";
import type { PortableTextBlock } from "@portabletext/types";

export const revalidate = 60;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12" dir="rtl">
      <Link href="/#news" className="text-sm text-black/50 hover:underline">
        → חזרה לחדשות מהשטח
      </Link>

      <h1 className="mt-6 text-3xl font-bold">{article.title}</h1>

      {article.author && (
        <p className="mt-2 text-sm text-black/60">מאת: {article.author}</p>
      )}
      {article.publishedAt && (
        <p className="text-sm text-black/40">
          {new Date(article.publishedAt).toLocaleDateString("he-IL")}
        </p>
      )}

      {article.image && (
        <Image
          src={article.image}
          alt=""
          width={800}
          height={450}
          className="mt-6 w-full rounded-md object-cover"
        />
      )}

      {article.videoFileUrl && (
        <video
          src={article.videoFileUrl}
          controls
          className="mt-6 w-full aspect-video rounded-md bg-black"
        />
      )}

      <div className="mt-8 prose prose-lg max-w-none">
        <RichText
          value={article.bodyRich as PortableTextBlock[]}
          fallback={article.body || article.excerpt}
          className="leading-relaxed"
        />
      </div>

      {article.images && article.images.length > 0 && (
        <div className="mt-8 grid grid-cols-2 gap-4">
          {article.images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt=""
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
