import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ArticleCard from "@/components/ArticleCard";
import LinkCard from "@/components/LinkCard";
import VideoCard from "@/components/VideoCard";
import { getSectionConfigBySlug, getSectionItems } from "@/sanity/queries";
import type { CardStyle } from "@/types/content";

export const revalidate = 60;

const GRID_CLASS: Record<CardStyle, string> = {
  article: "section-content grid grid-cols-1 md:grid-cols-3",
  "link-card": "section-content grid grid-cols-2 md:grid-cols-4",
  video: "section-content flex flex-col",
};

const CARD_COMPONENT: Record<CardStyle, typeof ArticleCard> = {
  article: ArticleCard,
  "link-card": LinkCard,
  video: VideoCard,
};

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = await getSectionConfigBySlug(slug);
  if (!config || !config.isVisible) notFound();

  const items = await getSectionItems(config.contentType);
  const Card = CARD_COMPONENT[config.cardStyle];
  const gridClass = GRID_CLASS[config.cardStyle];

  return (
    <section
      id={config.slug}
      className="section-page"
      style={config.backgroundColor ? { backgroundColor: config.backgroundColor } : undefined}
    >
      <PageHeader
        title={config.title}
        description={config.description}
        image={config.headerImage}
      />
      <div className={gridClass}>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
