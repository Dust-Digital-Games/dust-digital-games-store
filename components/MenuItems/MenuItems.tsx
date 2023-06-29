import React from "react";
interface Props {
  className: string;
  initial?: string | Object;
}

export default function MenuItems({ className }: Props) {
  return (
    <ul className={className}>
      <li>Games</li>
      <li>New!</li>
      <li>Categories</li>
      <li>About</li>
    </ul>
  );
}
