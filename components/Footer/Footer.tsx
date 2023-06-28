import { useState, useEffect } from "react";
import IconLightMode from "../../assets/header/IconDustLogoMobile-LightMode.png";
import IconDarkMode from "../../assets/header/IconDustLogoMobile-DarkMode.png";
import Image from "next/image";
import InstagramLightMode from "../../assets/footer/instagramLightMode.png";
import TwitterLightMode from "../../assets/footer/TwitterLightMode.png";
import FacebookLightMode from "../../assets/footer/facebookLightMode.png";
import InstagramDarkMode from "../../assets/footer/instagramDarkMode.png";
import TwitterDarkMode from "../../assets/footer/TwitterDarkMode.png";
import FacebookDarkMode from "../../assets/footer/facebookDarkMode.png";
import FooterImage from "../../assets/footer/DustGamesFooter.png";
import FooterImgLeft from "../../assets/footer/Footer-img-left.png";
import { useThemeSwitcher } from "../../hooks/UseThemeSwitcher";
export default function Footer() {
  const [theme] = useThemeSwitcher();
  return (
    <footer className="w-full pl-[20px] pt-[40px] pr-[20px] h-full relative dark:bg-bgDarkMode">
      <div className="w-full flex justify-between items-center">
        <Image
          src={theme === "dark" ? IconDarkMode : IconLightMode}
          alt="icon"
          priority
        />
        <div className="flex gap-2 ">
          <Image
            src={theme === "dark" ? InstagramDarkMode : InstagramLightMode}
            alt="iconInstagram"
            width={30}
            style={{ height: "auto" }}
            priority
          />
          <Image
            src={theme === "dark" ? TwitterDarkMode : TwitterLightMode}
            alt="iconTwitter"
            width={30}
            style={{ height: "auto" }}
            priority
          />
          <Image
            src={theme === "dark" ? FacebookDarkMode : FacebookLightMode}
            alt="iconFacebook"
            width={30}
            style={{ height: "auto" }}
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-7 ">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-primary font-bold dark:text-white">
            Games
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[15px] font-medium dark:text-white ">
              Upload my game
            </li>
            <li className="text-[15px] font-medium dark:text-white ">
              How to buy a game
            </li>
            <li className="text-[15px] font-medium dark:text-white ">
              What's New!
            </li>
            <li className="text-[15px] font-medium dark:text-white ">
              Categories
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-primary font-bold dark:text-white">
            About
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[15px] font-medium dark:text-white ">
              Metamask
            </li>
            <li className="text-[15px] font-medium dark:text-white ">
              Creating Account
            </li>
            <li className="text-[15px] font-medium dark:text-white ">
              Token & Contracts
            </li>
            <li className="text-[15px] font-medium dark:text-white ">
              Opensea collection
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <h2 className="text-xl text-primary font-bold dark:text-white">Dust</h2>
        <ul className="flex flex-col gap-2">
          <li className="text-[15px] font-medium dark:text-white ">
            About the Company
          </li>
          <li className="text-[15px] font-medium dark:text-white ">
            Contact Us
          </li>
        </ul>
      </div>
      <Image
        src={FooterImgLeft}
        alt="img"
        width={50}
        style={{ height: "auto" }}
        className="absolute top-16 right-0"
        priority
      />
      <div className="w-full h-full mt-20 flex justify-center items-center">
        <Image src={FooterImage} alt="imagen-footer" priority />
      </div>
    </footer>
  );
}
