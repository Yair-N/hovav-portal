import PageHeader from "@/components/PageHeader";
import ComicCard from "@/components/ComicCard";
import { jokeItems } from "@/lib/placeholder-data";

export default function JokesPage() {
  return (
    <div>
      <PageHeader title="כאן צוחקים" image="/Screenshot 2026-06-16 231008.png" />
      <section className="bg-hovav-cream grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3 md:px-12">
        {jokeItems.map((item) => (
          <ComicCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
