import Image from "next/image";
import AboutDustLightMode from "../../../assets/AboutDust-LightMode.png";
import AboutDustDarkMode from "../../../assets/AboutDust-DarkMode.png";
import WalletConnectLightMode from "../../../assets/WalletConnect-LightMode.png";
import WalletConnectDarkMode from "../../../assets/WalletConnect-DarkMode.png";
import Link from "next/link";
import { useThemeSwitcher } from "../../../hooks/UseThemeSwitcher";
export default function AboutUs() {
  const [theme] = useThemeSwitcher();
  return (
    <section className="flex flex-col gap-3 justify-center items-center w-full py-20 dark:bg-bgDarkMode ">
      <div className="w-full flex justify-center items-center flex-col gap-1">
        <h2 className="text-3xl text-primary font-bold dark:text-white">
          About Dust
        </h2>
        <h3 className="text-[15px] text-primary  font-semibold dark:text-white font-inter ">
          Frequent Questions
        </h3>
      </div>
      <Image
        src={theme === "dark" ? AboutDustDarkMode : AboutDustLightMode}
        alt="aboutdust"
        width={400}
        height={400}
      />
      <div className="w-[80%] justify-center flex flex-col gap-4 mt-4">
        <h2 className="font-bold text-xl dark:text-white ">
          ¿What does NFT videogame mean?
        </h2>
        <p className="font-semibold dark:text-white font-inter ">
          It means it cannot be replaced and represents something unique in
          value, and that's what an NFT is! It allows you to trade your digital
          videogame
          <span className="font-bold ml-1 dark:text-white font-inter ">
            in Opensea through game collections, ensuring ownership rights for
            gamers.
          </span>
        </p>
        <p className="font-semibold dark:text-white font-inter">
          To get started, you just have to Download Metamask!{" "}
        </p>
        {/* Con la propiedad download */}
        <a className="border-2 border-primary rounded-[30px] w-max mt-6 py-3 px-12 text-primary font-bold mb-24 dark:text-white dark:border-white ">
          Download Here
        </a>
      </div>
      <div className="w-[80%] flex flex-col  gap-6">
        <Image
          src={
            theme === "dark" ? WalletConnectDarkMode : WalletConnectLightMode
          }
          alt="img-wallet"
          className="object-cover"
          priority
        />
        <h2 className="font-semibold text-xl dark:text-white ">
          ¿It prevents piracy?
        </h2>
        <p className="font-medium dark:text-white font-inter ">
          ¡Yes! After downloading a purchased game,
          <span className="font-bold ml-1 dark:text-white font-inter ">
            you will need to scan a QR code with your Metamask wallet
          </span>
          to only validate if you have the game. Without owning the NFT, the
          game will not be playable.
        </p>
        <Link
          href="#"
          className="text-primary font-bold border-2 border-primary  py-2 px-8 rounded-[30px] w-max dark:text-white dark:border-white"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
