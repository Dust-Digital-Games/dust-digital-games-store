import Image from "next/image";
import React from "react";
import AboutDust from "../../../assets/AboutDust.png";
import WalletConnect from "../../../assets/WalletConnect.png";
import Link from "next/link";
export default function AboutUs() {
  return (
    <section className="flex flex-col gap-3 justify-center items-center w-full mb-8 ">
      <div className="w-full flex justify-center items-center flex-col gap-1 my-16">
        <h2 className="text-3xl text-primary font-bold">About Dust</h2>
        <h3 className="text-[15px] text-primary  font-bold ">
          Frequent Questions
        </h3>
      </div>
      <Image src={AboutDust} alt="aboutdust" width={400} height={400} />
      <div className="w-[80%] justify-center flex flex-col gap-4 mt-4">
        <h2 className="font-bold text-xl">¿What does NFT videogame mean?</h2>
        <p className="font-semibold">
          It means it cannot be replaced and represents something unique in
          value, and that's what an NFT is! It allows you to trade your digital
          videogame
          <span className="font-bold ml-1 ">
            in Opensea through game collections, ensuring ownership rights for
            gamers.
          </span>
        </p>
        <p className="font-semibold">
          To get started, you just have to Download Metamask!{" "}
        </p>
        {/* Con la propiedad download */}
        <a className="border-2 border-primary rounded-[30px] w-max py-3 px-7 text-primary font-bold mb-24 ">
          Download Here
        </a>
      </div>
      <div className="w-[80%] flex flex-col  gap-6">
        <Image
          src={WalletConnect}
          alt="img-wallet"
          className="object-cover"
          priority
        />
        <h2 className="font-bold text-xl">¿It prevents piracy?</h2>
        <p className="font-medium">
          ¡Yes! After downloading a purchased game,
          <span className="font-bold ml-1">
            you will need to scan a QR code with your Metamask wallet
          </span>
          to only validate if you have the game. Without owning the NFT, the
          game will not be playable.
        </p>
        <Link
          href="#"
          className="text-primary font-bold border-2 border-primary  py-2 px-8 rounded-[30px] w-max"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
