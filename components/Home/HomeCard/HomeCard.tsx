import React from "react";
import Card from "./Card/Card";
import Stray from "../../../assets/stray.jpg";
export default function HomeCard() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-5 mt-5 text-2xl text-primaryLetter font-semibold">
      <h2>¡Check what's new!</h2>
      <Card
        image={Stray}
        targetDiscount="-20%"
        platforms="Indie"
        platformsIcon={Stray}
        releaseData="15 Jun 2023"
        name="Stray"
        rating={4.9}
        info="asdasdasdasdasdasdsadasdasdsds"
        discount={false}
      />
    </section>
  );
}
