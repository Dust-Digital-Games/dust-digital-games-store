import React from "react";
import ButtonSelectorCard from "./ButtonSelectorCard/ButtonSelectorCard";
import SelectorCard from "./SelectorCard/SelectorCard";
import AOE from "../../../assets/ageofempires.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
export default function SelectorCardContainer() {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="flex">
        <ButtonSelectorCard name="In Trend" />
        <ButtonSelectorCard name="Most Sold" />
        <ButtonSelectorCard name="Upcoming" />
      </div>
      <div className="flex gap-[20px] flex-col justify-center items-center border border-[#2C41FF] py-12">
        <SelectorCard
          image={AOE.src}
          offert1="-15%"
          offer2="$20  "
          name="Age of Wonders 4"
          platforms="Strategy | 4X | Fantasy"
          discount={true}
        />
        <SelectorCard
          image={AOE.src}
          offert1="-15%"
          offer2="$20  "
          name="Age of Wonders 4"
          platforms="Strategy | 4X | Fantasy"
          discount={true}
        />
      </div>

      {/* No uso una etiqueta <a> por que no voy a llevar a pagina externa, tampoco un boton por que se supone que voy a redireccionar en la misma página*/}
      {/* Las letras diferenciando con el diseño de figma parecen no estar alineadas de la misma manera */}
      <Link
        href="#"
        className="bg-[#364AFF] text-white px-8 py-2 rounded-full font-semibold vertical mt-12 "
      >
        See More
      </Link>
    </section>
  );
}
