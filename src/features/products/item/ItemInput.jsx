import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../../../hooks/CartContext";

export default function ItemInput({ item }) {
  const { updateCart, cart } = useCart();
  const cartItem = cart.find((cartItem) => cartItem.title === item.title);

  return (
    <div className="flex justify-center pt-16 pb-4 text-3xl">
      {cartItem && (
        <FaMinus
          onClick={() => updateCart(item, -1)}
          className=" text-blue-200 hover:text-4xl"
        />
      )}
      <div>{cartItem?.quantity}</div>
      <FaPlus
        onClick={() => updateCart(item, 1)}
        className=" text-blue-200 hover:text-4xl"
      />
    </div>
  );
}
