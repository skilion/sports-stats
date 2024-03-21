import Nav from "./components/nav";

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <header className="p-8 rounded-t-xl bg-gradient-to-b from-emerald-700">
        <h1 className="mb-6">Games</h1>
        <Nav />
      </header>
      <article className="">{children}</article>
    </div>
  );
}
