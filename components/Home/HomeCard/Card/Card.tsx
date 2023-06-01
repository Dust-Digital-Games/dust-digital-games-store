import React from "react";

interface Props {
  platformsIcon: string;
  image: string;
  targetDiscount: string;
  platforms: string;
  releaseData: string;
  name: string;
  rating: string;
  star: string;
  info: string;
  discount: string;
  redirectBuy?: string;
  redirectSeeMore?: string;
}

export default function Card({
  platformsIcon,
  image,
  targetDiscount,
  platforms,
  releaseData,
  name,
  rating,
  star,
  info,
  discount,
  redirectBuy,
  redirectSeeMore,
}: Props) {
  const handlerBuyNow = () => {};

  const handlerSeeMore = () => {};
  return (
    <div>
      <div>
        <img src={image} alt={image} />
        <span>{platformsIcon}</span>
        <span>{targetDiscount}</span>
      </div>
      <span>{platforms}</span>
      <span>{`Release data on ${releaseData}`}</span>
      <div>
        <h2>{name}</h2>
        <span>{rating}</span>
        <span>{star}</span>
      </div>
      <p>{info}</p>
      {discount && <span>¡IN DISCOUNT!</span>}
      <button onClick={handlerBuyNow}>Buy Now</button>
      <button onClick={handlerSeeMore}>See More</button>
    </div>
  );
}
