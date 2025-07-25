import React from "react";
import Item from "./itemList/Item";

export default function ItemList({ cart, updateCart }) {
  return (
    <ul className="border-4  rounded-md bg-white">
      {cart?.map((item, index) => (
        <Item item={item} key={item.id} updateCart={updateCart} index={index} />
      ))}
    </ul>
  );
}
