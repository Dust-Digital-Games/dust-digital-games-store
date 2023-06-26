import React, { useState } from "react";
interface Props {
  name: string;
}
import { AnimatePresence, motion } from "framer-motion";
export default function ButtonSelectorCard({ name }: Props) {
  const [active, setActive] = React.useState(false);
  const handlerFocus = () => {
    setActive((prev) => !prev);
  };

  const AnimacionEffect = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <>
      <button
        className="w-[137px] text-primary font-bold h-[40px] flex justify-center items-center border-[1px] border-[#2C41FF] rounded-sm  focus:bg-primary focus:text-white dark:text-white dark:border-white"
        onFocus={handlerFocus}
        onBlur={handlerFocus}
      >
        {name}
      </button>

      <div
        className={`${
          active
            ? "opacity-100 transition-opacity  ease-in-out duration-500 "
            : " opacity-0 "
        }w-[137px] h-[2px] dark:bg-white mt-2 bg-[#1622B7]  `}
      />
    </>
  );
}
