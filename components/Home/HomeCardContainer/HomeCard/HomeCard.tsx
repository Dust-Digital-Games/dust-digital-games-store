import React from "react";
import Image from "next/image";
import Apple from "../../../../assets/HomeCardApple.png";

interface Props {
  image: string;
  offPrice: string;
  newPrice: string;
  originalPrice: string;
  platforms: string[];
  releaseData: string;
  name: string;
  calification: number;
  star: string[];
  info: string;
}

export default function HomeCard({
  image,
  offPrice,
  newPrice,
  originalPrice,
  platforms,
  releaseData,
  name,
  calification,
  star,
  info,
}: Props) {
  return (
    <section className="flex flex-col w-[350px] gap-4 border-[2px] border-primary rounded-lg text-base ">
      <div className="relative">
        <Image
          src={Apple}
          alt="img"
          className="absolute top-3 left-2"
          priority
        />
        <Image src={image} alt="stray" width={999} height={300} priority />
        <div className="flex absolute left-0 bottom-0">
          <span className="text-white font-semibold px-3 py-2 bg-[#8AC92680] ">
            {offPrice}
          </span>
          <div className="flex gap-2 px-2 py-2 bg-primary  ">
            <span className="text-white font-semibold">{newPrice}</span>
            <del className="text-white font-semibold text-sm pt-[3px]">
              {originalPrice}
            </del>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-4 ">
        <div className="flex gap-2 flex-wrap">
          {platforms.map((p, index) => (
            <span
              key={index}
              className="bg-[#d4daFF] text-primary rounded-full py-1 px-6 w-max text-sm mb-4 dark:bg-[#1D2193] dark:text-white font-inter"
            >
              {p}
            </span>
          ))}
        </div>
        <span className="text-[#888888]  font-semibold mb-2 font-inter ">
          Release Date on {releaseData}
        </span>
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-3xl font-bold">{name}</h2>
          <div className=" flex pt-[7px] h-[30px] gap-1">
            <span className="text-base font-semibold ">{calification}</span>
            {star.map((s, index) => (
              <Image
                key={index}
                src={s}
                alt="star"
                width={20}
                height={17}
                priority
                style={{ width: "auto", height: "auto" }}
              />
            ))}
          </div>
        </div>
        <p className="w-[75%] text-sm mb-3 font-inter font-normal">{info}</p>
      </div>
      <div className="w-full flex gap-8 mb-4 justify-center ">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[#67951e]  mb-2 text-sm font-bold text-center font-inter ">
            ¡IN DISCOUNT!
          </span>
          <button className="bg-primary px-8 py-3 font-bold rounded-full text-white">
            Buy Now
          </button>
        </div>
        <div className="flex flex-col justify-end">
          <button className="border-[2px] border-primary  font-bold rounded-full text-primary py-[10px] px-7">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
