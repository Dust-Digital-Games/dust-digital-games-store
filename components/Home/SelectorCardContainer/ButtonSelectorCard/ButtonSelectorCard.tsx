import React from "react";
import { motion } from "framer-motion";
interface Props {
  name: string;
}

export default function ButtonSelectorCard({ name }: Props) {
  return (
    <motion.div className="w-[137px] h-[40px] flex justify-center items-center border-[1px] border-[#2C41FF] relative rounded-md z-10 active:bg-slate-600">
      <span className="font-bold text-[#2C41FF] ">{name}</span>
    </motion.div>
  );
}
