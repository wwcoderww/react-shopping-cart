import React from "react";
import { useCart } from "../hooks/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function BtnAddDel({ item }) {
  const { updateCart } = useCart();
  const quantity = item?.quantity;
  console.log(item.quantity);
  return (
    <div className="flex flex-col justify-center gap-2 text-center text-3xl px-3">
      <FaPlus onClick={() => updateCart(item, 1)} className=" text-blue-600" />
      <div className="text-4xl text-blue-800 font-bold">{quantity}</div>
      <FaMinus
        onClick={() => updateCart(item, -1)}
        className=" text-blue-600"
      />
    </div>
  );
}
