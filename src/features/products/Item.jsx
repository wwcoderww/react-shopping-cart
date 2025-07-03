import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Item({ item: { title, image, price, rating } }) {
  return (
    <li className="w-80 border-5 rounded-sm text-blue-100 hover:border-blue-900 hover:cursor-pointer">
      <img
        src={image}
        alt="Missing Image"
        className="block object-fit w-80 h-80"
      />
      <div className="text-2xl font-bold line-clamp-2 text-center border-b-3 p-1 min-h-[2.4lh]">
        {title}
      </div>
      <div className="flex justify-between px-2 items-center pt-2">
        <div className="text-2xl text-green-300">${price.toFixed(2)}</div>
        <div className="text-lg">
          ⭐<span className="text-xl px-1">{rating.rate}</span>({rating.count})
        </div>
      </div>
      <div className="flex justify-center pt-16 pb-4 text-3xl">
        <FaPlus className=" text-blue-200" />
      </div>
    </li>
  );
}
