import React from "react";
import GameBox from "../../GameBox/GameBox";
import IconMetamask from "../../IconMetamask/IconMetamask";

export default function InfoMain() {
  return (
    <main className="pt-10">
      <div className=" flex flex-col justify-center items-center gap-4 ">
        {/* Podria usar un after para no tener un span dentro del yours */}
        <h1 className="text-3xl text-center font-medium ">
          Your digital games <br /> are now{" "}
          <span className="primaryLetter font-bold text-primaryLetter">
            yours
          </span>
        </h1>
        <p className="text-center mx-4">
          In Dust Games, every game is an NFT that can be traded in Opensea
          through game collections.
        </p>
      </div>
      <button className="pt-10 text-primaryLetter font-semibold mx-auto w-full cursor-pointer">
        ¡Click on the title of the game!
      </button>
      <GameBox />
      <div className="flex justify-center items-center flex-col">
        <IconMetamask />
        <h2 className="font-semibold">
          Powered with <span className="font-bold text-xl">Metamask</span>
        </h2>
      </div>
    </main>
  );
}
