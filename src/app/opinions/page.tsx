import PageHeader from "@/components/PageHeader";
import OpinionCard from "@/components/OpinionCard";
import { opinionItems } from "@/lib/placeholder-data";

export default function OpinionsPage() {
  return (
    <div>
      <PageHeader title="מה דעתי" />
      <section className="bg-hovav-cream flex flex-col gap-10 px-6 py-12 md:px-12">
        {opinionItems.map((item) => (
          <OpinionCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
