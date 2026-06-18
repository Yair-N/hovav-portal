import PageHeader from "@/components/PageHeader";
import ComicCard from "@/components/ComicCard";
import { getComics } from "@/sanity/queries";

export const revalidate = 60;

export default async function ComicsPage() {
  const comicItems = await getComics();
  return (
    <div>
      <PageHeader title="פינת הקומיקס השבועית" image="/comics-header.png" />
      <section className="bg-hovav-cream grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3 md:px-12">
        {comicItems.map((item) => (
          <ComicCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
