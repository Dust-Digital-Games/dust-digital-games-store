import React from "react";
import HomeCard from "./HomeCard/HomeCard";
import Stray from "../../../assets/stray.jpg";
export default function HomeCardContainer() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-5 mt-5 text-2xl text-primaryLetter font-semibold">
      <h2>¡Check what's new!</h2>
      <HomeCard
        image={Stray.src}
        targetDiscount="-20%"
        platforms="Indie"
        platformsIcon={Stray.src}
        releaseData="15 Jun 2023"
        name="Stray"
        rating={4.9}
        info="asdasdasdasdasdasdsadasdasdsds"
        discount={false}
      />
    </section>
  );
}
