import React from "react";
import HomeCard from "../../components/Home/HomeCard/HomeCard";
import InfoMain from "../../components/Home/InfoMain/InfoMain";
import Category from "../../components/Home/Category/Category";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import SelectorCard from "../../components/Home/SelectorCard/SelectorCard";

export default function Home() {
  return (
    <>
      <InfoMain />
      <HomeCard />
      <Category />
      <AboutUs />
      {/* <SelectorCard /> */}
    </>
  );
}
