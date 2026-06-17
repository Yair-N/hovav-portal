import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/NewsCard";
import { newsItems } from "@/lib/placeholder-data";

export default function NewsPage() {
  return (
    <div>
      <PageHeader title="חדשות מהשטח" image="/Screenshot 2026-06-16 230906.png" />
      <section className="bg-hovav-cream grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3 md:px-12">
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
