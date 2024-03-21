import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full relative">
      <Image
        src="/player.svg"
        fill
        style={{
          objectFit: "contain",
        }}
        sizes="100vw"
        alt="Football player outline holding ball"
      />
    </div>
  );
}
