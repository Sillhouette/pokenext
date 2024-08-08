import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import { PokemonList } from "@/components/PokemonList/PokemonList";
import { TrainerCard } from "@/components/TrainerCard/TrainerCard";
import { PokemonListSkeleton, PokemonSkeleton } from "@pokenext/ui";

import { Suspense } from "react";

export default async function PokedexBasicHomepage({
  params,
  searchParams,
}: any) {
  const selectedPokemon = searchParams.selected ?? "bulbasaur";
  return (
    <main>
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-4">
        <div className="flex flex-col">
          <Suspense fallback={<PokemonSkeleton />}>
            <TrainerCard />
          </Suspense>
          
          <Suspense fallback={<PokemonSkeleton />}>
            <PokemonCard name={selectedPokemon} />
          </Suspense>
        </div>

        <Suspense fallback={<PokemonListSkeleton />}>
          <PokemonList limit={25} offset={0} />
        </Suspense>
      </section>
    </main>
  );
}
