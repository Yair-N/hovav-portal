import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/NewsCard";
import { getNewsItems } from "@/sanity/queries";

export const revalidate = 60;

export default async function NewsPage() {
  const newsItems = await getNewsItems();
  return (
    <div>
      <PageHeader title="חדשות מהשטח" image="/news-header.png" />
      <section className="bg-hovav-cream grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3 md:px-12">
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
