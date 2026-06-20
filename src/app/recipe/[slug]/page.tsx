import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RichText from "@/components/RichText";
import { getRecipeBySlug } from "@/sanity/queries";
import type { PortableTextBlock } from "@portabletext/types";

export const revalidate = 60;

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);
  if (!recipe) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12" dir="rtl">
      <Link href="/section/recipes" className="text-sm text-black/50 hover:underline">
        ← חזרה למתכונים
      </Link>

      <h1 className="mt-6 text-3xl font-bold">{recipe.title}</h1>

      {recipe.author && (
        <p className="mt-2 text-sm text-black/60">מאת: {recipe.author}</p>
      )}

      {recipe.category && (
        <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-hovav-cream border border-black/10">
          {recipe.category}
        </span>
      )}

      {recipe.image && (
        <Image
          src={recipe.image}
          alt=""
          width={800}
          height={450}
          className="mt-6 w-full rounded-md object-cover"
        />
      )}

      <div className="mt-8 prose prose-lg max-w-none">
        <RichText
          value={recipe.bodyRich as PortableTextBlock[]}
          fallback={recipe.description}
          className="leading-relaxed"
        />
      </div>
    </article>
  );
}
