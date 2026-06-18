import PageHeader from "@/components/PageHeader";
import OpinionCard from "@/components/OpinionCard";
import { getThoughts } from "@/sanity/queries";

export const revalidate = 60;

export default async function ThoughtsPage() {
  const thoughtItems = await getThoughts();
  return (
    <div>
      <PageHeader title="כאן חושבים" image="/thoughts-header.png" />
      <section className="bg-hovav-cream flex flex-col gap-10 px-6 py-12 md:px-12">
        {thoughtItems.map((item) => (
          <OpinionCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
