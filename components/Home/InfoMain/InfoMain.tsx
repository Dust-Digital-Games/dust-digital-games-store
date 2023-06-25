"use client";
import React, { useState } from "react";
import GameBox from "../../GameBox/GameBox";
import IconMetamask from "../../IconMetamask/IconMetamask";
import GameBoxImage from "../../../assets/gamebox.png";
export default function InfoMain() {
  const isLocalStorageAvailable = typeof localStorage !== "undefined";
  const [themeSwitchStatus, setThemeSwitchStatus] = useState(
    isLocalStorageAvailable && localStorage.getItem("darkMode") === "true"
  );

  return (
    <main className="pt-40 dark:bg-bgDarkMode ">
      <div className=" flex flex-col justify-center items-center gap-4  dark:bg-bgDarkMode">
        {/* Podria usar un after para no tener un span dentro del yours */}
        <h1 className="text-4xl text-center dark:text-white">
          Your digital games <br /> are now{" "}
          <span className="primaryLetter font-bold text-primary">yours</span>
        </h1>
        <p className="text-center mx-9 font-semibold mt-2 dark:text-white ">
          In Dust Games, every game is an NFT that can be traded in Opensea
          through game collections.
        </p>
      </div>
      <button className="pt-10 text-primary font-bold mx-auto w-full cursor-pointer dark:text-white ">
        ¡Click on the title of the game!
      </button>
      <GameBox
        image={GameBoxImage.src}
        name="Titulo del Juego"
        colors="primary"
      />
      <GameBox
        image={GameBoxImage.src}
        name="Titulo del Juego"
        colors="primary"
      />

      <div className="flex justify-center items-center flex-col py-24">
        <IconMetamask />
        <h2 className="font-semibold dark:text-white">
          Powered with{" "}
          <span className="font-bold text-xl dark:text-white ">Metamask</span>
        </h2>
      </div>
    </main>
  );
}
