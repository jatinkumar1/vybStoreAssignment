import React from "react";
import Link from "next/link";

export default function HeroSection2() {
  return (
    <div className=" mt-10 bg-black text-white rounded-3xl mx-5 p-4 space-x-4 flex justify-evenly text-xl sm:text-lg md:text-2xl">
      <a href="#" className="px-2 py-2 rounded text-sm sm:text-base md:text-xl lg:text-3xl">
        Travel
      </a>
      <a href="#" className=" px-2 py-2 rounded text-sm sm:text-base md:text-xl lg:text-3xl">
        Digital
      </a>
      <a href="#" className=" px-2 py-2 rounded text-sm sm:text-base md:text-xl lg:text-3xl">
        Brand
      </a>
      <a href="#" className=" px-2 py-2  rounded text-sm sm:text-base md:text-xl lg:text-3xl">
        Merch
      </a>
    </div>
  );
}
