import React from "react";
import IconDG from "./IconDG";
import Image from "next/image";
import GameBoxImage from "../../assets/gamebox.png";
interface Props {
  image: string;
  name: string;
  colors: string;
}

export default function GameBox({ name, image, colors }: Props) {
  return (
    // Div dentro de div para no poner un componente adentro de un div en InfoMain y ensuciar su codigo
    <div className="flex w-[90%] gap-4 items-center mt-6 border border-[#8c8c8c] relative rounded-lg m-auto dark:bg-black">
      <div className=" h-[80px] relative w-[30%]">
        <Image src={image} alt="image" height={200} width={200} />
        <div className="absolute w-1 h-[80px] top-0 right-2 bg-[#8D99FF]" />
      </div>
      <h2 className="text-[#8c8c8c] text-2xl border-b-2  mb-4 border-[#8c8c8c] ">
        {name}
      </h2>
      <div className={`absolute top-0 right-2 w-2 h-full bg-${colors}`} />
    </div>
  );
}
