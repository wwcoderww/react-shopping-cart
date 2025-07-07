import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function ItemInput({ item, updateCart }) {
  return (
    <div className="flex flex-col justify-center gap-2 text-center text-3xl px-3">
      <FaPlus onClick={() => updateCart(item, 1)} className=" text-blue-600" />
      <div className="text-4xl text-blue-800 font-bold">{item.quantity}</div>
      <FaMinus
        onClick={() => updateCart(item, -1)}
        className=" text-blue-600"
      />
    </div>
  );
}
