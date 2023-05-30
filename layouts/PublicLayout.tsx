import React from "react";
import Navbar from "../components/Navbar/Navbar";

type Props = {
  children: React.ReactNode
}

export default function PrivateLayout({children}:Props) {
  return <>
    <Navbar />
    {children}
  </>;
}
