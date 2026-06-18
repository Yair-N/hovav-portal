import PageHeader from "@/components/PageHeader";
import TextHighlightCard from "@/components/TextHighlightCard";
import { getBehindTheScenes } from "@/sanity/queries";

export const revalidate = 60;

export default async function BehindTheScenesPage() {
  const behindTheScenesItems = await getBehindTheScenes();
  return (
    <div>
      <PageHeader title={'חוב"ב מאחורי הקלעים'} image="/behind-the-scenes-header.png" />
      <section className="bg-hovav-cream flex flex-col gap-10 px-6 py-12 md:px-12">
        {behindTheScenesItems.map((item) => (
          <TextHighlightCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
