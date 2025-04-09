import Image from "next/image";
import yeva from "./images/yeva.png";
import hello from "./images/hello.png";
import its from "./images/its.png";
import Folder from "./components/Folder";
import ScrollTrigger from "./components/ScrollTrigger";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pb-30">
      <div className="relative flex justify-center w-full">
        <div className="relative w-full max-w-[700px] h-[600px] flex flex-col p-4 sm:p-8">
          <div className="mt-8 ml-8 sm:ml-14">
            <Image src={hello} alt="Hello" width={200} height={70} className="object-contain w-[180px] sm:w-[200px]" />
          </div>
          <div className="mt-[10px] sm:mt-[8px] ml-25 sm:ml-38 z-10">
            <Image src={its} alt="It's" width={300} height={100} className="object-contain w-[100px] sm:w-[110px]" />
          </div>
          <div className="mt-[-20px] sm:mt-[-75px] ml-32 sm:ml-65 z-9">
            <Image src={yeva} alt="Yeva" width={275} height={93} className="object-contain w-[230px] sm:w-[275px]" />
          </div>
          <ScrollTrigger />
        </div>
      </div>
      <div className="relative flex justify-center w-full">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1200px] px-8 items-center" id="description">
          <div className="flex-3 flex flex-col p-0 sm:p-8">
            <p className="text-[20px] font-arsenica italic font-medium">
              <span className="float-left text-[60px] leading-[60px] mr-2 not-italic">P</span>
              <span className="text-[20px]">roud <span className="text-[#42367e]">Ukrainian</span> currently residing in San Francisco, I completed a worldwide journey around 7 countries to pursue education in <span className="text-[#42367e]">Finance & Economics</span>.</span>
            </p>
            <span className="text-[20px] font-arsenica italic mt-6 font-medium">With experience in <span className="text-[#42367e]">business & data analytics</span>, <span className="text-[#42367e]">venture capital</span>, <span className="text-[#42367e]">journalism</span>, and <span className="text-[#42367e]">marketing</span>, I find my purpose in using the technical skills I learned by embedding them into my creative endeavors to craft narratives and support ideas that contribute to <span className="text-[#42367e]">social change</span>.</span>
            <span className="text-[20px] font-arsenica italic mt-6 font-medium">The most recent manifestation of my purpose became my authorship of <span className="text-[#42367e]">&quot;Undervalued&quot;</span>, a book covering the issue of gender gap in venture capital investment.</span>
          </div>
          <div className="flex-2 flex flex-col p-0 sm:p-8">
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
