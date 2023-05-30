"use client";
import { useEffect, useState } from "react";
import React from "react";
import IconHamburger from "../../svg/icon-hamburger.svg";
import Image from "next/image";
import MenuItems from "../MenuItems/MenuItems";
const Navbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const handlerMenu = () => {
    setActive(!active);
    console.log(active);
  };
  console.log(active);
  return (
    <header className="relative w-screen flex justify-between px-7 py-12 items-center border-b-slate-900 h-7 border-2 md:justify-around">
      <span className="text-letras font-medium">Dust Games</span>
      <nav className=" flex gap-6 items-center  border-b-slate-500 md:gap-12 md:hidden">
        <MenuItems className="hidden md:flex md:gap-3" />
        <button className=" rounded-3xl font-bold  border-2 px-5 py-2 text-letras border-letras ">
          Sign In
        </button>
        <Image
          src={IconHamburger}
          alt="Open menu"
          onClick={handlerMenu}
          width={50}
          className=" block border-2 border-letras rounded-full p-1 text-letras md:hidden"
        />
      </nav>
      <MenuItems className="hidden md:flex md:gap-3" />
      <button className=" hidden rounded-3xl font-bold  border-2 px-5 py-2 text-letras border-letras md:block">
        Sign In
      </button>
      {active && <MenuItems className="md:hidden absolute top-full left-0 w-full bg-slate-200" />}
    </header>
  );
};

export default Navbar;
