import React from "react";
import ItemImage from "./item/ItemImage";
import ItemInfo from "./item/ItemInfo";
import ItemInput from "./item/ItemInput";

export default function Item({ item, updateCart }) {
  return (
    <li className="bg-blue-300 max-w-[50rem] mx-auto flex h-40 border-b-2">
      <ItemImage item={item} />
      <ItemInfo item={item} />
      <ItemInput item={item} updateCart={updateCart} />
    </li>
  );
}
