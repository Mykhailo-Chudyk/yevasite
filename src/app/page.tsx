import Image from "next/image";
import pointer from "./images/pointer.png";
import Folder from "./components/Folder";


export default function Home() {
  return (
    <div className="relative flex-col justify-center max-w-[1600px]">
      <div className="relative flex justify-center w-full mx-auto">
        <div className="relative w-[700px] h-[600px] flex flex-col p-8 ">
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
      <div className="relative flex justify-center w-full">
        <div className="flex flex-row gap-8 w-full max-w-[1600px] px-8">
          <div className="flex-3 h-[600px] flex flex-col p-8">
            <p className="text-[20px] font-arsenica italic font-medium">
              <span className="float-left text-[60px] leading-[60px] mr-2 not-italic">P</span>
              <span className="text-[20px]">roud <span className="text-[#42367e]">Ukrainian</span> currently residing in San Francisco, I completed a worldwide journey around 7 countries to pursue education in <span className="text-[#42367e]">Finance & Economics</span>.</span>
            </p>
            <p className="text-[20px] font-arsenica italic mt-6 font-medium">With experience in <span className="text-[#42367e]">business & data analytics</span>, <span className="text-[#42367e]">venture capital</span>, <span className="text-[#42367e]">journalism</span>, and <span className="text-[#42367e]">marketing</span>, I find my purpose in using the technical skills I learned by embedding them into my creative endeavors to craft narratives and support ideas that contribute to <span className="text-[#42367e]">social change</span>.</p>
            <p className="text-[20px] font-arsenica italic mt-6 font-medium">The most recent manifestation of my purpose became my authorship of <span className="text-[#42367e]">“Undervalued”</span>, a book covering the issue of gender gap in venture capital investment.</p>
          </div>
          <div className="flex-2 h-[600px] flex flex-col p-8">
            <div className="flex flex-row">
              <Folder
                name="my story"
                color="grey"
              />
            </div>
            <div className="flex flex-row gap-6">
              <Folder
                name="experience"
                color="grey"
              />
              <Folder
                name="articles"
                color="grey"
              />
            </div>
            <div className="flex flex-row">
              <Folder
                name="undervalued"
                color="violet"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
