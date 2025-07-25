import React from "react";
import ItemImage from "./item/ItemImage";
import ItemInfo from "./item/ItemInfo";
import ItemInput from "./item/ItemInput";

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
