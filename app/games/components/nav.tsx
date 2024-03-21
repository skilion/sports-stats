"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="font-bold">
      <ul>
        <li>
          <Link
            href="/games/nfl"
            className={`inline-block  rounded-xl py-1 px-2 ${
              pathname === "/games/nfl"
                ? "text-gray-100 bg-sky-800"
                : "text-gray-400 border-sky-800 border-solid border-2"
            }`}
          >
            <Image
              className="size-4 inline-block m-1"
              src="/nfl-logo.png"
              width={30}
              height={30}
              alt="NFL logo"
            />
            NFL
          </Link>
        </li>
      </ul>
    </nav>
  );
}
