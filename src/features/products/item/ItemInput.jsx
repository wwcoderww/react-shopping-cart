import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../../../hooks/CartContext";

export default function ItemInput({ item }) {
  const { updateCart, cart } = useCart();
  const cartItem = cart.find((cartItem) => cartItem.title === item.title);

  return (
    <div
      className="flex justify-center py-9 text-3xl gap-3 items-center"
      onClick={(e) => e.stopPropagation()}
    >
      {cartItem && (
        <FaMinus
          onClick={() => updateCart(item, -1)}
          className=" text-blue-200 hover:text-4xl"
        />
      )}
      <div className="text-4xl">{cartItem?.quantity}</div>
      <FaPlus
        onClick={() => updateCart(item, 1)}
        className=" text-blue-200 hover:text-4xl"
      />
    </div>
  );
}
