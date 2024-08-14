"use client"
import { useEffect, useState } from "react";
import { MdBusinessCenter } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

export default function LoadingPage() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0C0C0C] text-white h-screen w-screen flex flex-col justify-center items-center relative">
      {/* Background Circles */}
      <div>
        <div className="w-[12vw] h-[15vw] md:w-[8vw] md:h-[5vw] bg-[#F26C2B] rounded-full absolute z-1 left-[40%] translate-x-[-50%] translate-y-[-50%] md:blur-[8.5vw] blur-[12vw]"></div>
        <div className="w-[20vw] h-[25vw] md:w-[15vw] md:h-[12vw] bg-[#F26C2B] rounded-full absolute z-1 left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[15vw]"></div>
      </div>

      {/* Loading Icon */}
      <div className="z-10 flex flex-col items-center justify-center">
        <AiOutlineSetting 
 className="text-[#F26C2B] text-7xl animate-pulse" />
        <p className="text-2xl mt-4">Loading{dots}</p>
      </div>
    </div>
  );
}
