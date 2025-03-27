import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-20 left-20">
        <h1 className="text-[93px] font-arsenica">hello!</h1>
      </div>
      <div className="absolute top-32 left-40">
        <h1 className="text-[93px] font-arsenica">it's</h1>
      </div>
      <div className="absolute top-44 left-60">
        <h1 className="text-[93px] font-arsenica">Yeva</h1>
      </div>
    </div>
  );
}
