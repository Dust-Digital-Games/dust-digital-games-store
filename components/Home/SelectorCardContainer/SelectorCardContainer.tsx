import React from "react";
import ButtonSelectorCard from "./ButtonSelectorCard/ButtonSelectorCard";
import SelectorCard from "./SelectorCard/SelectorCard";
import AOE from "../../../assets/ageofempires.jpg";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
export default function SelectorCardContainer() {
  return (
    <section className="w-full ml-4 ">
      <Swiper
        slidesPerView={2.7}
        spaceBetween={0}
        style={{ marginLeft: "16px", zIndex: "3", marginTop: "10px" }}
      >
        <SwiperSlide style={{ width: "0px" }}>
          <ButtonSelectorCard name="In Trend" />
        </SwiperSlide>
        <SwiperSlide>
          <ButtonSelectorCard name="Most Sold" />
        </SwiperSlide>
        <SwiperSlide>
          <ButtonSelectorCard name="Upcoming" />
        </SwiperSlide>
        <SwiperSlide>
          <ButtonSelectorCard name="Offers" />
        </SwiperSlide>
      </Swiper>
      <div className="flex gap-[20px] flex-col justify-center items-center border border-primary py-12 rounded-xl">
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
        className="bg-[#364AFF] text-white px-8 py-2 rounded-full font-semibold vertical mt-12 block w-max m-auto "
      >
        See More
      </Link>
    </section>
  );
}
