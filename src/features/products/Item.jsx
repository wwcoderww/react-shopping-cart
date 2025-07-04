import React from "react";
import ItemImage from "./item/ItemImage";
import ItemTitle from "./item/ItemTitle";
import ItemStats from "./item/ItemStats";
import ItemInput from "./item/ItemInput";

export default function Item({ item }) {
  return (
    <li className="w-80 border-5 rounded-sm text-blue-100 hover:border-blue-900 hover:cursor-pointer">
      <ItemImage image={item.image} />
      <ItemTitle title={item.title} />
      <ItemStats price={item.price} rating={item.rating} />
      <ItemInput item={item} />
    </li>
  );
}
