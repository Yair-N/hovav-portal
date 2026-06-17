import PageHeader from "@/components/PageHeader";
import OpinionCard from "@/components/OpinionCard";
import { thoughtItems } from "@/lib/placeholder-data";

export default function ThoughtsPage() {
  return (
    <div>
      <PageHeader title="כאן חושבים" image="/Screenshot 2026-06-16 230944.png" />
      <section className="bg-hovav-cream flex flex-col gap-10 px-6 py-12 md:px-12">
        {thoughtItems.map((item) => (
          <OpinionCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
