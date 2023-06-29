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
    <section className=" flex flex-col gap-3 w-full py-20 bg-white dark:bg-bgDarkMode ">
      <h2 className="text-3xl text-primary font-bold dark:text-white mx-auto">
        About Dust
      </h2>
      <h3 className="text-[15px] text-primary  font-semibold dark:text-white  mx-auto">
        Frequent Questions
      </h3>
      <Image
        src={theme === "dark" ? AboutDustDarkMode : AboutDustLightMode}
        alt="aboutdust"
        width={400}
        height={400}
        className="mx-auto"
      />
      <div className="flex gap-4 flex-col w-[390px] mx-auto justify-center items-center ">
        <h2 className="font-bold text-xl dark:text-white mx-auto ">
          ¿What does NFT videogame mean?
        </h2>
        <p className="font-semibold dark:text-white md:mx-auto">
          It means it cannot be replaced and represents something unique in
          value, and that's what an NFT is! It allows you to trade your digital
          videogame
          <span className="font-bold ml-1 dark:text-white font-inter ">
            in Opensea through game collections, ensuring ownership rights for
            gamers.
          </span>
        </p>
        <p className="font-semibold dark:text-white ">
          To get started, you just have to Download Metamask!
        </p>
        <a className="border-2 border-primary rounded-[30px] w-max mt-6 py-3 px-12 text-primary font-bold mb-24 dark:text-white dark:border-white mx-auto ">
          Download Here
        </a>

        <Image
          src={
            theme === "dark" ? WalletConnectDarkMode : WalletConnectLightMode
          }
          alt="img-wallet"
          className="mx-auto"
          priority
        />
        <div className="w-full ">
          <h2 className="font-semibold text-xl dark:text-white ">
            ¿It prevents piracy?
          </h2>
        </div>
        <p className="font-medium dark:text-white ">
          ¡Yes! After downloading a purchased game,
          <span className="font-bold ml-1 dark:text-white font-inter ">
            you will need to scan a QR code with your Metamask wallet
          </span>
          to only validate if you have the game. Without owning the NFT, the
          game will not be playable.
        </p>
        <div className="w-full py-6 ">
          <Link
            href="#"
            className="text-primary font-bold border-2 border-primary  py-3 px-8 rounded-[30px] w-max dark:text-white dark:border-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
