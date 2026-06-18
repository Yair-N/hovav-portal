import PageHeader from "@/components/PageHeader";
import ComicCard from "@/components/ComicCard";
import { getJokes } from "@/sanity/queries";

export const revalidate = 60;

export default async function JokesPage() {
  const jokeItems = await getJokes();
  return (
    <div>
      <PageHeader title="כאן צוחקים" image="/jokes-header.png" />
      <section className="bg-hovav-cream grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3 md:px-12">
        {jokeItems.map((item) => (
          <ComicCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
