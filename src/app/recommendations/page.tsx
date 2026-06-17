import PageHeader from "@/components/PageHeader";
import RecommendationCard from "@/components/RecommendationCard";
import { recommendationItems } from "@/lib/placeholder-data";

export default function RecommendationsPage() {
  return (
    <div>
      <PageHeader title="פינת ההמלצות" image="/Screenshot 2026-06-16 231035.png" />
      <section className="bg-hovav-cream grid grid-cols-2 gap-10 px-6 py-12 md:grid-cols-4 md:px-12">
        {recommendationItems.map((item) => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
