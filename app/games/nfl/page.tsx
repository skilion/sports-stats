"use client";

import useSWR, { Fetcher } from "swr";
import Link from "next/link";
import { Game } from "@/app/models/nfl/game";

const fetcher: Fetcher<Game[], string> = (url) =>
  fetch(url).then((res) => res.json());

export default function NflGames() {
  const { data, error } = useSWR("/api/nfl/games", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul className="p-8">
      {data.map((game) => (
        <li
          key={game.id}
          className="mb-8 p-4 rounded-lg bg-zinc-800 flex max-w-screen-sm"
        >
          <div>
            <div className="mb-4 flex items-center">
              <div className="rounded-full size-8 bg-gray-300 text-gray-500 font-bold flex justify-center items-center">
                {game.home.name[0]}
              </div>
              <div className="ml-2">{game.home.name}</div>
            </div>
            <div className="flex items-center">
              <div className="rounded-full size-8 bg-gray-300 text-gray-500 font-bold flex justify-center items-center">
                {game.away.name[0]}
              </div>
              <div className="ml-2">{game.away.name}</div>
            </div>
          </div>
          <div className="mr-8 uppercase font-bold flex flex-grow justify-end items-center">
            <Link href={`/games/nfl/${game.id}/duel`}>View Duel 🠮</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
