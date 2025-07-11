import React from "react";
import { useCart } from "../../hooks/CartContext";
import Item from "./Item";

export default function ItemContainer() {
  const { cart, updateCart } = useCart();
  return (
    <ul className="py-20">
      {cart?.map((item) => (
        <Item item={item} key={item.id} updateCart={updateCart} />
      ))}
    </ul>
  );
}
