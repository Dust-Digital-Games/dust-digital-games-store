"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import MenuItems from "../MenuItems/MenuItems";
import { onSignInWithCrypto } from "@/pages/auth";
import IconDustLogoMobile from "../../assets/header/IconDustLogoMobile.png";
import { motion, AnimatePresence } from "framer-motion";
import ProfileImg from "../../assets/profile-img-test.png";
import SunMobile from "../../assets/header/sun-mobile.png";
import MoonMobile from "../../assets/header/moon-mobile.png";
import SunDesktop from "../../assets/header/sun-desktop.png";
import MoonDesktop from "../../assets/header/moon-desktop.png";
import Arrow from "../../assets/header/profile-arrow.png";
import Hamburger from "../../assets/header/hamburger-menu.png";

const Navbar: React.FC = () => {
  const MenuAnimated = {
    initial: {
      opacity: 0,
      x: -500,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    exit: { x: -500, transition: { duration: 1 } },
  };
  const [active, setActive] = useState<boolean>(false);
  const [themeSwitchStatus, setThemeSwitchStatus] = useState<"light" | "dark">(
    "light"
  );
  useEffect(() => {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = active ? "hidden" : "unset";
    }
    return () => {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "unset";
      }
    };
  }, [active]);
  const handlerMenu = () => {
    setActive((prev) => !prev);
  };

  const themeSwitchHandler = () => {
    setThemeSwitchStatus((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <header className="fixed w-full flex justify-between px-7 py-12 items-center  md:justify-around bg-white h-24 top-0 left-0 z-50 ">
      <Image src={IconDustLogoMobile} alt="img-dg" priority />
      <nav className=" flex gap-6 items-center  md:gap-12 md:hidden">
        {/* <MenuItems className="hidden md:flex md:gap-3" /> */}
        <button
          className=" rounded-3xl font-bold  border-2 px-8 bg-primary text-white py-2 "
          onClick={onSignInWithCrypto}
        >
          Sign In
        </button>
        <div className="border border-primary rounded-full ">
          <Image src={Hamburger} alt="hamburger" onClick={handlerMenu} />
        </div>
      </nav>

      <MenuItems className="hidden md:flex md:gap-3" />
      <div className="flex gap-4">
        <button
          className=" hidden rounded-3xl font-semibold bg-primary text-white border-2 px-5 py-2 md:block"
          onClick={onSignInWithCrypto}
        >
          Sign In
        </button>
        <div
          className=" hidden md:flex  border border-primary px-4 py-1 rounded-full items-center gap-3"
          onClick={themeSwitchHandler}
        >
          <span
            className={
              themeSwitchStatus === "dark"
                ? "text-white order-2 font-semibold"
                : "text-primary font-semibold"
            }
          >
            {themeSwitchStatus === "dark" ? "On" : "Off"}
          </span>
          <Image
            src={themeSwitchStatus === "dark" ? MoonDesktop : SunDesktop}
            alt="icon"
          />
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            variants={MenuAnimated}
            animate="animate"
            initial="initial"
            exit="exit"
            className="md:hidden absolute overflow-hidden top-0 left-0  bg-slate-200 w-screen h-screen flex flex-col z-50"
          >
            <div className="w-full flex justify-around items-center h-24">
              <div
                className="flex gap-2 justify-center items-center"
                onClick={handlerMenu}
              >
                <Image src={Arrow} alt="arrow" />
                <span className="text-primary font-bold">Menú</span>
              </div>
              {/* Esto sería que si le hago un click me muestre un div o el otro según el modo oscuro o claro */}
              <div
                className={
                  themeSwitchStatus === "dark"
                    ? "flex gap-4 border bg-primary rounded-full items-center  py-2 px-5 z-[9999]"
                    : "flex gap-4 border border-primary rounded-full items-center  py-2 px-5 z-[9999]"
                }
                onClick={themeSwitchHandler}
              >
                <span
                  className={
                    themeSwitchStatus === "dark"
                      ? "text-white font-semibold text-lg order-4"
                      : "text-primary font-semibold text-lg"
                  }
                >
                  {themeSwitchStatus === "dark" ? "Night" : "Light"}
                </span>
                <Image
                  src={themeSwitchStatus === "dark" ? MoonMobile : SunMobile}
                  alt="sol"
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2 flex-col my-12">
              <Image src={ProfileImg} alt="profile" />
              <h2 className="text-primary font-bold ">Francisco Diaz</h2>
            </div>
            <ul className="flex flex-col gap-6 pl-6">
              <li className="font-semibold">My Profile</li>
              <li className="font-semibold">Games</li>
              <li className="font-semibold">Categories</li>
              <li className="font-semibold">About</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
