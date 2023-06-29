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
    <section className="w-full bg-white dark:bg-bgDarkMode selectorcard-boxshadow">
      <Swiper
        slidesPerView={2.7}
        spaceBetween={0}
        style={{
          marginLeft: "16px",
          paddingTop: "10px",
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
      <div className=" flex gap-[20px] flex-col justify-center items-center border-b-0 border-t-[1px] border-primary pt-12 rounded-xl bg-white dark:bg-bgDarkMode">
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
      <div className="py-8 ">
        <Link
          href="#"
          className="bg-[#364AFF]  text-white px-8 py-2  rounded-full font-semibold vertical  block w-max m-auto "
        >
          See More
        </Link>
      </div>
    </section>
  );
}
