import PageHeader from "@/components/PageHeader";
import RecommendationCard from "@/components/RecommendationCard";
import { getRecipes } from "@/sanity/queries";

export const revalidate = 60;

export default async function RecipesPage() {
  const recipeItems = await getRecipes();
  return (
    <div>
      <PageHeader title="מתכונים בקטנה" image="/recipes-header.png" />
      <section className="bg-hovav-cream grid grid-cols-2 gap-10 px-6 py-12 md:grid-cols-4 md:px-12">
        {recipeItems.map((item) => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
