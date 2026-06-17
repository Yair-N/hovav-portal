import PageHeader from "@/components/PageHeader";
import RecommendationCard from "@/components/RecommendationCard";
import { recipeItems } from "@/lib/placeholder-data";

export default function RecipesPage() {
  return (
    <div>
      <PageHeader title="מתכונים בקטנה" image="/Screenshot 2026-06-16 231029.png" />
      <section className="bg-hovav-cream grid grid-cols-2 gap-10 px-6 py-12 md:grid-cols-4 md:px-12">
        {recipeItems.map((item) => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
