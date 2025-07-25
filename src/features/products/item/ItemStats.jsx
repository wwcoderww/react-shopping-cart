import React from "react";

export default function ItemRating({ rating, price }) {
  return (
    <div className="flex justify-between px-2 items-center pt-2">
      <div className="text-3xl text-green-300 font-[700]">
        ${price.toFixed(2)}
      </div>
      <div className="text-lg font-[500]">
        ⭐<span className="text-xl px-1 font-bold">{rating.rate}</span>(
        {rating.count})
      </div>
    </div>
  );
}
