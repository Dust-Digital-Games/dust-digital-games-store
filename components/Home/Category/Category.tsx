import React from "react";
import CardCategory from "./CardCategory.tsx/CardCategory";
import Stray from "../../../assets/stray.jpg";
export default function Category() {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl font-semibold text-primaryLetter">
        Find by Category
      </h2>
      <CardCategory name="CiberPunk" image={Stray} />
    </section>
  );
}
