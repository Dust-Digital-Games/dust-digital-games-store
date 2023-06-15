import React from "react";

interface Props {
  name: string;
}

export default function ButtonSelectorCard({ name }: Props) {
  return (
    <div className="w-[110px] h-[40px] flex justify-center items-center border-[1px] border-[#2C41FF] rounded-md">
      <span className="font-bold text-[#2C41FF] ">{name}</span>
    </div>
  );
}
