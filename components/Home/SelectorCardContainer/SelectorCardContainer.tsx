import React, { useEffect, useState } from "react";
import ButtonSelectorCard from "./ButtonSelectorCard/ButtonSelectorCard";
import { ButtonSelectorCardData } from "./ButtonSelectorCardData";
import SelectorCard from "./SelectorCard/SelectorCard";
import AOE from "../../../assets/ageofempires.jpg";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "next-themes";
export default function SelectorCardContainer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <section className="w-full bg-white dark:bg-bgDarkMode">
      <Swiper
        slidesPerView={2.7}
        spaceBetween={0}
        style={{
          marginLeft: "16px",
          marginTop: "10px",
          position: "relative",
          zIndex: "5",
          top: "15px",
        }}
        className={
          theme === "dark"
            ? "bgDarkMode border border-none outline-none "
            : "white"
        }
        resistance={true}
        resistanceRatio={0.3}
      >
        {ButtonSelectorCardData.map((b, key) => (
          <SwiperSlide key={key}>
            <ButtonSelectorCard name={b.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" flex gap-[20px] flex-col justify-center items-center border border-primary py-12 rounded-xl bg-white dark:bg-bgDarkMode">
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
