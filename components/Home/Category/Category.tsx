import React from "react";
import CardCategory from "./CardCategory/CardCategory";
import { CardCategoryData } from "./CardCategoryData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";
import { sliderSettings } from "./sliderSettings";
export default function Category() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };

  return (
    // className=" w-full flex flex-col justify-center items-center gap-4"
    <section className="py-16 dark:bg-bgDarkMode ">
      <h2 className=" block text-center text-2xl font-semibold text-primary pb-8 dark:text-white">
        Find by Category
      </h2>
      <Swiper
        {...sliderSettings}
        pagination={pagination}
        modules={[Pagination, FreeMode]}
        className="mySwiper carousel"
        freeMode={true}
        spaceBetween={30}
      >
        {CardCategoryData.map(({ nombre, imagen, id }) => (
          <SwiperSlide key={id}>
            <CardCategory nombre={nombre} image={imagen.src} key={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
