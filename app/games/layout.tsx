import Nav from "./components/nav";

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-col">
      <header className="p-8 rounded-t-xl bg-gradient-to-b from-emerald-700 to-vf-blue2">
        <h1 className="mb-6">Games</h1>
        <Nav />
      </header>
      <article className="bg-vf-blue2 flex-grow">{children}</article>
    </div>
  );
}
