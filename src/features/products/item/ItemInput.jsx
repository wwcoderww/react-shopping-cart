import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../../../contexts/CartContext";

export default function ItemInput({ item }) {
  const { updateCart, cart } = useCart();
  // If Item is in cart return item
  const cartItem = cart.find((cartItem) => cartItem.title === item.title);

  function handleAdd(e, amount) {
    e.stopPropagation();
    updateCart(cartItem || item, amount);
  }

  return (
    <div className="flex justify-center py-12 h-32 text-5xl gap-3 items-center">
      {cartItem && (
        <FaMinus
          onClick={(e) => handleAdd(e, -1)}
          className=" text-blue-200 hover:text-6xl w-12 hover:text-blue-600"
        />
      )}
      <div className=" mx-2">{cartItem?.quantity}</div>
      <FaPlus
        onClick={(e) => handleAdd(e, 1)}
        className=" text-blue-200 hover:text-6xl w-12 hover:text-blue-600"
      />
    </div>
  );
}
