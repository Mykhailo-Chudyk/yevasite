'use client';

import Image from "next/image";
import pointer from "../images/pointer.png";

export default function ScrollTrigger() {
  const smoothScroll = (element: HTMLElement, duration: number = 1000) => {
    const targetPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const scrollToDescription = () => {
    const element = document.getElementById('description');
    if (element) {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      
      // Check if we're already at the bottom (with a small threshold)
      const isAtBottom = documentHeight - (scrollPosition + windowHeight) < 10;
      
      if (!isAtBottom) {
        smoothScroll(element);
      }
    }
  };

  return (
    <>
      <div className="w-full flex-col items-center mt-10 ml-40">
        <h1 className="text-[31px] font-arsenica font-medium">
          let me <span className="italic text-[#42367e] cursor-pointer" onClick={scrollToDescription}>introduce</span> myself
        </h1>
      </div>
      <div className="w-full flex-col items-center mt-0 ml-62">
        <Image 
          src={pointer} 
          alt="pointer" 
          width={35} 
          height={35} 
          className="ml-8 cursor-pointer hover:opacity-80" 
          onClick={scrollToDescription} 
        />
      </div>
    </>
  );
} 