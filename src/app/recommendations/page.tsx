import PageHeader from "@/components/PageHeader";
import RecommendationCard from "@/components/RecommendationCard";
import { getRecommendations } from "@/sanity/queries";

export const revalidate = 60;

export default async function RecommendationsPage() {
  const recommendationItems = await getRecommendations();
  return (
    <div>
      <PageHeader title="פינת ההמלצות" image="/recommendations-header.png" />
      <section className="bg-hovav-cream grid grid-cols-2 gap-10 px-6 py-12 md:grid-cols-4 md:px-12">
        {recommendationItems.map((item) => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
