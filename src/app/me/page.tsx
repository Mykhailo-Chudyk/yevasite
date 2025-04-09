import Image from "next/image";
import forcontext from "../images/forcontext.png";
import thisisme from "../images/thisisme.png";
import arrowdownright from "../images/arrowdownright.png";
import yevashadow from "../images/yevashadow.png";

export default function Me() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="relative flex justify-center w-full">
        <div className="relative w-full max-w-[1000px] h-[600px] flex flex-col p-4 sm:p-8">
          <div className="mt-8 ml-8 sm:ml-14">
            <Image 
              src={forcontext} 
              alt="For Context" 
              width={200} 
              height={70} 
              className="object-contain w-[280px] sm:w-[340px]" 
            />
          </div>
          <div className="mt-[0px] sm:mt-[-4px] ml-20 sm:ml-54 z-10">
            <Image 
              src={thisisme} 
              alt="This is Me" 
              width={300} 
              height={300} 
              className="object-contain w-[220px] sm:w-[240px]" 
            />
          </div>
          <div className="mt-[20px] sm:mt-[15px] ml-28 sm:ml-110 z-9">
            <Image 
              src={arrowdownright} 
              alt="Arrow Down Right" 
              width={100} 
              height={100} 
              className="object-contain w-[110px] sm:w-[160px]" 
            />
          </div>
          <div className="mt-[30px] sm:mt-[-205px] ml-16 sm:ml-155">
            <Image 
              src={yevashadow} 
              alt="Yeva Shadow" 
              width={400} 
              height={400} 
              className="object-contain w-[300px] sm:w-[300px]" 
            />
          </div>
          <div className="mt-[40px] sm:mt-[-280px] ml-0 sm:ml-0 mb-10">
            <div className="flex-3 flex flex-col p-4 sm:p-8 max-w-[600px] mb-10">
                <p className="text-[20px] !text-[20px] font-arsenica italic font-medium">
                <span className="float-left text-[60px] leading-[60px] mr-2 not-italic">T</span>
                hese experiences shaped my understanding of the world and of myself. Over time, I&apos;ve realized that my ideal place in the professional world is one where I can balance logic and technical skill with my natural affinity for writing and public speaking.</p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
} 