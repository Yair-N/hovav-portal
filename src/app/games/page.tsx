import PageHeader from "@/components/PageHeader";
import GameCard from "@/components/GameCard";
import { getGames } from "@/sanity/queries";

export const revalidate = 60;

export default async function GamesPage() {
  const gameItems = await getGames();
  return (
    <div>
      <PageHeader title="כאן משחקים" image="/games-header.png" />
      <section className="bg-hovav-cream grid grid-cols-2 gap-10 px-6 py-12 md:grid-cols-4 md:px-12">
        {gameItems.map((item) => (
          <GameCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
