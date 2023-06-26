import React from "react";
import HomeCardContainer from "../../components/Home/HomeCardContainer/HomeCardContainer";
import InfoMain from "../../components/Home/InfoMain/InfoMain";
import Category from "../../components/Home/Category/Category";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import SelectorCardContainer from "../../components/Home/SelectorCardContainer/SelectorCardContainer";

export default function Home() {
  return (
    <>
      {/* <InfoMain /> */}
      <HomeCardContainer />
      <Category />
      <AboutUs />
      <SelectorCardContainer />
    </>
  );
}
