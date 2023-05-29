import React from "react";
import HomeCard from "../../components/Home/Home-Card/HomeCard";
import InfoMain from "../../components/Home/InfoMain/InfoMain";
import Category from "../../components/Home/Category/Category";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import SelectorCard from "../../components/Home/Selector-Card/SelectorCard";

export default function Home() {
  return (
    <div>
      <InfoMain />
      <HomeCard />
      <Category />
      <AboutUs />
      <SelectorCard />
    </div>
  );
}
