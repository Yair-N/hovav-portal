import PageHeader from "@/components/PageHeader";
import TextHighlightCard from "@/components/TextHighlightCard";
import { behindTheScenesItems } from "@/lib/placeholder-data";

export default function BehindTheScenesPage() {
  return (
    <div>
      <PageHeader title={'חוב"ב מאחורי הקלעים'} image="/Screenshot 2026-06-16 230927.png" />
      <section className="bg-hovav-cream flex flex-col gap-10 px-6 py-12 md:px-12">
        {behindTheScenesItems.map((item) => (
          <TextHighlightCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
