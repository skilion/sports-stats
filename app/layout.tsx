import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Nav from "./components/nav";

const font = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verified Global Homework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} flex bg-vf-blue text-gray-100`}>
        <div className="px-8 h-screen">
          <Image
            className="m-2"
            src="/verified_global_group_logo.jpg"
            width={100}
            height={100}
            alt="Verified Global Logo"
          />
          <Nav />
        </div>
        <main className="grow pt-4 h-screen">{children}</main>
      </body>
    </html>
  );
}
