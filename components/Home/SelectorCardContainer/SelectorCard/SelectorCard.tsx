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
    <div className="w-[370px] h-[110px] grid grid-cols-5 border border-[#2c41ff] rounded-lg">
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
            <span className="bg-[#8AC926] px-2 py-1 block rounded-l-lg text-white font-semibold ">
              {offert1}
            </span>
          </div>
          <div className="w-[52.75px]">
            <span className="bg-[#2C41FF] px-2 py-1 block text-white font-semibold ">
              {offer2}
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex flex-col justify-evenly">
        <h2 className="text-sm font-bold pl-3 text-black dark:text-white">
          {name}
        </h2>
        <p className="text-sm pl-2 font-medium text-black dark:text-white ">
          {platforms}
        </p>
        {discount && (
          <span className="text-sm pl-3 text-[#67951E] font-bold ">
            ¡IN DISCOUNT!
          </span>
        )}
      </div>
    </div>
  );
}
