"use client";
import { useEffect, useState } from "react";
import React from "react";
import IconHamburger from "../../assets/header/icon-hamburger.svg";
import Image from "next/image";
import MenuItems from "../MenuItems/MenuItems";
import { onSignInWithCrypto } from "@/pages/auth";
import IconDustLogoMobile from "../../assets/header/IconDustLogoMobile.png";
const Navbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const handlerMenu = () => {
    setActive(!active);
  };
  return (
    <header className="relative w-screen flex justify-between px-7 py-12 items-center  md:justify-around">
      <Image src={IconDustLogoMobile} alt="img-dg" width={130} height={130} />
      <nav className=" flex gap-6 items-center  md:gap-12 md:hidden">
        <MenuItems className="hidden md:flex md:gap-3" />
        <button
          className=" rounded-3xl font-bold  border-2 px-5 py-2 text-letras border-letras "
          onClick={onSignInWithCrypto}
        >
          Sign In
        </button>
        <Image
          src={IconHamburger}
          alt="Open menu"
          onClick={handlerMenu}
          width={50}
          className=" block border-2 border-letras rounded-full p-1 text-primaryLetter md:hidden"
        />
      </nav>
      <MenuItems className="hidden md:flex md:gap-3" />
      <button className=" hidden rounded-3xl font-bold  border-2 px-5 py-2 text-letras border-letras md:block">
        Sign In
      </button>
      {active && (
        <MenuItems className="md:hidden absolute top-full left-0 w-full bg-slate-200" />
      )}
    </header>
  );
};

export default Navbar;
