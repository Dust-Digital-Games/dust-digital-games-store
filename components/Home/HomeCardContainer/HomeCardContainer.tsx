import React from "react";
import HomeCard from "./HomeCard/HomeCard";
import { HomeCardData } from "./HomeCardData";
export default function HomeCardContainer() {
  const {
    image,
    platforms,
    releaseData,
    name,
    calification,
    star,
    info,
    offPrice,
    newPrice,
    originalPrice,
  } = HomeCardData;
  return (
    <section className="w-full flex flex-col justify-center items-center gap-5 pt-5 text-2xl text-primaryLetter font-semibold dark:bg-bgDarkMode">
      <h2 className="font-semibold text-primary mb-4 dark:text-white">
        ¡Check what's new!
      </h2>
      <div className=" relative  flex flex-col justify-center items-center ">
        <div className=" relative  z-[10]">
          <HomeCard
            image={image}
            platforms={platforms}
            releaseData={releaseData}
            name={name}
            calification={calification}
            star={star}
            info={info}
            offPrice={offPrice}
            newPrice={newPrice}
            originalPrice={originalPrice}
          />
        </div>
        <div className="hidden md:block md:absolute top-4 left-7 ">
          <HomeCard
            image={image}
            platforms={platforms}
            releaseData={releaseData}
            name={name}
            calification={calification}
            star={star}
            info={info}
            offPrice={offPrice}
            newPrice={newPrice}
            originalPrice={originalPrice}
          />
        </div>
      </div>
    </section>
  );
}
