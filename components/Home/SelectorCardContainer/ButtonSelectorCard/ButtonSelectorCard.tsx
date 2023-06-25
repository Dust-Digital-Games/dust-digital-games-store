import React, { useState } from "react";
interface Props {
  name: string;
}

export default function ButtonSelectorCard({ name }: Props) {
  const [active, setActive] = React.useState(false);
  const handlerFocus = () => {
    setActive((prev) => !prev);
  };
  return (
    <div className="relative">
      <button
        className="w-[137px] text-primary font-bold h-[40px] flex justify-center items-center border-[1px] border-[#2C41FF] rounded-sm z-10  focus:bg-primary focus:text-white dark:text-white dark:border-white"
        onFocus={handlerFocus}
        onBlur={handlerFocus}
      >
        {name}
      </button>
      {/* {active && (
        <div className="w-[137px] h-[2px] bg-white mt-2 z-10 absolute " />
      )} */}
      {/* <div className="w-[137px] h-[2px] bg-white mt-2  " /> */}
    </div>
  );
}
