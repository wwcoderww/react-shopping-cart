import React from "react";
import { FaPlus } from "react-icons/fa";
import { useCart } from "../../../hooks/CartContext";

export default function ItemInput({ item }) {
  const { updateCart } = useCart();
  return (
    <div className="flex justify-center pt-16 pb-4 text-3xl">
      <button
        onClick={() => updateCart(item, -1)}
        className=" text-blue-200 hover:text-4xl"
      >
        -
      </button>
      <FaPlus
        onClick={() => updateCart(item, 1)}
        className=" text-blue-200 hover:text-4xl"
      />
      <div>{item?.quantity}</div>
    </div>
  );
}
