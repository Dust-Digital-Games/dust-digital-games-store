import React from "react";
import IconLightMode from "../../assets/header/IconDustLogoMobile-LightMode.png";
import Image from "next/image";
import Instagram from "../../assets/footer/instagram.png";
import Twitter from "../../assets/footer/Twitter.png";
import Facebook from "../../assets/footer/facebook.png";
import FooterImage from "../../assets/footer/DustGamesFooter.png";
import FooterImgLeft from "../../assets/footer/Footer-img-left.png";
export default function Footer() {
  return (
    <footer className="w-full pl-[20px] mt-[40px] pr-[20px] h-full relative ">
      <div className="w-full flex justify-between items-center">
        <Image src={IconLightMode} alt="icon" priority />
        <div className="flex gap-2 ">
          <Image src={Instagram} alt="iconInstagram" width={30} height={25} />
          <Image src={Twitter} alt="iconTwitter" width={30} height={25} />
          <Image src={Facebook} alt="iconFacebook" width={30} height={25} />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-7 ">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-primary font-bold">Games</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[15px] font-medium">Upload my game</li>
            <li className="text-[15px] font-medium">How to buy a game</li>
            <li className="text-[15px] font-medium">What's New!</li>
            <li className="text-[15px] font-medium">Categories</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-primary font-bold">About</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[15px] font-medium">Metamask</li>
            <li className="text-[15px] font-medium">Creating Account</li>
            <li className="text-[15px] font-medium">Token & Contracts</li>
            <li className="text-[15px] font-medium">Opensea collection</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <h2 className="text-xl text-primary font-bold">Dust</h2>
        <ul className="flex flex-col gap-2">
          <li className="text-[15px] font-medium">About the Company</li>
          <li className="text-[15px] font-medium">Contact Us</li>
        </ul>
      </div>
      <Image
        src={FooterImgLeft.src}
        alt="img"
        width={50}
        height={50}
        className="absolute top-16 right-0"
      />
      <div className="w-full h-full mt-20 flex justify-center items-center">
        <Image src={FooterImage} alt="imagen-footer" priority />
      </div>
    </footer>
  );
}
