import React from "react";

export default function ItemRating({ rating, price }) {
  return (
    <div className="flex justify-between px-2 items-center pt-2">
      <div className="text-2xl text-green-300">${price.toFixed(2)}</div>
      <div className="text-lg">
        ⭐<span className="text-xl px-1">{rating.rate}</span>({rating.count})
      </div>
    </div>
  );
}
