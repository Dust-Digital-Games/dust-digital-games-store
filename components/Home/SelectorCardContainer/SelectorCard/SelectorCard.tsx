import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  offert1: string;
  offer2: string;
  name: string;
  platforms: string;
  discount: boolean;
}

export default function SelectorCard({
  image,
  offert1,
  offer2,
  name,
  platforms,
  discount,
}: Props) {
  return (
    <div className="max-w-[500px] mx-4 h-[110px] grid grid-cols-5 border border-[#2c41ff] rounded-lg">
      <div className="w-full h-full relative col-span-2">
        <Image
          src={image}
          alt="imagen"
          priority
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 flex">
          <div className="w-[52.75px]">
            <span className="bg-[#8AC926] dark:bg-[#4C6626] px-2 py-1 block rounded-l-lg text-white font-semibold md:hidden ">
              {offert1}
            </span>
          </div>
          <div className="w-[52.75px]">
            <span className="bg-[#2C41FF] px-2 py-1 block text-white font-semibold md:hidden ">
              {offer2}
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex flex-col justify-evenly md:grid md:grid-cols-2 ">
        <div className="w-full h-full flex flex-col justify-center pl-3   ">
          <h2 className="text-sm font-bold  text-black dark:text-white">
            {name}
          </h2>
          <p className="text-sm  font-medium text-black dark:text-white ">
            {platforms}
          </p>
          {discount && (
            <span className="text-sm  text-[#67951E] font-bold ">
              ¡IN DISCOUNT!
            </span>
          )}
        </div>
        <div className="hidden md:flex w-full h-full md:items-center md:justify-end">
          <div className="w-[65px] ">
            <span className="bg-[#8AC926] dark:bg-[#4C6626] w-full py-2 text-center block text-white font-semibold ">
              {offert1}
            </span>
          </div>
          <div className="w-[65px] ">
            <span className="bg-[#2C41FF] py-2 text-center w-full h-full block text-white font-semibold ">
              {offer2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
