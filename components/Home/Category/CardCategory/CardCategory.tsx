import React from "react";
import Image from "next/image";
interface Props {
  image: string;
  nombre: string;
}

export default function CardCategory({ image, nombre }: Props) {
  return (
    <section className="rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[0px] rounded-br-[55px] flex justify-center items-center w-full h-full  flex-col mb-8 relative  overflow-hidden ">
      <Image
        src={image}
        alt={image}
        className="w-full h-full overflow-hidden "
        priority
        width={170}
        height={400}
      />
      <h2 className="absolute bottom-5 text-white font-semibolg text-3xl ">
        {nombre}
      </h2>
    </section>
  );
}
