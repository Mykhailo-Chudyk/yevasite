import Image from "next/image";
import pointer from "./images/pointer.png";

export default function Home() {
  return (
    <div className="relative min-h-screen flex justify-center w-full max-w-[1600px]">
      <div className="relative max-w-[700px] min-w-[700px] h-[600px] flex flex-col p-8">
        <div className="mt-8">
          <h1 className="text-[93px] font-arsenica italic font-medium">hello<span className="not-italic">!</span></h1>
        </div>
        <div className="mt-[-65px] ml-30">
          <h1 className="text-[93px] font-arsenica font-medium">it&apos;s</h1>
        </div>
        <div className="mt-[-40px] ml-80">
          <h1 className="text-[93px] font-arsenica font-medium">Yeva</h1>
        </div>
        <div className="w-full flex-col items-center mt-10 ml-40">
          <h1 className="text-[31px] font-arsenica font-medium">let me <span className="italic text-[#42367e] cursor-pointer">introduce</span> myself</h1>
        </div>
        <div className="w-full flex-col items-center mt-0 ml-62">
          <Image src={pointer} alt="pointer" width={35} height={35} className="ml-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
