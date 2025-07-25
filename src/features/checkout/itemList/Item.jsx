import React from "react";
import ItemImage from "./ItemImage";
import ItemInfo from "./ItemInfo";
import ItemInput from "./ItemInput";

export default function Item({ item, updateCart, index }) {
  const liStyle = `flex h-56 ${index !== 0 && "border-t-3"}`;
  return (
    <li className={liStyle}>
      <ItemImage item={item} />
      <ItemInfo item={item} />
      <ItemInput item={item} updateCart={updateCart} />
    </li>
  );
}
