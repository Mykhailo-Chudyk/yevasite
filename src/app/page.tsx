import Image from "next/image";
import pointer from "./images/pointer.png";
import ClientAnimatedOval from "@/components/ClientAnimatedOval";

export default function Home() {
  return (
    <div className="relative min-h-screen flex justify-center w-full">
      <div className="absolute left-1/2 -translate-x-1/2 max-w-[700px] min-w-[700px] h-[500px] flex justify-center items-center">
        <div className="absolute top-20 left-20">
          <h1 className="text-[93px] font-arsenica italic font-medium">hello<span className="not-italic">!</span></h1>
        </div>
        <div className="absolute top-40 left-50">
          <h1 className="text-[93px] font-arsenica font-medium">it's</h1>
        </div>
        <div className="absolute top-70 left-100">
          <h1 className="text-[93px] font-dancing-script italic">Yeva</h1>
        </div>
        <div className="absolute top-60 left-80 min-w-[400px] min-h-[250px]">
          <ClientAnimatedOval width={400} height={250} />
        </div>
        <div className="absolute top-120 left-55">
          <h1 className="text-[31px] font-arsenica font-medium">let me <span className="italic text-[#42367e] cursor-pointer">introduce</span> myself</h1>
          <Image src={pointer} alt="pointer" width={35} height={35} className="ml-30 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
