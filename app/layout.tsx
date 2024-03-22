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
        <div className="w-60 h-screen flex flex-col content-center">
          <Image
            className="mx-auto w-32"
            src="/verified_global_group_logo.jpg"
            width={300}
            height={300}
            alt="Verified Global Logo"
          />
          <div className="mx-auto w-32 pl-4">
            <Nav />
          </div>
        </div>
        <main className="grow mx-4 pt-4 h-screen">{children}</main>
      </body>
    </html>
  );
}
