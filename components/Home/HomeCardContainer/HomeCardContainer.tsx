import React from "react";
import HomeCard from "./HomeCard/HomeCard";
import Stray from "../../../assets/stray.jpg";
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
    <section className="w-full flex flex-col justify-center items-center gap-5 mt-5 text-2xl text-primaryLetter font-semibold">
      <h2 className="font-semibold text-primary mb-4">¡Check what's new!</h2>
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
    </section>
  );
}
