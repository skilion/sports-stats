"use client";

import { Duel } from "@/app/models/nfl/duel";
import Link from "next/link";
import useSWR, { Fetcher } from "swr";
import DuelTeam from "./components/duel-team";

const fetcher: Fetcher<Duel, string> = (id) =>
  fetch(`/api/nfl/games/${id}/duel`).then((res) => res.json());

export default function NflDuel({ params }: { params: { id: string } }) {
  const { data, error } = useSWR(params.id, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="px-8">
      <Link className="uppercase font-bold my-8" href="/games/nfl">
        🠬 Return to Games
      </Link>
      <div className="whitespace-nowrap my-8">
        <DuelTeam duelTeam={data.home} isHomeTeam={true} />
        <DuelTeam duelTeam={data.away} isHomeTeam={false} />
      </div>
    </div>
  );
}
