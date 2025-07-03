import React from "react";
import Item from "./Item";
import { useCart } from "../../hooks/CartContext";

export default function Container({ data }) {
  const { cart } = useCart();
  console.log(cart);
  return (
    <ul className="flex flex-wrap justify-center gap-5">
      {data.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}
