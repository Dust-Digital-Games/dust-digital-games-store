import React from "react";
import IconDG from "./IconDG";
interface Props {
  image: string;
}

export default function GameBox() {
  return (
    // Div dentro de div para no poner un componente adentro de un div en InfoMain y ensuciar su codigo
    <div className="w-full flex justify-center items-center gap-8">
      <div className="flex w-10/12 gap-8 h-20 items-center mt-8 border border-gray-500">
        <IconDG className="bg-primaryLetter" />
        <h2 className="text-neutral text-2xl border-b-2  mb-4 border-blue-500 ">
          Titulo del Juego
        </h2>
      </div>
    </div>
  );
}
