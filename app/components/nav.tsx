"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="font-bold">
      <ul>
        <li className="py-1">
          <Link
            href="/"
            className={pathname === "/" ? "text-gray-100" : "text-gray-400"}
          >
            Home
          </Link>
        </li>
        <li className="py-1">
          <Link
            href="/games"
            className={
              pathname === "/games" ? "text-gray-100" : "text-gray-400"
            }
          >
            Games
          </Link>
        </li>
      </ul>
    </nav>
  );
}
