import React from "react";
import Image from "next/image";
interface Props {
  platformsIcon: string;
  image: string;
  targetDiscount?: string;
  targetPrice?: string;
  platforms?: string;
  releaseData?: string;
  name: string;
  rating?: number;
  star?: string;
  info?: string;
  discount?: boolean;
  redirectBuy?: string;
  redirectSeeMore?: string;
}

const Card = ({
  platformsIcon,
  image,
  targetDiscount,
  targetPrice,
  platforms,
  releaseData,
  name,
  rating,
  star,
  info,
  discount,
  redirectBuy,
  redirectSeeMore,
}: Props) => {
  const handlerBuyNow = () => {};

  const handlerSeeMore = () => {};
  return (
    <section className="w-80 flex flex-col gap-2 border-2 border-red-500 rounded-lg mb-8 ">
      <div className="relative w-full h-full ">
        <Image src={image} alt="imgcard" />
        <div className="absolute left-3 top-3">
          <Image
            src={platformsIcon}
            alt="imgcard"
            width={30}
            height={30}
            style={{ color: "white" }}
          />
        </div>
        <span className="absolute left-0 bottom-0 text-white ">
          {targetDiscount}
        </span>
      </div>
      <span className=" bg-bgHomecardPlatforms w-max rounded-lg py-2 px-6 text-sm text-primaryLetter text-center font-bold ml-4">
        {platforms}
      </span>
      <span className="px-4 text-textHomecardRD text-lg font-semibold ">{`Release data on ${releaseData}`}</span>
      <div className="flex gap-4 px-4">
        <h2 className="text-4xl">
          {name.charAt(0)}
          <span className="text-2xl">{name.slice(1)}</span>
        </h2>
        <span className="text-lg font-bold">{rating}</span>
        <span>{star}</span>
      </div>
      <p className="px-4 font-medium text-lg">{info}</p>
      {/* {discount && <span>¡IN DISCOUNT!</span>} */}
      <div className="flex justify-evenly  mb-5 ">
        <button
          className="bg-primaryLetter py-2 px-8 rounded-3xl text-white font-semibold text-xl "
          onClick={handlerBuyNow}
        >
          Buy Now
        </button>
        <button
          className="border-2 border-primaryLetter py-2 px-8 rounded-3xl  font-semibold text-primaryLetter text-xl "
          onClick={handlerSeeMore}
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default Card;
