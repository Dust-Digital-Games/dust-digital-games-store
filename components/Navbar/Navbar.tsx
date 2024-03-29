"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import MenuItems from "../MenuItems/MenuItems";
import { onSignInWithCrypto } from "@/pages/auth";
import IconDustLogoMobileLightMode from "../../assets/header/IconDustLogoMobile-LightMode.png";
import IconDustLogoMobileDarkMode from "../../assets/header/IconDustLogoMobile-DarkMode.png";
import { motion, AnimatePresence } from "framer-motion";
import ProfileImg from "../../assets/profile-img-test.png";
import SunMobile from "../../assets/header/sun-mobile.png";
import MoonMobile from "../../assets/header/moon-mobile.png";
import SunDesktop from "../../assets/header/sun-desktop.png";
import MoonDesktop from "../../assets/header/moon-desktop.png";
import ArrowLightMode from "../../assets/header/profile-arrow-lightmode.png";
import ArrowDarkMode from "../../assets/header/profile-arrow-darkmode.png";
import HamburgerLightMode from "../../assets/header/hamburger-menu-LightMode.png";
import HamburgerDarkMode from "../../assets/header/hamburger-menu-DarkMode.png";

import { useThemeSwitcher } from "../../hooks/UseThemeSwitcher";
import ButtonMetamask from "../ButtonMetamask/ButtonMetamask";
const Navbar: React.FC = () => {
  const [theme, setTheme] = useThemeSwitcher();
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
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed w-full flex justify-between px-7 py-12 items-center  md:justify-around bg-white h-24 top-0 left-0 z-50 dark:bg-bgDarkMode">
      <Image
        src={
          theme === "dark"
            ? IconDustLogoMobileDarkMode
            : IconDustLogoMobileLightMode
        }
        alt="img-dg"
        priority
      />
      <nav className=" flex gap-6 items-center  md:gap-12 md:hidden">
        {/* <MenuItems className="hidden md:flex md:gap-3" /> */}
        <div className="block md:hidden" >
        <ButtonMetamask className="rounded-3xl font-bold  border-2 px-8 bg-primary text-white py-2 border-none" />
        </div>
        <div className="border border-primary rounded-full ">
          <Image
            src={theme === "dark" ? HamburgerDarkMode : HamburgerLightMode}
            alt="hamburger"
            onClick={handlerMenu}
          />
        </div>
      </nav>

      <MenuItems className="hidden md:flex md:gap-3" />
      <div className="flex gap-4">
      <div className="hidden md:block" >
      <ButtonMetamask className="rounded-3xl font-semibold bg-primary text-white border-2 px-5 py-2 " />
      </div>
        <div
          className=" hidden md:flex  border border-primary px-4 py-1 rounded-full items-center gap-3"
          onClick={themeSwitchHandler}
        >
          <span>{theme === "dark" ? "Night" : "Light"}</span>
          <Image src={theme === "dark" ? MoonDesktop : SunDesktop} alt="moon" />
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            variants={MenuAnimated}
            animate="animate"
            initial="initial"
            exit="exit"
            className="md:hidden absolute overflow-hidden top-0 left-0  bg-white w-screen h-screen flex flex-col z-50 dark:bg-bgDarkMode"
          >
            <div className="w-full flex justify-around items-center h-24">
              <div
                className="flex gap-2 justify-center items-center"
                onClick={handlerMenu}
              >
                {theme === "dark" ? (
                  <Image src={ArrowDarkMode} alt="arrow" />
                ) : (
                  <Image src={ArrowLightMode} alt="arrow" />
                )}
                <span className="text-primary font-bold  dark:text-white ">
                  Menú
                </span>
              </div>
              {/* Esto sería que si le hago un click me muestre un div o el otro según el modo oscuro o claro */}
              <div
                className={
                  theme === "dark"
                    ? "flex gap-4 border bg-primary rounded-full items-center  py-2 px-5 z-[9999]"
                    : "flex gap-4 border border-primary rounded-full items-center  py-2 px-5 z-[9999]"
                }
                onClick={themeSwitchHandler}
              >
                <span
                  className={
                    theme === "dark"
                      ? "text-white font-semibold text-lg order-4"
                      : "text-primary font-semibold text-lg"
                  }
                >
                  {theme === "dark" ? "Night" : "Light"}
                </span>
                <Image
                  src={theme === "dark" ? MoonMobile : SunMobile}
                  alt="sol"
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2 flex-col my-12">
              <Image src={ProfileImg} alt="profile" />
              <h2 className="text-primary font-bold dark:text-white font-inter ">
                Francisco Diaz
              </h2>
            </div>
            <ul className="flex flex-col gap-6 pl-6">
              <li className="font-semibold dark:text-white ">My Profile</li>
              <li className="font-semibold dark:text-white ">Games</li>
              <li className="font-semibold dark:text-white ">Categories</li>
              <li className="font-semibold dark:text-white ">About</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
