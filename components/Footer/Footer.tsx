import React from "react";
import Icon from "../../assets/header/IconDustLogoMobile.png";
import Image from "next/image";
import Instagram from "../../assets/footer/instagram.png";
import Twitter from "../../assets/footer/Twitter.png";
import Facebook from "../../assets/footer/facebook.png";
import FooterImage from "../../assets/footer/DustGamesFooter.png";
import Link from "next/link";
import StaticImage from "next/image";

export default function Footer() {
  return (
    <footer className="w-full pl-[40px] mt-[40px] pr-[20px] h-full">
      <div className="w-full flex justify-between items-center">
        <Image src={Icon} alt="icon" priority />
        <div className="flex gap-2 ">
          <Image src={Instagram} alt="iconInstagram" />
          <Image src={Twitter} alt="iconTwitter" />
          <Image src={Facebook} alt="iconFacebook" />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-7 ">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-primaryLetter font-semibold">Games</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[15px] font-medium">Upload my game</li>
            <li className="text-[15px] font-medium">How to buy a game</li>
            <li className="text-[15px] font-medium">What's New!</li>
            <li className="text-[15px] font-medium">Categories</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-primaryLetter font-semibold">About</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-[15px] font-medium">Metamask</li>
            <li className="text-[15px] font-medium">Creating Account</li>
            <li className="text-[15px] font-medium">Token & Contracts</li>
            <li className="text-[15px] font-medium">Opensea collection</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <h2 className="text-xl text-primaryLetter font-semibold">Dust</h2>
        <ul className="flex flex-col gap-2">
          <li className="text-[15px] font-medium">About the Company</li>
          <li className="text-[15px] font-medium">Contact Us</li>
        </ul>
      </div>
      <div className="w-full h-full mt-20">
        <Image src={FooterImage} alt="imagen-footer" priority />
      </div>
    </footer>
  );
}
