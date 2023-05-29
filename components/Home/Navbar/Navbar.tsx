"use client";
import { useEffect, useState } from "react";
import React from "react";
import MenuHamburguesa from "../../../svg/menu-hamburguesa.svg";
import Image from "next/image";
import Ul from "../../ul/Ul";
const Navbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const handlerMenu = () => {
    setActive(!active);
    console.log(active);
  };
  console.log(active);
  return (
    <header>
      <div className="w-screen flex justify-between px-7 py-12 items-center border-b-slate-900 h-7 border-2 md:justify-around">
        <span className="text-letras font-medium">Dust Games</span>
        <nav className=" flex gap-6 items-center  border-b-slate-500 md:gap-12 md:hidden">
          <Ul container="hidden flex md:gap-3" />
          <button className=" rounded-3xl font-bold  border-2 px-5 py-2 text-letras border-letras ">
            Sign In
          </button>
          <Image
            src={MenuHamburguesa}
            alt="menu-hamburguesa"
            onClick={handlerMenu}
            width={50}
            className=" block border-2 border-letras rounded-full p-1 text-letras md:hidden"
          />
        </nav>
        <Ul container="hidden md:block md:flex md:gap-3" />
        <button className=" hidden rounded-3xl font-bold  border-2 px-5 py-2 text-letras border-letras md:block">
          Sign In
        </button>
      </div>
      {active ? <Ul container="md:hidden" /> : ""}
    </header>
  );
};

export default Navbar;
