import React from "react";
import CardCategory from "./CardCategory.tsx/CardCategory";
import { CardCategoryData } from "./CardCategoryData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";

export default function Category() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };

  return (
    // className=" w-full flex flex-col justify-center items-center gap-4"
    <section>
      <h2 className=" block text-center text-2xl font-semibold text-primary mb-4">
        Find by Category
      </h2>
      <Swiper
        pagination={pagination}
        modules={[Pagination, FreeMode]}
        className="mySwiper"
        freeMode={true}
      >
        {CardCategoryData.map(({ nombre, imagen }) => (
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <CardCategory nombre={nombre} image={imagen.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
