import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";

export default function BtnAddDel({ item }) {
  const { updateCart } = useCart();
  const quantity = item?.quantity;
  return (
    <div className="flex flex-col justify-center gap-2 text-center text-6xl px-3">
      <FaPlus
        onClick={() => updateCart(item, 1)}
        className=" text-blue-600 hover:cursor-pointer"
      />
      <div className="text-4xl text-blue-800 font-bold">{quantity}</div>
      {quantity && (
        <FaMinus
          onClick={() => updateCart(item, -1)}
          className=" text-blue-600 hover:cursor-pointer"
        />
      )}
    </div>
  );
}
